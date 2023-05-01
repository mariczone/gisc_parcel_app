"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[8415,7777,928,4766],{84600:(ot,F,p)=>{p.d(F,{N9:()=>K,Pr:()=>Y,SP:()=>x,Se:()=>y,cy:()=>E,i_:()=>W,ym:()=>X});var c=p(62208),P=p(15572),h=p(90466);function G(s,l,d,R=2,T="abbr"){return(0,h.VG)(s,(0,P.nn)(l,d).value,d,R,T)}function I(s,l,d,R=2,T="abbr"){return(0,h.LO)(s,(0,P.nn)(l,d).value,d,R,T)}function E(s,l,d){return(0,h.L4)(s.value,s.unit,s.rotationType,l,d)}function x(s,l,d){return(0,h._o)(s.value,s.unit,s.rotationType,l,d)}function K(s,l,d,R,T="abbr"){switch(R=(0,c.Pt)(R,2),d){case"imperial":return function V(s,l,d=2,R="abbr"){return(0,h.Ud)(s,l.value,l.unit,d,R)}(s,l,R,T);case"metric":return function U(s,l,d=2,R="abbr"){return(0,h.Rd)(s,l.value,l.unit,d,R)}(s,l,R,T);default:return G(s,l,d,R,T)}}function W(s,l,d,R=2,T="abbr"){switch(d){case"imperial":return function m(s,l,d=2,R="abbr"){return(0,h.q6)(s,l.value,l.unit,d,R)}(s,l,R,T);case"metric":return function b(s,l,d=2,R="abbr"){return(0,h.mg)(s,l.value,l.unit,d,R)}(s,l,R,T);default:return I(s,l,d,R,T)}}function X(s,l,d,R=2,T="abbr"){switch(d){case"imperial":return function C(s,l,d=2,R="abbr"){return(0,h.Zv)(s,l.value,l.unit,d,R)}(s,l,R,T);case"metric":return function B(s,l,d=2,R="abbr"){return(0,h.Wv)(s,l.value,l.unit,d,R)}(s,l,R,T);default:return G(s,l,d,R,T)}}function Y(s,l,d,R=2,T="abbr"){switch(d){case"imperial":return function M(s,l,d=2,R="abbr"){return(0,h.aC)(s,l.value,l.unit,d,R)}(s,l,R,T);case"metric":return function $(s,l,d=2,R="abbr"){return(0,h.h9)(s,l.value,l.unit,d,R)}(s,l,R,T);default:return I(s,l,d,R,T)}}function y(s,l,d,R=2,T="abbr"){switch(d){case"imperial":return function O(s,l,d=2,R="abbr"){return(0,h.yc)(s,l.value,l.unit,d,R)}(s,l,R,T);case"metric":return function S(s,l,d=2,R="abbr"){return(0,h.ld)(s,l.value,l.unit,d,R)}(s,l,R,T);default:return G(s,l,d,R,T)}}},15572:(ot,F,p)=>{p.d(F,{Fp:()=>V,GJ:()=>b,MQ:()=>O,bA:()=>C,ne:()=>I,nn:()=>$,yG:()=>G,yP:()=>M});var c=p(62208),P=p(16730);function G(E,x){return{type:(0,P.UF)(x),value:E,unit:x}}function I(E,x){return{type:(0,P.UF)(x),value:E,unit:x}}function b(E,x,K="arithmetic"){return{type:(0,P.UF)(x),value:E,unit:x,rotationType:K}}function $(E,x){return function h(E,x){return{type:(0,P.UF)(x),value:E,unit:x}}((0,P.En)(E.value,E.unit,x),x)}function V(E,x){return(0,c.Wi)(E)?x:(0,c.Wi)(x)||E.value>(0,P.En)(x.value,x.unit,E.unit)?E:x}function C(E,x){return(0,c.Wi)(E)?null:{...E,value:E.value*x}}const M=G(0,"meters"),O=I(0,"square-meters");b(0,"radians")},77777:(ot,F,p)=>{p.r(F),p.d(F,{hydratedAdapter:()=>U});var c=p(2004),P=p(72854),h=p(72642),G=p(37118),I=p(55214);const U={convertToGEGeometry:function b(C,M){if(null==M)return null;let O="cache"in M?M.cache._geVersion:void 0;return null==O&&(O=C.convertJSONToGeometry(M),"cache"in M&&(M.cache._geVersion=O)),O},exportPoint:function B(C,M,O){const Z=C.hasZ(M),E=C.hasM(M),x=new h.Z({x:C.getPointX(M),y:C.getPointY(M),spatialReference:O});return Z&&(x.z=C.getPointZ(M)),E&&(x.m=C.getPointM(M)),x.cache._geVersion=M,x},exportPolygon:function $(C,M,O){const Z=new G.Z({rings:C.exportPaths(M),hasZ:C.hasZ(M),hasM:C.hasM(M),spatialReference:O});return Z.cache._geVersion=M,Z},exportPolyline:function S(C,M,O){const Z=new I.Z({paths:C.exportPaths(M),hasZ:C.hasZ(M),hasM:C.hasM(M),spatialReference:O});return Z.cache._geVersion=M,Z},exportMultipoint:function V(C,M,O){const Z=new P.Z({hasZ:C.hasZ(M),hasM:C.hasM(M),points:C.exportPoints(M),spatialReference:O});return Z.cache._geVersion=M,Z},exportExtent:function m(C,M,O){const Z=C.hasZ(M),E=C.hasM(M),x=new c.Z({xmin:C.getXMin(M),ymin:C.getYMin(M),xmax:C.getXMax(M),ymax:C.getYMax(M),spatialReference:O});if(Z){const K=C.getZExtent(M);x.zmin=K.vmin,x.zmax=K.vmax}if(E){const K=C.getMExtent(M);x.mmin=K.vmin,x.mmax=K.vmax}return x.cache._geVersion=M,x}}},44766:(ot,F,p)=>{p.r(F),p.d(F,{buffer:()=>l,changeDefaultSpatialReferenceTolerance:()=>_t,clearDefaultSpatialReferenceTolerance:()=>mt,clip:()=>I,contains:()=>b,convexHull:()=>K,crosses:()=>B,cut:()=>U,densify:()=>st,difference:()=>W,disjoint:()=>M,distance:()=>$,equals:()=>S,extendedSpatialReferenceInfo:()=>G,flipHorizontal:()=>z,flipVertical:()=>H,generalize:()=>et,geodesicArea:()=>ft,geodesicBuffer:()=>d,geodesicDensify:()=>it,geodesicLength:()=>rt,intersect:()=>Y,intersectLinesToPoints:()=>ut,intersects:()=>V,isSimple:()=>E,nearestCoordinate:()=>R,nearestVertex:()=>T,nearestVertices:()=>q,offset:()=>s,overlaps:()=>O,planarArea:()=>lt,planarLength:()=>at,relate:()=>Z,rotate:()=>w,simplify:()=>x,symmetricDifference:()=>X,touches:()=>m,union:()=>y,within:()=>C});var c=p(4918),P=p(77777);function h(_){return Array.isArray(_)?_[0].spatialReference:_&&_.spatialReference}function G(_){return c.G.extendedSpatialReferenceInfo(_)}function I(_,A){return c.G.clip(P.hydratedAdapter,h(_),_,A)}function U(_,A){return c.G.cut(P.hydratedAdapter,h(_),_,A)}function b(_,A){return c.G.contains(P.hydratedAdapter,h(_),_,A)}function B(_,A){return c.G.crosses(P.hydratedAdapter,h(_),_,A)}function $(_,A,Q){return c.G.distance(P.hydratedAdapter,h(_),_,A,Q)}function S(_,A){return c.G.equals(P.hydratedAdapter,h(_),_,A)}function V(_,A){return c.G.intersects(P.hydratedAdapter,h(_),_,A)}function m(_,A){return c.G.touches(P.hydratedAdapter,h(_),_,A)}function C(_,A){return c.G.within(P.hydratedAdapter,h(_),_,A)}function M(_,A){return c.G.disjoint(P.hydratedAdapter,h(_),_,A)}function O(_,A){return c.G.overlaps(P.hydratedAdapter,h(_),_,A)}function Z(_,A,Q){return c.G.relate(P.hydratedAdapter,h(_),_,A,Q)}function E(_){return c.G.isSimple(P.hydratedAdapter,h(_),_)}function x(_){return c.G.simplify(P.hydratedAdapter,h(_),_)}function K(_,A=!1){return c.G.convexHull(P.hydratedAdapter,h(_),_,A)}function W(_,A){return c.G.difference(P.hydratedAdapter,h(_),_,A)}function X(_,A){return c.G.symmetricDifference(P.hydratedAdapter,h(_),_,A)}function Y(_,A){return c.G.intersect(P.hydratedAdapter,h(_),_,A)}function y(_,A=null){return c.G.union(P.hydratedAdapter,h(_),_,A)}function s(_,A,Q,tt,pt,dt){return c.G.offset(P.hydratedAdapter,h(_),_,A,Q,tt,pt,dt)}function l(_,A,Q,tt=!1){return c.G.buffer(P.hydratedAdapter,h(_),_,A,Q,tt)}function d(_,A,Q,tt,pt,dt){return c.G.geodesicBuffer(P.hydratedAdapter,h(_),_,A,Q,tt,pt,dt)}function R(_,A,Q=!0){return c.G.nearestCoordinate(P.hydratedAdapter,h(_),_,A,Q)}function T(_,A){return c.G.nearestVertex(P.hydratedAdapter,h(_),_,A)}function q(_,A,Q,tt){return c.G.nearestVertices(P.hydratedAdapter,h(_),_,A,Q,tt)}function D(_){return"xmin"in _?"center"in _?_.center:null:"x"in _?_:"extent"in _?_.extent?.center??null:null}function w(_,A,Q){if(null==_)throw new ct;const tt=_.spatialReference;if(null==(Q=Q??D(_)))throw new ct;const pt=_.constructor.fromJSON(c.G.rotate(_,A,Q));return pt.spatialReference=tt,pt}function z(_,A){if(null==_)throw new ct;const Q=_.spatialReference;if(null==(A=A??D(_)))throw new ct;const tt=_.constructor.fromJSON(c.G.flipHorizontal(_,A));return tt.spatialReference=Q,tt}function H(_,A){if(null==_)throw new ct;const Q=_.spatialReference;if(null==(A=A??D(_)))throw new ct;const tt=_.constructor.fromJSON(c.G.flipVertical(_,A));return tt.spatialReference=Q,tt}function et(_,A,Q,tt){return c.G.generalize(P.hydratedAdapter,h(_),_,A,Q,tt)}function st(_,A,Q){return c.G.densify(P.hydratedAdapter,h(_),_,A,Q)}function it(_,A,Q,tt=0){return c.G.geodesicDensify(P.hydratedAdapter,h(_),_,A,Q,tt)}function lt(_,A){return c.G.planarArea(P.hydratedAdapter,h(_),_,A)}function at(_,A){return c.G.planarLength(P.hydratedAdapter,h(_),_,A)}function ft(_,A,Q){return c.G.geodesicArea(P.hydratedAdapter,h(_),_,A,Q)}function rt(_,A,Q){return c.G.geodesicLength(P.hydratedAdapter,h(_),_,A,Q)}function ut(_,A){return c.G.intersectLinesToPoints(P.hydratedAdapter,h(_),_,A)}function _t(_,A){c.G.changeDefaultSpatialReferenceTolerance(_,A)}function mt(_){c.G.clearDefaultSpatialReferenceTolerance(_)}class ct extends Error{constructor(){super("Illegal Argument Exception")}}},81863:(ot,F,p)=>{p.d(F,{GG:()=>G,rS:()=>B,wY:()=>b});var c=p(92383),P=p(65234),h=p(37053);const G=new P.Z(c.kU),I=new P.Z(c.JL),U=new P.Z(c.mM),b=new P.Z(c.pn);function B($){return $&&((0,h.BZ)($)||(0,h.fS)($,I))?I:$&&((0,h.V2)($)||(0,h.fS)($,U))?U:G}},22264:(ot,F,p)=>{function c(U,b){return b?"xoffset"in b&&b.xoffset?Math.max(U,Math.abs(b.xoffset)):"yoffset"in b&&b.yoffset?Math.max(U,Math.abs(b.yoffset||0)):U:U}function h(U,b){return"number"==typeof U?U:U&&U.stops&&U.stops.length?function P(U){let b=0,B=0;for(let $=0;$<U.length;$++){const S=U[$].size;"number"==typeof S&&(b+=S,B++)}return b/B}(U.stops):b}function I(U){const b=U&&U.renderer,B="touch"===(U&&U.event&&U.event.pointerType)?9:6;if(!b)return B;const $="visualVariables"in b?function G(U,b){if(!b)return U;const B=b.filter(m=>"size"===m.type).map(m=>{const{maxSize:C,minSize:M}=m;return(h(C,U)+h(M,U))/2});let $=0;const S=B.length;if(0===S)return U;for(let m=0;m<S;m++)$+=B[m];const V=Math.floor($/S);return Math.max(V,U)}(B,b.visualVariables):B;if("simple"===b.type)return c($,b.symbol);if("unique-value"===b.type){let S=$;return b.uniqueValueInfos?.forEach(V=>{S=c(S,V.symbol)}),S}if("class-breaks"===b.type){let S=$;return b.classBreakInfos.forEach(V=>{S=c(S,V.symbol)}),S}return $}p.d(F,{k:()=>I})},75775:(ot,F,p)=>{p.d(F,{R:()=>G});var c=p(62208),P=p(16730),h=p(84687);function G(I){const U="metric";if((0,c.Wi)(I))return U;const b=I.map,B=(b&&"portalItem"in b?b.portalItem?.portal:null)??h.Z.getDefault();switch(B.user?.units??B.units){case U:return U;case"english":return"imperial"}return(0,c.Pt)((0,P.yT)(I.spatialReference),U)}},36073:(ot,F,p)=>{p.d(F,{Ru:()=>B,bA:()=>b,cM:()=>$,e7:()=>U,pB:()=>I});var c=p(21286),P=p(65401),h=p(32442),G=p(25748);function I(m,C,M,O){if(null==O||m.hasZ||(O=void 0),"point"===m.type)return m.x+=C,m.y+=M,m.hasZ&&null!=O&&(m.z+=O),m;if("multipoint"===m.type){const x=m.points;for(let K=0;K<x.length;K++)x[K]=S(x[K],C,M,O);return m}if("extent"===m.type)return m.xmin+=C,m.xmax+=C,m.ymin+=M,m.ymax+=M,null!=O&&(m.zmin??(m.zmin=0),m.zmin+=O,m.zmax??(m.zmax=0),m.zmax+=O),m;const Z=(0,G.nA)(m),E="polyline"===m.type?m.paths:m.rings;for(let x=0;x<Z.length;x++){const K=Z[x];for(let W=0;W<K.length;W++)K[W]=S(K[W],C,M,O)}return"paths"in m?m.paths=E:m.rings=E,m}function U(m,C,M,O,Z){const E=m.clone(),x=O.resolution;if("point"===E.type){if(Z)I(E,C*x,-M*x);else{const K=O.state.transform,W=O.state.inverseTransform,X=K[0]*E.x+K[2]*E.y+K[4],Y=K[1]*E.x+K[3]*E.y+K[5];E.x=W[0]*(X+C)+W[2]*(Y+M)+W[4],E.y=W[1]*(X+C)+W[3]*(Y+M)+W[5]}return E}if("multipoint"===E.type){if(Z)I(E,C*x,-M*x);else{const K=E.points,W=O.state.transform,X=O.state.inverseTransform;for(let Y=0;Y<K.length;Y++){const y=K[Y],s=W[0]*y[0]+W[2]*y[1]+W[4],l=W[1]*y[0]+W[3]*y[1]+W[5];K[Y]=V(y,X[0]*(s+C)+X[2]*(l+M)+X[4],X[1]*(s+C)+X[3]*(l+M)+X[5],void 0)}}return E}if("extent"===E.type){if(Z)I(E,C*x,-M*x);else{const K=O.state.transform,W=O.state.inverseTransform,X=K[0]*E.xmin+K[2]*E.ymin+K[4],Y=K[1]*E.xmin+K[3]*E.ymin+K[5],y=K[0]*E.xmax+K[2]*E.ymax+K[4],s=K[1]*E.xmax+K[3]*E.ymax+K[5];E.xmin=W[0]*(X+C)+W[2]*(Y+M)+W[4],E.ymin=W[1]*(X+C)+W[3]*(Y+M)+W[5],E.xmax=W[0]*(y+C)+W[2]*(s+M)+W[4],E.ymax=W[1]*(y+C)+W[3]*(s+M)+W[5]}return E}if(Z)I(E,C*x,-M*x);else{const K=(0,G.nA)(E),W="polyline"===E.type?E.paths:E.rings,X=O.state.transform,Y=O.state.inverseTransform;for(let y=0;y<K.length;y++){const s=K[y];for(let l=0;l<s.length;l++){const d=s[l],R=X[0]*d[0]+X[2]*d[1]+X[4],T=X[1]*d[0]+X[3]*d[1]+X[5];s[l]=V(d,Y[0]*(R+C)+Y[2]*(T+M)+Y[4],Y[1]*(R+C)+Y[3]*(T+M)+Y[5],void 0)}}"paths"in E?E.paths=W:E.rings=W}return E}function b(m,C,M,O){if("point"===m.type){const{x:d,y:R}=m,T=O?O[0]:d,q=O?O[1]:R,D=m.clone(),z=(R-q)*M+q;return D.x=(d-T)*C+T,D.y=z,D}if("multipoint"===m.type){const d=(0,G.nA)(m),R=(0,P.Ue)(),[T,q,D,w]=(0,h.C6)(R,[d]),z=O?O[0]:(T+D)/2,H=O?O[1]:(w+q)/2,et=m.clone(),st=et.points;for(let it=0;it<st.length;it++){const lt=st[it],[at,ft]=lt;st[it]=V(lt,(at-z)*C+z,(ft-H)*M+H,void 0)}return et}if("extent"===m.type){const{xmin:d,xmax:R,ymin:T,ymax:q}=m,D=O?O[0]:(d+R)/2,w=O?O[1]:(q+T)/2,z=m.clone();if(z.xmin=(d-D)*C+D,z.ymax=(q-w)*M+w,z.xmax=(R-D)*C+D,z.ymin=(T-w)*M+w,z.xmin>z.xmax){const H=z.xmin;z.xmin=z.xmax,z.xmax=H}if(z.ymin>z.ymax){const H=z.ymin;z.ymin=z.ymax,z.ymax=H}return z}const Z=(0,G.nA)(m),E=(0,P.Ue)(),[x,K,W,X]=(0,h.C6)(E,Z),Y=O?O[0]:(x+W)/2,y=O?O[1]:(X+K)/2,s=m.clone(),l="polyline"===s.type?s.paths:s.rings;for(let d=0;d<Z.length;d++){const R=Z[d];for(let T=0;T<R.length;T++){const q=R[T],[D,w]=q;l[d][T]=V(q,(D-Y)*C+Y,(w-y)*M+y,void 0)}}return"paths"in s?s.paths=l:s.rings=l,s}function B(m,C,M,O,Z,E){const x=Math.sqrt((M-m)*(M-m)+(O-C)*(O-C));return Math.sqrt((Z-m)*(Z-m)+(E-C)*(E-C))/x}function $(m,C,M,O=!1){const Z=Math.atan2(C.y-M.y,C.x-M.x)-Math.atan2(m.y-M.y,m.x-M.x),E=Math.atan2(Math.sin(Z),Math.cos(Z));return O?E:(0,c.BV)(E)}function S(m,C,M,O){return V(m,m[0]+C,m[1]+M,null!=m[2]&&null!=O?m[2]+O:void 0)}function V(m,C,M,O){const Z=[C,M];return m.length>2&&Z.push(O??m[2]),m.length>3&&Z.push(m[3]),Z}},90585:(ot,F,p)=>{p.d(F,{L:()=>W});var c=p(17626),P=p(14517),h=p(61885),G=p(62208),I=p(32917),U=p(23841),b=p(77712),S=(p(90912),p(85931),p(76898)),V=p(67831),m=p(84161),C=p(28093),M=p(55915),O=p(60507),Z=p(8080),E=p(82706),x=p(22964),K=p(94672);let W=class extends P.Z{set graphic(y){this._circleCollisionCache=null,this._originalSymbol=y.symbol,this._set("graphic",y),this.attachSymbolChanged()}get elevationInfo(){const{layer:y}=this.graphic,s=y&&"elevationInfo"in y?y.elevationInfo:null,l=(0,O.vu)(this.graphic);return new E.Z({mode:l,offset:s?s.offset:0})}set focusedSymbol(y){y!==this._get("focusedSymbol")&&(this._set("focusedSymbol",y),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(y){y!==this._get("grabbing")&&(this._set("grabbing",y),this._updateGraphicSymbol())}set hovering(y){y!==this._get("hovering")&&(this._set("hovering",y),this._updateGraphicSymbol())}set selected(y){y!==this._get("selected")&&(this._set("selected",y),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:y?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(y){super(y),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new h.Z.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(y){const s=this.graphic;if(!1===s.visible)return null;const l=s.geometry;if((0,G.Wi)(l))return null;const d=this._get("focusedSymbol"),R=(0,G.pC)(d)?d:s.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,y,l,R):this._intersectDistance3D(this.view,y,s)}attach(){this.attachSymbolChanged(),(0,G.pC)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),(0,G.pC)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=(0,I.YP)(()=>this.graphic?.symbol,y=>{(0,G.pC)(y)&&y!==this.focusedSymbol&&y!==this._originalSymbol&&(this._originalSymbol=y,this._focused&&(0,G.pC)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},I.Z_)}detachSymbolChanged(){(0,G.pC)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&(0,G.pC)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(y,s,l,d){if(d=d||(0,Z.js)(l),(0,G.Wi)(d))return null;let T=this._circleCollisionCache;if("point"===l.type&&"cim"===d.type&&"CIMPointSymbol"===d.data.symbol?.type&&d.data.symbol.symbolLayers){const{offsetX:q,offsetY:D,size:w}=(0,x.i)(d),z=(0,U.md)(s,Y),H=w/2,et=y.toScreen(l);return(0,V.k)(z,[et.x+q,et.y+D])<H*H?1:null}if("point"!==l.type||"simple-marker"!==d.type)return(0,K.D)(s,l,y)?1:null;if((0,G.Wi)(T)||!T.originalPoint.equals(l)){const q=l,D=y.spatialReference;if((0,M.Up)(q.spatialReference,D)){const w=(0,M.iV)(q,D);T={originalPoint:q.clone(),mapPoint:w,radiusPx:(0,U.F2)(d.size)},this._circleCollisionCache=T}}if((0,G.pC)(T)){const q=(0,U.md)(s,Y),D=y.toScreen?.(T.mapPoint);if(!D)return null;const w=T.radiusPx,z=D.x+(0,U.F2)(d.xoffset),H=D.y-(0,U.F2)(d.yoffset);return(0,V.k)(q,[z,H])<w*w?1:null}return null}_intersectDistance3D(y,s,l){const d=y.toMap(s,{include:[l]});return d&&(0,M.KC)(d,X,y.renderSpatialReference)?(0,m.i)(X,y.state.camera.eye):null}};(0,c._)([(0,b.Cb)({constructOnly:!0,nonNullable:!0})],W.prototype,"graphic",null),(0,c._)([(0,b.Cb)()],W.prototype,"elevationInfo",null),(0,c._)([(0,b.Cb)({constructOnly:!0,nonNullable:!0})],W.prototype,"view",void 0),(0,c._)([(0,b.Cb)({value:null})],W.prototype,"focusedSymbol",null),(0,c._)([(0,b.Cb)({constructOnly:!0})],W.prototype,"layer",void 0),(0,c._)([(0,b.Cb)()],W.prototype,"interactive",void 0),(0,c._)([(0,b.Cb)()],W.prototype,"selectable",void 0),(0,c._)([(0,b.Cb)()],W.prototype,"grabbable",void 0),(0,c._)([(0,b.Cb)({value:!1})],W.prototype,"grabbing",null),(0,c._)([(0,b.Cb)()],W.prototype,"dragging",void 0),(0,c._)([(0,b.Cb)()],W.prototype,"hovering",null),(0,c._)([(0,b.Cb)({value:!1})],W.prototype,"selected",null),(0,c._)([(0,b.Cb)()],W.prototype,"cursor",void 0),W=(0,c._)([(0,S.j)("esri.views.interactive.GraphicManipulator")],W);const X=(0,C.c)(),Y=(0,U.s1)()},22964:(ot,F,p)=>{p.d(F,{i:()=>h});var c=p(62208),P=p(23841);function h(G){let I=0,U=0,b=0;return G?("cim"===G.type&&G.data.symbol&&"symbolLayers"in G.data.symbol&&G.data.symbol.symbolLayers&&G.data.symbol.symbolLayers.map(B=>{"CIMVectorMarker"===B.type&&B.anchorPoint&&(Math.abs(B.anchorPoint.x)>I&&(I=B.anchorPoint.x),Math.abs(B.anchorPoint.y)>U&&(U=B.anchorPoint.y),(0,c.pC)(B.size)&&B.size>b&&(b=B.size))}),I=(0,P.F2)(I),U=(0,P.F2)(U),b=(0,P.F2)(b),{offsetX:I,offsetY:U,size:b}):{offsetX:I,offsetY:U,size:b}}},62980:(ot,F,p)=>{p.d(F,{h:()=>b});var c=p(17626),P=p(14517),h=p(77712),U=(p(90912),p(85931),p(76898));let b=class extends P.Z{constructor(B){super(B),this.helpMessage=void 0}};(0,c._)([(0,h.Cb)()],b.prototype,"tooltipOptions",void 0),(0,c._)([(0,h.Cb)()],b.prototype,"helpMessage",void 0),b=(0,c._)([(0,U.j)("esri.views.interactive.tooltip.SketchTooltipInfo")],b)},60358:(ot,F,p)=>{p.d(F,{u:()=>ht});var c=p(17626),P=p(14517),h=p(62208),G=p(32917),I=p(77712),B=(p(90912),p(85931),p(76898));const $="esri-tooltip",S=`${$}-content`,V=`${$}-table`,m=`${$}-help-message`;p(63290),p(26584),p(8314),p(52515);var E=p(84600),x=p(75775),K=p(40915),W=p(38570),X=p(25552),Y=p(15348);let y=class extends K.Z{get _units(){const g=(0,x.R)(this.tooltip.view);return{length:g,verticalLength:g,area:g}}_getHelpMessage(g){const{info:L}=this,{tooltipOptions:j,helpMessage:N,viewType:k}=L,J=j?.visibleElements?.helpMessage,nt=g??N;return J&&nt?this._messagesTooltip?.sketch?.["3d"===k?"helpMessages3d":"helpMessages2d"]?.[nt]:void 0}_formatScale(g){return(0,Y.uf)(g,{style:"percent",maximumFractionDigits:0})}_formatRelativeOrientation(g){return(0,Y.uf)(g,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"})}_formatLength(g,L,j){return(0,E.N9)(this._messagesUnits,g,(0,h.Pt)(L,this._units.length),j)}_formatRelativeLength(g){return(0,E.i_)(this._messagesUnits,g,this._units.length)}_formatVerticalLength(g){return(0,E.ym)(this._messagesUnits,g,this._units.verticalLength)}_formatRelativeVerticalLength(g){return(0,E.Pr)(this._messagesUnits,g,this._units.verticalLength)}_formatTotalLength(g){return(0,E.N9)(this._messagesUnits,g,this._units.length)}_formatArea(g){return(0,E.Se)(this._messagesUnits,g,this._units.area)}_formatPercentage(g){return(0,Y.uf)(g.value,{style:"percent"})}};(0,c._)([(0,I.Cb)()],y.prototype,"info",void 0),(0,c._)([(0,I.Cb)()],y.prototype,"tooltip",void 0),(0,c._)([(0,I.Cb)()],y.prototype,"_units",null),(0,c._)([(0,X.H)("esri/core/t9n/Units"),(0,I.Cb)()],y.prototype,"_messagesUnits",void 0),(0,c._)([(0,X.H)("esri/views/interactive/tooltip/t9n/Tooltip"),(0,I.Cb)()],y.prototype,"_messagesTooltip",void 0),y=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContent")],y);var s=p(94450);function l({className:g,helpMessage:L},...j){const N=j.filter(k=>!!k);return(0,s.u)("div",{class:(0,W.Sh)(g,S)},N.length>0?(0,s.u)("div",{class:V},...N):null,L?(0,s.u)("div",{key:"help-message",class:m},L):null)}const d=`${$}-field`,R={base:d,title:`${d}__title`,value:`${d}__value`};let T=class extends K.Z{render(){return(0,s.u)("div",{class:R.base},(0,s.u)("div",{class:R.title},this.title),(0,s.u)("div",{class:R.value},this.value))}};(0,c._)([(0,I.Cb)()],T.prototype,"title",void 0),(0,c._)([(0,I.Cb)()],T.prototype,"value",void 0),T=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.support.TooltipField")],T);const q={base:`${$}-value-by-value`};let D=class extends K.Z{constructor(){super(...arguments),this.divider="\xd7"}render(){return(0,s.u)("div",{class:q.base},(0,s.u)("span",null,this.left),(0,s.u)("span",null,this.divider),(0,s.u)("span",null,this.right))}};(0,c._)([(0,I.Cb)()],D.prototype,"left",void 0),(0,c._)([(0,I.Cb)()],D.prototype,"divider",void 0),(0,c._)([(0,I.Cb)()],D.prototype,"right",void 0),D=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.support.ValueByValue")],D);const w={base:`${S} ${S}--draw-rectangle`};let z=class extends y{render(){const{area:g,radius:L,xSize:j,ySize:N,tooltipOptions:k}=this.info,{visibleElements:J}=k,nt=this._messagesTooltip.sketch;return(0,s.u)(l,{className:w.base,helpMessage:this._getHelpMessage()},J.radius&&(0,h.pC)(L)&&(0,s.u)(T,{title:nt.radius,value:this._formatLength(L)}),J.size&&(0,h.pC)(j)&&(0,h.pC)(N)&&(0,s.u)(T,{title:nt.size,value:(0,s.u)(D,{left:this._formatLength(j),right:this._formatLength(N)})}),J.area&&(0,s.u)(T,{title:nt.area,value:this._formatArea(g)}))}};z=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],z);const H={base:`${S}--draw-point`};let et=class extends y{render(){const{elevation:g,tooltipOptions:L}=this.info,{visibleElements:j}=L,N=this._messagesTooltip.sketch;return(0,s.u)(l,{className:H.base,helpMessage:this._getHelpMessage()},j.elevation&&(0,s.u)(T,{title:N.elevation,value:this._formatVerticalLength(g)}))}};et=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],et);const st={base:`${S} ${S}--draw-polygon`};let it=class extends y{render(){const{area:g,elevation:L,tooltipOptions:j,viewType:N}=this.info,{visibleElements:k}=j,J=this._messagesTooltip.sketch;return(0,s.u)(l,{className:st.base,helpMessage:this._getHelpMessage()},k.elevation&&"2d"!==N&&(0,s.u)(T,{title:J.elevation,value:this._formatVerticalLength(L)}),k.area&&(0,s.u)(T,{title:J.area,value:this._formatArea(g)}))}};it=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],it);const lt={base:`${S} ${S}--draw-polyline`};let at=class extends y{render(){const{elevation:g,totalLength:L,tooltipOptions:j,viewType:N}=this.info,{visibleElements:k}=j,J=this._messagesTooltip.sketch;return(0,s.u)(l,{className:lt.base,helpMessage:this._getHelpMessage()},k.elevation&&"2d"!==N&&(0,s.u)(T,{title:J.elevation,value:this._formatVerticalLength(g)}),k.totalLength&&(0,s.u)(T,{title:J.totalLength,value:this._formatLength(L)}))}};at=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],at);const ft={base:`${S} ${S}--draw-rectangle`};let rt=class extends y{render(){const{area:g,xSize:L,ySize:j,tooltipOptions:N}=this.info,{visibleElements:k}=N,J=this._messagesTooltip.sketch;return(0,s.u)(l,{className:ft.base,helpMessage:this._getHelpMessage()},k.size&&(0,h.pC)(L)&&(0,h.pC)(j)&&(0,s.u)(T,{title:J.size,value:(0,s.u)(D,{left:this._formatLength(L),right:this._formatLength(j)})}),k.area&&(0,s.u)(T,{title:J.area,value:this._formatArea(g)}))}};rt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],rt);const ut={base:`${S} ${S}--extent-rotate`};let _t=class extends y{render(){const{angle:g,tooltipOptions:L}=this.info,{visibleElements:j}=L,N=this._messagesTooltip.sketch;return(0,s.u)(l,{className:ut.base,helpMessage:this._getHelpMessage()},j.rotation&&(0,s.u)(T,{title:N.rotation,value:this._formatRelativeOrientation(g)}))}};_t=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],_t);const mt={base:`${S} ${S}--extent-scale`};let ct=class extends y{render(){const g=this.info,{visibleElements:L}=g.tooltipOptions,j=this._messagesTooltip.sketch;return(0,s.u)(l,{className:mt.base,helpMessage:this._getHelpMessage()},L.size&&(0,s.u)(T,{title:j.size,value:(0,s.u)(D,{left:this._formatLength(g.xSize),right:this._formatLength(g.ySize)})}),L.scale&&(0,s.u)(T,{title:j.scale,value:(0,s.u)(D,{left:this._formatScale(g.xScale),right:this._formatScale(g.yScale)})}))}};ct=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],ct);const _={base:`${S} ${S}--reshape-edge-offset`};let A=class extends y{render(){const{area:g,distance:L,totalLength:j,tooltipOptions:N}=this.info,{visibleElements:k}=N,J=this._messagesTooltip.sketch;return(0,s.u)(l,{className:_.base,helpMessage:this._getHelpMessage()},k.distance&&(0,s.u)(T,{title:J.distance,value:this._formatRelativeLength(L)}),k.area&&(0,h.pC)(g)&&(0,s.u)(T,{title:J.area,value:this._formatArea(g)}),k.totalLength&&(0,h.pC)(j)&&(0,s.u)(T,{title:J.totalLength,value:this._formatLength(j)}))}};A=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],A);const Q={base:`${S} ${S}--transform-absolute`};let tt=class extends y{render(){const{info:g}=this,{visibleElements:L}=g.tooltipOptions,j=this._messagesTooltip.sketch;return(0,s.u)(l,{className:Q.base,helpMessage:this._getHelpMessage()},L.orientation&&g.orientationEnabled&&(0,s.u)(T,{title:j.orientation,value:(0,E.cy)(g.orientation,g.rotationType,g.orientationPrecision)}),L.size&&g.sizeEnabled&&(0,s.u)(T,{title:j.size,value:this._formatLength(g.size,g.sizeUnit,g.sizePrecision)}))}};tt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],tt);const pt={base:`${S} ${S}--transform-rotate`};let dt=class extends y{render(){const{info:g}=this,{visibleElements:L}=g.tooltipOptions,j=this._messagesTooltip.sketch;return(0,s.u)(l,{className:pt.base,helpMessage:this._getHelpMessage()},L.rotation&&(0,s.u)(T,{title:j.rotation,value:(0,E.SP)(g.rotation,g.rotationType,g.rotationPrecision)}),L.orientation&&(0,s.u)(T,{title:j.orientation,value:(0,E.cy)(g.orientation,g.rotationType,g.orientationPrecision)}))}};dt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],dt);const Dt={base:`${S} ${S}--transform-scale`};let vt=class extends y{render(){const{scale:g,size:L,sizePrecision:j,sizeUnit:N,tooltipOptions:k}=this.info,{visibleElements:J}=k,nt=this._messagesTooltip.sketch;return(0,s.u)(l,{className:Dt.base,helpMessage:this._getHelpMessage()},J.scale&&(0,s.u)(T,{title:nt.scale,value:this._formatPercentage(g)}),J.size&&(0,s.u)(T,{title:nt.size,value:this._formatLength(L,N,j)}))}};vt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],vt);const bt={base:`${S} ${S}--translate-graphic`};let gt=class extends y{render(){const{info:g}=this,{visibleElements:L}=g.tooltipOptions,j=this._messagesTooltip.sketch;return(0,s.u)(l,{className:bt.base,helpMessage:this._getHelpMessage()},L.distance&&(0,s.u)(T,{title:j.distance,value:this._formatLength(g.distance)}))}};gt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],gt);const Ot={base:`${S} ${S}--translate-graphic-xy`};let yt=class extends y{render(){const{info:g}=this,{visibleElements:L}=g.tooltipOptions,j=this._messagesTooltip.sketch;return(0,s.u)(l,{className:Ot.base,helpMessage:this._getHelpMessage()},L.distance&&(0,s.u)(T,{title:j.distance,value:this._formatRelativeLength(g.distance)}))}};yt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],yt);const xt={base:`${S} ${S}--translate-graphic-z`};let Et=class extends y{render(){const{info:g}=this,{visibleElements:L}=g.tooltipOptions,j=this._messagesTooltip.sketch;return(0,s.u)(l,{className:xt.base,helpMessage:this._getHelpMessage()},L.distance&&(0,s.u)(T,{title:j.distance,value:this._formatRelativeVerticalLength(g.distance)}))}};Et=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],Et);const Rt={base:`${S} ${S}--translate-vertex`};let Mt=class extends y{render(){const{distance:g,elevation:L,area:j,totalLength:N,tooltipOptions:k}=this.info,{visibleElements:J}=k,nt=this._messagesTooltip.sketch;return(0,s.u)(l,{className:Rt.base,helpMessage:this._getHelpMessage()},J.distance&&(0,s.u)(T,{title:nt.distance,value:this._formatLength(g)}),J.elevation&&(0,h.pC)(L)&&(0,s.u)(T,{title:nt.elevation,value:this._formatVerticalLength(L)}),J.area&&(0,h.pC)(j)&&(0,s.u)(T,{title:nt.area,value:this._formatArea(j)}),J.totalLength&&(0,h.pC)(N)&&(0,s.u)(T,{title:nt.totalLength,value:this._formatLength(N)}))}};Mt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],Mt);const Lt={base:`${S} ${S}--translate-vertex`};let Ct=class extends y{render(){const{area:g,distance:L,elevation:j,totalLength:N,tooltipOptions:k}=this.info,{visibleElements:J}=k,nt=this._messagesTooltip.sketch;return(0,s.u)(l,{className:Lt.base,helpMessage:this._getHelpMessage()},J.distance&&(0,s.u)(T,{title:nt.distance,value:this._formatRelativeLength(L)}),J.elevation&&(0,h.pC)(j)&&(0,s.u)(T,{title:nt.elevation,value:this._formatVerticalLength(j)}),J.area&&(0,h.pC)(g)&&(0,s.u)(T,{title:nt.area,value:this._formatArea(g)}),J.totalLength&&(0,h.pC)(N)&&(0,s.u)(T,{title:nt.totalLength,value:this._formatLength(N)}))}};Ct=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],Ct);const At={base:`${S} ${S}--translate-vertex`};let Pt=class extends y{render(){const{distance:g,elevation:L,tooltipOptions:j}=this.info,{visibleElements:N}=j,k=this._messagesTooltip.sketch;return(0,s.u)(l,{className:At.base,helpMessage:this._getHelpMessage()},N.distance&&(0,s.u)(T,{title:k.distance,value:this._formatRelativeVerticalLength(g)}),N.elevation&&(0,h.pC)(L)&&(0,s.u)(T,{title:k.elevation,value:this._formatVerticalLength(L)}))}};Pt=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],Pt);const jt={base:`${$}`};let ht=class extends P.Z{constructor(g){super(g),this.info=null,this._contentContainer=(()=>{const L=document.createElement("div");return L.classList.add(jt.base),L})(),this._contentWidget=null}initialize(){const g=this._contentContainer;this.addHandles([(0,G.YP)(()=>this.view.overlay?.surface,L=>{g.remove(),(0,h.yw)(L,j=>j.appendChild(g))},G.tX),(0,G.YP)(()=>this.info,(L,j)=>{(0,h.pC)(this._contentWidget)&&(0,h.pC)(L)&&(0,h.pC)(j)&&L.type===j.type?this._contentWidget.info=L:(this._contentWidget=(0,h.SC)(this._contentWidget),(0,h.yw)(function Ut(g,L){if((0,h.Wi)(L))return null;const j=document.createElement("div");switch(L.type){case"draw-point":return new et({tooltip:g,info:L,container:j});case"draw-polygon":return new it({tooltip:g,info:L,container:j});case"draw-polyline":return new at({tooltip:g,info:L,container:j});case"draw-rectangle":return new rt({tooltip:g,info:L,container:j});case"draw-circle":return new z({tooltip:g,info:L,container:j});case"extent-rotate":return new _t({tooltip:g,info:L,container:j});case"extent-scale":return new ct({tooltip:g,info:L,container:j});case"transform-absolute":return new tt({tooltip:g,info:L,container:j});case"transform-rotate":return new dt({tooltip:g,info:L,container:j});case"transform-scale":return new vt({tooltip:g,info:L,container:j});case"translate-graphic":return new gt({tooltip:g,info:L,container:j});case"translate-graphic-z":return new Et({tooltip:g,info:L,container:j});case"translate-graphic-xy":return new yt({tooltip:g,info:L,container:j});case"translate-vertex":return new Mt({tooltip:g,info:L,container:j});case"translate-vertex-z":return new Pt({tooltip:g,info:L,container:j});case"translate-vertex-xy":return new Ct({tooltip:g,info:L,container:j});case"reshape-edge-offset":return new A({tooltip:g,info:L,container:j})}}(this,L),N=>{this._contentWidget=N,N.container&&g.appendChild(N.container)}))},G.tX),(0,G.YP)(()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint}),St,G.tX)])}destroy(){this._contentWidget=(0,h.SC)(this._contentWidget),this._contentContainer.remove()}clear(){this.info=null}get _screenPoint(){const g=this.view.inputManager;return g?.multiTouchActive?null:g?.latestPointerLocation}get test(){return{contentContainer:this._contentContainer,visible:"none"!==this._contentContainer?.style.display}}};function St({container:g,contentWidget:L,screenPoint:j}){const{style:N}=g;if((0,h.pC)(j)&&(0,h.pC)(L)){N.display="block";const k=(0,W.dZ)(g),J=`translate(${Math.round(j.x)+Tt[0]*(k?-1:1)}px, ${Math.round(j.y)+Tt[1]}px)`;N.transform=k?`translate(-100%, 0) ${J}`:J}else N.display="none"}(0,c._)([(0,I.Cb)({nonNullable:!0})],ht.prototype,"view",void 0),(0,c._)([(0,I.Cb)()],ht.prototype,"info",void 0),(0,c._)([(0,I.Cb)()],ht.prototype,"_contentContainer",void 0),(0,c._)([(0,I.Cb)()],ht.prototype,"_contentWidget",void 0),(0,c._)([(0,I.Cb)()],ht.prototype,"_screenPoint",null),ht=(0,c._)([(0,B.j)("esri.views.interactive.tooltip.Tooltip")],ht);const Tt=[20,20]},22463:(ot,F,p)=>{p.d(F,{C_:()=>$,GQ:()=>b,MU:()=>U,Qw:()=>S,Ul:()=>G,bZ:()=>B});var c=p(62208),P=p(71572),h=p(63656);function G(m,C){return V(P.qS,h.kQ,P.Sx,C,m)}function U(m,C,M,O){return V(P.FN,h.FB,P.qj,O,m,C,M)}function b(m,C,M){return V(P.xI,h.RT,P.xI,M,m,C)}function B(m,C,M,O){return V(P.qj,h.FB,P.qj,O,m,C,M)}function $(m){return V(P.qS,h.kQ,P.Sx,"on-the-ground",m)}function S(m,C){return V(P.xI,h.RT,P.xI,"on-the-ground",m,C)}function V(m,C,M,O,...Z){if("on-the-ground"===O){const E=C.apply(void 0,Z);return(0,c.pC)(E)?E:M.apply(void 0,Z)}return m.apply(void 0,Z)}},94672:(ot,F,p)=>{p.d(F,{D:()=>b,K:()=>U}),p(29132);var P=p(62208),h=p(16730),G=p(22264),I=p(2004);function U($,S,V,m=new I.Z){let C=0;if("2d"===V.type)C=S*(V.resolution??0);else if("3d"===V.type){const K=V.overlayPixelSizeInMapUnits($),W=V.basemapSpatialReference;C=(0,P.pC)(W)&&!W.equals(V.spatialReference)?(0,h.c9)(W)/(0,h.c9)(V.spatialReference):S*K}const M=$.x-C,O=$.y-C,Z=$.x+C,E=$.y+C,{spatialReference:x}=V;return m.xmin=Math.min(M,Z),m.ymin=Math.min(O,E),m.xmax=Math.max(M,Z),m.ymax=Math.max(O,E),m.spatialReference=x,m}function b($,S,V){const m=V.toMap($);return!(0,P.Wi)(m)&&U(m,(0,G.k)(),V,B).intersects(S)}const B=new I.Z},71572:(ot,F,p)=>{p.d(F,{Cr:()=>Y,FN:()=>K,Sx:()=>V,_e:()=>Z,g1:()=>E,qS:()=>S,qj:()=>W,xI:()=>O});var $,D,c=p(62208),P=p(15572),h=p(16730),G=p(84161),I=p(28093),U=p(55915),b=p(37053),B=p(66601);function S(D){return m(D,$.Direct)}function V(D){return m(D,$.Horizontal)}function m(D,w){const{hasZ:z,spatialReference:H}=D,et=(0,B.m)(H);let st=0;const it=(0,h.j5)(et);if((0,c.Wi)(it))return null;const lt=w===$.Direct?K:W;for(const at of D.paths){if(at.length<2)continue;const ft=at.length-1;for(let rt=0;rt<ft;++rt){const ut=at[rt];l[0]=ut[0],l[1]=ut[1],l[2]=z?ut[2]:0;const _t=at[rt+1];d[0]=_t[0],d[1]=_t[1],d[2]=z?_t[2]:0;const mt=lt(l,d,H);if((0,c.Wi)(mt))return null;st+=mt.value}}return(0,P.yG)(st,it)}function O(D,w){const{spatialReference:z}=D;return(0,b.fS)(z,w.spatialReference)?(l[0]=D.x,l[1]=D.y,l[2]=D.hasZ?D.z:0,d[0]=w.x,d[1]=w.y,d[2]=w.hasZ?w.z:0,W(l,d,z)):null}function Z(D,w){const{spatialReference:z}=D;return(0,b.fS)(z,w.spatialReference)?(l[0]=D.x,l[1]=D.y,l[2]=D.hasZ?D.z:0,d[0]=w.x,d[1]=w.y,d[2]=w.hasZ?w.z:0,Y(l,d,z)):null}function E(D){return l[0]=D.x,l[1]=D.y,l[2]=D.hasZ?D.z:0,function y(D,w){const z=(0,h.y)(w);return(0,c.pC)(z)?(0,P.yG)(D[2],z):null}(l,D.spatialReference)}function K(D,w,z){const H=s(D,w,z,$.Direct);return(0,c.pC)(H)?(0,P.yG)(H.direct,H.unit):null}function W(D,w,z){const H=s(D,w,z,$.Horizontal);return(0,c.pC)(H)?(0,P.yG)(H.horizontal,H.unit):null}function Y(D,w,z){const H=s(D,w,z,$.Vertical);return(0,c.pC)(H)?(0,P.yG)(H.verticalSigned,H.unit):null}function s(D,w,z,H){const et=(0,B.m)(z),st=(0,h.j5)(et);if((0,c.Wi)(st))return null;const it=w[2]-D[2];if(H===$.Vertical)return{verticalSigned:it,unit:st};if(!(0,U.SH)(D,z,R,et)||!(0,U.SH)(w,z,T,et))return null;if(H===$.Direct)return{direct:(0,G.i)(T,R),unit:st};if((0,G.s)(q,D[0],D[1],w[2]),!(0,U.SH)(q,z,q,et))return null;const lt=(0,G.i)(q,T);return H===$.Horizontal?{horizontal:lt,unit:st}:{direct:(0,G.i)(T,R),horizontal:lt,vertical:Math.abs(it),unit:st}}(D=$||($={}))[D.Direct=0]="Direct",D[D.Horizontal=1]="Horizontal",D[D.Vertical=2]="Vertical";const l=(0,I.c)(),d=(0,I.c)(),R=(0,I.c)(),T=(0,I.c)(),q=(0,I.c)()},63656:(ot,F,p)=>{p.d(F,{FB:()=>S,RT:()=>$,kQ:()=>B});var c=p(15572),P=p(28093),h=p(44766),G=p(55915),I=p(10049),U=p(37053),b=p(91622);function B(y){const{spatialReference:s}=y;return(0,b.T)(s,M,O,Z,y)}function $(y,s){if(!(0,U.fS)(y.spatialReference,s.spatialReference))return null;const{spatialReference:l}=y;return K[0]=y.x,K[1]=y.y,K[2]=y.hasZ?y.z:0,W[0]=s.x,W[1]=s.y,W[2]=s.hasZ?s.z:0,S(K,W,l)}function S(y,s,l){return(0,b.T)(l,V,m,C,y,s,l)}function V(y,s,l){return(0,c.yG)((0,I.cA)(x,y,s,l).distance,"meters")}function m(y,s,l){return(0,c.yG)((0,h.geodesicLength)(function E(y,s,l){return{type:"polyline",spatialReference:l,paths:[[[...y],[...s]]]}}(y,s,l),"meters"),"meters")}function C(y,s,l){return(0,G.ke)(y,l,X)&&(0,G.ke)(s,l,Y)?(0,c.yG)((0,I.cA)(x,X,Y).distance,"meters"):null}function M(y){return(0,c.yG)((0,I.Jf)([y],"meters")[0],"meters")}function O(y){return(0,c.yG)((0,h.geodesicLength)(y,"meters"),"meters")}function Z(y){const s=[];if(!(0,G.bi)(y,s))return null;let l=0;for(const d of s){let R=0;for(let T=1;T<d.length;++T)R+=(0,I.cA)(x,d[T-1],d[T]).distance;l+=R}return(0,c.yG)(l,"meters")}const x=new I._q,K=(0,P.c)(),W=(0,P.c)(),X=(0,P.c)(),Y=(0,P.c)()},91622:(ot,F,p)=>{p.d(F,{T:()=>h});var c=p(10049),P=p(37053);function h(G,I,U,b,...B){return(0,P.sT)(G)&&(0,c.Gb)(G)?I.apply(void 0,B):(0,P.sS)(G)?U.apply(void 0,B):b.apply(void 0,B)}},66601:(ot,F,p)=>{p.d(F,{m:()=>h});var c=p(55915),P=p(81863);function h(G){const I=(0,P.rS)(G),U=I===P.GG?P.wY:I;return(0,c.Up)(G,U)?U:G}}}]);