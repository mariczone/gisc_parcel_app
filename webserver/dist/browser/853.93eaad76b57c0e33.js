"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[853],{550:(et,Z,r)=>{function g(){return[1,0,0,0,1,0,0,0,1]}function N(y,h,E,p,c,U,A,O,W){return[y,h,E,p,c,U,A,O,W]}function T(y,h){return new Float64Array(y,h,9)}r.d(Z,{a:()=>T,c:()=>g,f:()=>N}),Object.freeze(Object.defineProperty({__proto__:null,clone:function R(y){return[y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8]]},create:g,createView:T,fromValues:N},Symbol.toStringTag,{value:"Module"}))},43703:(et,Z,r)=>{function g(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function R(h){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9],h[10],h[11],h[12],h[13],h[14],h[15]]}function N(h,E,p,c,U,A,O,W,b,z,L,K,Y,k,M,m){return[h,E,p,c,U,A,O,W,b,z,L,K,Y,k,M,m]}function T(h,E){return new Float64Array(h,E,16)}r.d(Z,{I:()=>I,a:()=>T,b:()=>R,c:()=>g,f:()=>N});const I=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:I,clone:R,create:g,createView:T,fromValues:N},Symbol.toStringTag,{value:"Module"}))},48977:(et,Z,r)=>{r.d(Z,{c:()=>K,g:()=>p,i:()=>L,j:()=>st,k:()=>k,m:()=>c,r:()=>u,s:()=>E});var g=r(550),R=r(78451),N=r(28093),T=r(39863),I=r(84161),y=r(993);function E(t,n,f){f*=.5;const o=Math.sin(f);return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=Math.cos(f),t}function p(t,n){const f=2*Math.acos(n[3]),o=Math.sin(f/2);return o>(0,T.g)()?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),f}function c(t,n,f){const o=n[0],l=n[1],D=n[2],j=n[3],C=f[0],F=f[1],q=f[2],rt=f[3];return t[0]=o*rt+j*C+l*q-D*F,t[1]=l*rt+j*F+D*C-o*q,t[2]=D*rt+j*q+o*F-l*C,t[3]=j*rt-o*C-l*F-D*q,t}function b(t,n,f,o){const l=n[0],D=n[1],j=n[2],C=n[3];let F,q,rt,_t,ct,ut=f[0],lt=f[1],ft=f[2],Mt=f[3];return q=l*ut+D*lt+j*ft+C*Mt,q<0&&(q=-q,ut=-ut,lt=-lt,ft=-ft,Mt=-Mt),1-q>(0,T.g)()?(F=Math.acos(q),rt=Math.sin(F),_t=Math.sin((1-o)*F)/rt,ct=Math.sin(o*F)/rt):(_t=1-o,ct=o),t[0]=_t*l+ct*ut,t[1]=_t*D+ct*lt,t[2]=_t*j+ct*ft,t[3]=_t*C+ct*Mt,t}function L(t,n){const f=n[0],o=n[1],l=n[2],D=n[3],j=f*f+o*o+l*l+D*D,C=j?1/j:0;return t[0]=-f*C,t[1]=-o*C,t[2]=-l*C,t[3]=D*C,t}function K(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Y(t,n){const f=n[0]+n[4]+n[8];let o;if(f>0)o=Math.sqrt(f+1),t[3]=.5*o,o=.5/o,t[0]=(n[5]-n[7])*o,t[1]=(n[6]-n[2])*o,t[2]=(n[1]-n[3])*o;else{let l=0;n[4]>n[0]&&(l=1),n[8]>n[3*l+l]&&(l=2);const D=(l+1)%3,j=(l+2)%3;o=Math.sqrt(n[3*l+l]-n[3*D+D]-n[3*j+j]+1),t[l]=.5*o,o=.5/o,t[3]=(n[3*D+j]-n[3*j+D])*o,t[D]=(n[3*D+l]+n[3*l+D])*o,t[j]=(n[3*j+l]+n[3*l+j])*o}return t}function k(t,n,f,o){const l=.5*Math.PI/180;n*=l,f*=l,o*=l;const D=Math.sin(n),j=Math.cos(n),C=Math.sin(f),F=Math.cos(f),q=Math.sin(o),rt=Math.cos(o);return t[0]=D*F*rt-j*C*q,t[1]=j*C*rt+D*F*q,t[2]=j*F*q-D*C*rt,t[3]=j*F*rt+D*C*q,t}const m=y.c,x=y.s,J=y.a,B=c,w=y.b,V=y.d,G=y.l,X=y.e,Q=X,nt=y.f,$=nt,tt=y.n,st=y.g,_=y.h;function u(t,n,f){const o=(0,I.e)(n,f);return o<-.999999?((0,I.f)(a,d,n),(0,I.u)(a)<1e-6&&(0,I.f)(a,P,n),(0,I.n)(a,a),E(t,a,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,I.f)(a,n,f),t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=1+o,tt(t,t))}const a=(0,N.c)(),d=(0,N.f)(1,0,0),P=(0,N.f)(0,1,0),S=(0,R.a)(),ot=(0,R.a)(),it=(0,g.c)();Object.freeze(Object.defineProperty({__proto__:null,add:J,calculateW:function W(t,n){const f=n[0],o=n[1],l=n[2];return t[0]=f,t[1]=o,t[2]=l,t[3]=Math.sqrt(Math.abs(1-f*f-o*o-l*l)),t},conjugate:K,copy:m,dot:V,equals:_,exactEquals:st,fromEuler:k,fromMat3:Y,getAxisAngle:p,identity:function h(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:L,len:Q,length:X,lerp:G,mul:B,multiply:c,normalize:tt,random:function z(t){const n=T.R,f=n(),o=n(),l=n(),D=Math.sqrt(1-f),j=Math.sqrt(f);return t[0]=D*Math.sin(2*Math.PI*o),t[1]=D*Math.cos(2*Math.PI*o),t[2]=j*Math.sin(2*Math.PI*l),t[3]=j*Math.cos(2*Math.PI*l),t},rotateX:function U(t,n,f){f*=.5;const o=n[0],l=n[1],D=n[2],j=n[3],C=Math.sin(f),F=Math.cos(f);return t[0]=o*F+j*C,t[1]=l*F+D*C,t[2]=D*F-l*C,t[3]=j*F-o*C,t},rotateY:function A(t,n,f){f*=.5;const o=n[0],l=n[1],D=n[2],j=n[3],C=Math.sin(f),F=Math.cos(f);return t[0]=o*F-D*C,t[1]=l*F+j*C,t[2]=D*F+o*C,t[3]=j*F-l*C,t},rotateZ:function O(t,n,f){f*=.5;const o=n[0],l=n[1],D=n[2],j=n[3],C=Math.sin(f),F=Math.cos(f);return t[0]=o*F+l*C,t[1]=l*F-o*C,t[2]=D*F+j*C,t[3]=j*F-D*C,t},rotationTo:u,scale:w,set:x,setAxes:function at(t,n,f,o){const l=it;return l[0]=f[0],l[3]=f[1],l[6]=f[2],l[1]=o[0],l[4]=o[1],l[7]=o[2],l[2]=-n[0],l[5]=-n[1],l[8]=-n[2],tt(t,Y(t,l))},setAxisAngle:E,slerp:b,sqlerp:function v(t,n,f,o,l,D){return b(S,n,l,D),b(ot,f,o,D),b(t,S,ot,2*D*(1-D)),t},sqrLen:$,squaredLength:nt,str:function M(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},78451:(et,Z,r)=>{function g(){return[0,0,0,1]}function R(h){return[h[0],h[1],h[2],h[3]]}function T(h,E){return new Float64Array(h,E,4)}r.d(Z,{I:()=>I,a:()=>g,b:()=>R,c:()=>T});const I=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:I,clone:R,create:g,createView:T,fromValues:function N(h,E,p,c){return[h,E,p,c]}},Symbol.toStringTag,{value:"Module"}))},79800:(et,Z,r)=>{r.d(Z,{a:()=>N,b:()=>y,n:()=>I,s:()=>T,t:()=>R});var g=r(96286);function R(E,p,c){if(E.count!==p.count)return void g.c.error("source and destination buffers need to have the same number of elements");const U=E.count,A=c[0],O=c[1],W=c[2],b=c[4],z=c[5],L=c[6],K=c[8],Y=c[9],k=c[10],M=c[12],m=c[13],x=c[14],J=E.typedBuffer,B=E.typedBufferStride,w=p.typedBuffer,V=p.typedBufferStride;for(let G=0;G<U;G++){const X=G*B,Q=G*V,nt=w[Q],$=w[Q+1],tt=w[Q+2];J[X]=A*nt+b*$+K*tt+M,J[X+1]=O*nt+z*$+Y*tt+m,J[X+2]=W*nt+L*$+k*tt+x}}function N(E,p,c){if(E.count!==p.count)return void g.c.error("source and destination buffers need to have the same number of elements");const U=E.count,A=c[0],O=c[1],W=c[2],b=c[3],z=c[4],L=c[5],K=c[6],Y=c[7],k=c[8],M=E.typedBuffer,m=E.typedBufferStride,x=p.typedBuffer,J=p.typedBufferStride;for(let B=0;B<U;B++){const w=B*m,V=B*J,G=x[V],X=x[V+1],Q=x[V+2];M[w]=A*G+b*X+K*Q,M[w+1]=O*G+z*X+Y*Q,M[w+2]=W*G+L*X+k*Q}}function T(E,p,c){const U=Math.min(E.count,p.count),A=E.typedBuffer,O=E.typedBufferStride,W=p.typedBuffer,b=p.typedBufferStride;for(let z=0;z<U;z++){const L=z*O,K=z*b;A[L]=c*W[K],A[L+1]=c*W[K+1],A[L+2]=c*W[K+2]}}function I(E,p){const c=Math.min(E.count,p.count),U=E.typedBuffer,A=E.typedBufferStride,O=p.typedBuffer,W=p.typedBufferStride;for(let b=0;b<c;b++){const z=b*A,L=b*W,K=O[L],Y=O[L+1],k=O[L+2],M=K*K+Y*Y+k*k;if(M>0){const m=1/Math.sqrt(M);U[z]=m*K,U[z+1]=m*Y,U[z+2]=m*k}}}function y(E,p,c){const U=Math.min(E.count,p.count),A=E.typedBuffer,O=E.typedBufferStride,W=p.typedBuffer,b=p.typedBufferStride;for(let z=0;z<U;z++){const L=z*O,K=z*b;A[L]=W[K]>>c,A[L+1]=W[K+1]>>c,A[L+2]=W[K+2]>>c}}Object.freeze(Object.defineProperty({__proto__:null,normalize:I,scale:T,shiftRight:y,transformMat3:N,transformMat4:R},Symbol.toStringTag,{value:"Module"}))},9554:(et,Z,r)=>{function g(T,I,y){const h=T.typedBuffer,E=T.typedBufferStride,p=I.typedBuffer,c=I.typedBufferStride,U=y?y.count:I.count;let A=(y&&y.dstIndex?y.dstIndex:0)*E,O=(y&&y.srcIndex?y.srcIndex:0)*c;for(let W=0;W<U;++W)h[A]=p[O],h[A+1]=p[O+1],h[A+2]=p[O+2],A+=E,O+=c}function R(T,I,y,h,E){const p=T.typedBuffer,c=T.typedBufferStride,U=E?.count??T.count;let A=(E?.dstIndex??0)*c;for(let O=0;O<U;++O)p[A]=I,p[A+1]=y,p[A+2]=h,A+=c}r.d(Z,{c:()=>g,f:()=>R}),Object.freeze(Object.defineProperty({__proto__:null,copy:g,fill:R},Symbol.toStringTag,{value:"Module"}))},99746:(et,Z,r)=>{r.d(Z,{Z:()=>J});var M,g=r(17626),R=r(86810),N=r(62208),T=r(77712),h=(r(90912),r(85931),r(76898)),E=r(28347),p=r(43703),c=r(48977),U=r(78451),A=r(84161),O=r(28093),W=r(72642),b=r(55915),z=r(81863),L=r(89586),K=r(60479),Y=r(79800),k=r(9554);let m=M=class extends R.wq{constructor(B){super(B),this.origin=(0,O.c)(),this.translation=(0,O.c)(),this.rotation=(0,L.Ue)(),this.scale=(0,O.f)(1,1,1),this.geographic=!0}get localMatrix(){const B=(0,p.c)();return(0,c.s)(x,(0,L.ZZ)(this.rotation),(0,L.WH)(this.rotation)),(0,E.g)(B,x,this.translation,this.scale),B}get localMatrixInverse(){return(0,E.a)((0,p.c)(),this.localMatrix)}applyLocal(B,w){return(0,A.m)(w,B,this.localMatrix)}applyLocalInverse(B,w){return(0,A.m)(w,B,this.localMatrixInverse)}project(B,w){const V=new Float64Array(B.length),G=K.fP.fromTypedArray(V),X=K.fP.fromTypedArray(B);if(this.geographic){const $=(0,z.rS)(w),tt=(0,p.c)();return(0,b.Bm)(w,this.origin,tt,$),(0,E.m)(tt,tt,this.localMatrix),(0,Y.t)(G,X,tt),(0,b.CM)(V,$,0,V,w,0,V.length/3),V}const{localMatrix:Q,origin:nt}=this;(0,E.h)(Q,p.I)?(0,k.c)(G,X):(0,Y.t)(G,X,Q);for(let $=0;$<V.length;$+=3)V[$+0]+=nt[0],V[$+1]+=nt[1],V[$+2]+=nt[2];return V}getOriginPoint(B){const[w,V,G]=this.origin;return new W.Z({x:w,y:V,z:G,spatialReference:B})}equals(B){return(0,N.pC)(B)&&this.geographic===B.geographic&&(0,A.k)(this.origin,B.origin)&&(0,E.j)(this.localMatrix,B.localMatrix)}clone(){const B={origin:(0,O.a)(this.origin),translation:(0,O.a)(this.translation),rotation:(0,L.Ue)(this.rotation),scale:(0,O.a)(this.scale),geographic:this.geographic};return new M(B)}};(0,g._)([(0,T.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"origin",void 0),(0,g._)([(0,T.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),(0,g._)([(0,T.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotation",void 0),(0,g._)([(0,T.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),(0,g._)([(0,T.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],m.prototype,"geographic",void 0),(0,g._)([(0,T.Cb)()],m.prototype,"localMatrix",null),(0,g._)([(0,T.Cb)()],m.prototype,"localMatrixInverse",null),m=M=(0,g._)([(0,h.j)("esri.geometry.support.MeshTransform")],m);const x=(0,U.a)(),J=m},89586:(et,Z,r)=>{r.d(Z,{EU:()=>W,Ue:()=>I,WH:()=>b,ZZ:()=>O,qC:()=>A,uT:()=>c});var g=r(21286),R=r(48977),N=r(78451),T=r(84161);function I(M=L){return[M[0],M[1],M[2],M[3]]}function c(M,m,x=I()){return(0,T.c)(x,M),x[3]=m,x}function A(M,m,x=I()){return(0,R.s)(K,M,b(M)),(0,R.s)(Y,m,b(m)),(0,R.m)(K,Y,K),function z(M,m){return M[3]=m,M}(x,(0,g.BV)((0,R.g)(x,K)))}function O(M){return M}function W(M){return M[3]}function b(M){return(0,g.Vl)(M[3])}const L=[0,0,1,0],K=(0,N.a)(),Y=(0,N.a)();I()},96286:(et,Z,r)=>{r.d(Z,{c:()=>R});const R=r(63290).Z.getLogger("esri.views.3d.support.buffer.math")},92545:(et,Z,r)=>{function g(R,N){return R.isGeographic||R.isWebMercator&&(N?.geographic??!0)}r.d(Z,{h:()=>g})},60853:(et,Z,r)=>{r.d(Z,{FF:()=>L,I5:()=>b,Yq:()=>K,iv:()=>W,w1:()=>z});var g=r(62208),R=r(16730),N=r(550),T=r(28347),I=r(43703),y=r(30217),h=r(55915),E=r(81863),p=r(99746),c=r(60479),U=r(79800),A=r(92545),O=r(65231);function W(_,u,a){return(0,A.h)(u.spatialReference,a)?function k(_,u,a){const d=u.spatialReference,P=w(u,a,nt),v=new Float64Array(_.position.length),S=function M(_,u,a,d){(0,U.t)(c.fP.fromTypedArray(d),c.fP.fromTypedArray(_),u);const P=new Float64Array(_.length);return(0,O.To)(d,P,a)}(_.position,P,d,v),ot=(0,y.b)(tt,P);return{position:S,normal:m(S,v,_.normal,ot,d),tangent:x(S,v,_.tangent,ot,d)}}(_,u,a):function Y(_,u,a){const d=new Float64Array(_.position.length),P=_.position,v=u.x,S=u.y,ot=u.z||0,{horizontal:at,vertical:it}=Q(a?a.unit:null,u.spatialReference);for(let H=0;H<P.length;H+=3)d[H+0]=P[H+0]*at+v,d[H+1]=P[H+1]*at+S,d[H+2]=P[H+2]*it+ot;return{position:d,normal:_.normal,tangent:_.tangent}}(_,u,a)}function b(_,u,a){const{position:d,normal:P,tangent:v}=_;if((0,g.Wi)(u))return{position:d,normal:P,tangent:v};const S=u.localMatrix;return W({position:(0,O.zZ)(d,new Float64Array(d.length),S),normal:(0,g.pC)(P)?(0,O.w9)(P,new Float32Array(P.length),S):null,tangent:(0,g.pC)(v)?(0,O.VS)(v,new Float32Array(v.length),S):null},u.getOriginPoint(a),{geographic:u.geographic})}function z(_,u,a){if(a?.useTransform){const{position:d,normal:P,tangent:v}=_;return{vertexAttributes:{position:d,normal:P,tangent:v},transform:new p.Z({origin:[u.x,u.y,u.z??0],geographic:(0,A.h)(u.spatialReference,a)})}}return{vertexAttributes:W(_,u,a),transform:null}}function L(_,u,a){return(0,A.h)(u.spatialReference,a)?function B(_,u,a){const d=u.spatialReference;w(u,a,nt);const P=(0,T.a)($,nt),v=new Float64Array(_.position.length),S=function V(_,u,a,d){const P=(0,O.XO)(_,u,d),v=c.fP.fromTypedArray(P),S=new Float64Array(P.length),ot=c.fP.fromTypedArray(S);return(0,U.t)(ot,v,a),S}(_.position,d,P,v),ot=(0,y.b)(tt,P);return{position:S,normal:G(_.normal,_.position,v,d,ot),tangent:X(_.tangent,_.position,v,d,ot)}}(_,u,a):J(_,u,a)}function K(_,u,a,d){if((0,g.Wi)(u))return L(_,a,d);const P=b(_,u,a.spatialReference);return a.equals(u.getOriginPoint(a.spatialReference))?J(P,a,d):L(P,a,d)}function m(_,u,a,d,P){if((0,g.Wi)(a))return null;const v=new Float32Array(a.length);return(0,U.a)(c.ct.fromTypedArray(v),c.ct.fromTypedArray(a),d),(0,O.Yk)(v,_,u,P,v),v}function x(_,u,a,d,P){if((0,g.Wi)(a))return null;const v=new Float32Array(a.length);(0,U.a)(c.ct.fromTypedArray(v,4*Float32Array.BYTES_PER_ELEMENT),c.ct.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),d);for(let S=3;S<v.length;S+=4)v[S]=a[S];return(0,O.M2)(v,_,u,P,v),v}function J(_,u,a){const d=new Float64Array(_.position.length),P=_.position,v=u.x,S=u.y,ot=u.z||0,{horizontal:at,vertical:it}=Q(a?a.unit:null,u.spatialReference);for(let H=0;H<P.length;H+=3)d[H+0]=(P[H+0]-v)/at,d[H+1]=(P[H+1]-S)/at,d[H+2]=(P[H+2]-ot)/it;return{position:d,normal:_.normal,tangent:_.tangent}}function w(_,u,a){(0,h.Bm)(_.spatialReference,[_.x,_.y,_.z||0],a,(0,E.rS)(_.spatialReference));const{horizontal:d,vertical:P}=Q(u?u.unit:null,_.spatialReference);return(0,T.k)(a,a,[d,d,P]),a}function G(_,u,a,d,P){if((0,g.Wi)(_))return null;const v=(0,O.Iz)(_,u,a,d,new Float32Array(_.length)),S=c.ct.fromTypedArray(v);return(0,U.a)(S,S,P),v}function X(_,u,a,d,P){if((0,g.Wi)(_))return null;const v=(0,O.wi)(_,u,a,d,new Float32Array(_.length)),S=c.ct.fromTypedArray(v,4*Float32Array.BYTES_PER_ELEMENT);return(0,U.a)(S,S,P),v}function Q(_,u){if((0,g.Wi)(_))return st;const a=u.isGeographic?1:(0,R.c9)(u),d=u.isGeographic?1:(0,R._R)(u),P=(0,R.En)(1,_,"meters");return{horizontal:P*a,vertical:P*d}}const nt=(0,I.c)(),$=(0,I.c)(),tt=(0,N.c)(),st={horizontal:1,vertical:1}}}]);