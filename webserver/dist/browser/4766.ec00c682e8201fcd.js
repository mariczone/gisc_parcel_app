"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[4766,7777],{77777:(T,A,l)=>{l.r(A),l.d(A,{hydratedAdapter:()=>m});var n=l(2004),a=l(72854),i=l(72642),g=l(37118),_=l(55214);const m={convertToGEGeometry:function x(o,r){if(null==r)return null;let u="cache"in r?r.cache._geVersion:void 0;return null==u&&(u=o.convertJSONToGeometry(r),"cache"in r&&(r.cache._geVersion=u)),u},exportPoint:function E(o,r,u){const d=o.hasZ(r),G=o.hasM(r),f=new i.Z({x:o.getPointX(r),y:o.getPointY(r),spatialReference:u});return d&&(f.z=o.getPointZ(r)),G&&(f.m=o.getPointM(r)),f.cache._geVersion=r,f},exportPolygon:function M(o,r,u){const d=new g.Z({rings:o.exportPaths(r),hasZ:o.hasZ(r),hasM:o.hasM(r),spatialReference:u});return d.cache._geVersion=r,d},exportPolyline:function P(o,r,u){const d=new _.Z({paths:o.exportPaths(r),hasZ:o.hasZ(r),hasM:o.hasM(r),spatialReference:u});return d.cache._geVersion=r,d},exportMultipoint:function R(o,r,u){const d=new a.Z({hasZ:o.hasZ(r),hasM:o.hasM(r),points:o.exportPoints(r),spatialReference:u});return d.cache._geVersion=r,d},exportExtent:function D(o,r,u){const d=o.hasZ(r),G=o.hasM(r),f=new n.Z({xmin:o.getXMin(r),ymin:o.getYMin(r),xmax:o.getXMax(r),ymax:o.getYMax(r),spatialReference:u});if(d){const h=o.getZExtent(r);f.zmin=h.vmin,f.zmax=h.vmax}if(G){const h=o.getMExtent(r);f.mmin=h.vmin,f.mmax=h.vmax}return f.cache._geVersion=r,f}}},44766:(T,A,l)=>{l.r(A),l.d(A,{buffer:()=>C,changeDefaultSpatialReferenceTolerance:()=>k,clearDefaultSpatialReferenceTolerance:()=>b,clip:()=>_,contains:()=>x,convexHull:()=>h,crosses:()=>E,cut:()=>m,densify:()=>J,difference:()=>w,disjoint:()=>r,distance:()=>M,equals:()=>P,extendedSpatialReferenceInfo:()=>g,flipHorizontal:()=>U,flipVertical:()=>W,generalize:()=>H,geodesicArea:()=>F,geodesicBuffer:()=>B,geodesicDensify:()=>N,geodesicLength:()=>Q,intersect:()=>L,intersectLinesToPoints:()=>$,intersects:()=>R,isSimple:()=>G,nearestCoordinate:()=>I,nearestVertex:()=>j,nearestVertices:()=>z,offset:()=>S,overlaps:()=>u,planarArea:()=>X,planarLength:()=>Y,relate:()=>d,rotate:()=>K,simplify:()=>f,symmetricDifference:()=>Z,touches:()=>D,union:()=>V,within:()=>o});var n=l(4918),a=l(77777);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return n.G.extendedSpatialReferenceInfo(e)}function _(e,t){return n.G.clip(a.hydratedAdapter,i(e),e,t)}function m(e,t){return n.G.cut(a.hydratedAdapter,i(e),e,t)}function x(e,t){return n.G.contains(a.hydratedAdapter,i(e),e,t)}function E(e,t){return n.G.crosses(a.hydratedAdapter,i(e),e,t)}function M(e,t,c){return n.G.distance(a.hydratedAdapter,i(e),e,t,c)}function P(e,t){return n.G.equals(a.hydratedAdapter,i(e),e,t)}function R(e,t){return n.G.intersects(a.hydratedAdapter,i(e),e,t)}function D(e,t){return n.G.touches(a.hydratedAdapter,i(e),e,t)}function o(e,t){return n.G.within(a.hydratedAdapter,i(e),e,t)}function r(e,t){return n.G.disjoint(a.hydratedAdapter,i(e),e,t)}function u(e,t){return n.G.overlaps(a.hydratedAdapter,i(e),e,t)}function d(e,t,c){return n.G.relate(a.hydratedAdapter,i(e),e,t,c)}function G(e){return n.G.isSimple(a.hydratedAdapter,i(e),e)}function f(e){return n.G.simplify(a.hydratedAdapter,i(e),e)}function h(e,t=!1){return n.G.convexHull(a.hydratedAdapter,i(e),e,t)}function w(e,t){return n.G.difference(a.hydratedAdapter,i(e),e,t)}function Z(e,t){return n.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function L(e,t){return n.G.intersect(a.hydratedAdapter,i(e),e,t)}function V(e,t=null){return n.G.union(a.hydratedAdapter,i(e),e,t)}function S(e,t,c,s,y,O){return n.G.offset(a.hydratedAdapter,i(e),e,t,c,s,y,O)}function C(e,t,c,s=!1){return n.G.buffer(a.hydratedAdapter,i(e),e,t,c,s)}function B(e,t,c,s,y,O){return n.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,c,s,y,O)}function I(e,t,c=!0){return n.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,c)}function j(e,t){return n.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function z(e,t,c,s){return n.G.nearestVertices(a.hydratedAdapter,i(e),e,t,c,s)}function v(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function K(e,t,c){if(null==e)throw new p;const s=e.spatialReference;if(null==(c=c??v(e)))throw new p;const y=e.constructor.fromJSON(n.G.rotate(e,t,c));return y.spatialReference=s,y}function U(e,t){if(null==e)throw new p;const c=e.spatialReference;if(null==(t=t??v(e)))throw new p;const s=e.constructor.fromJSON(n.G.flipHorizontal(e,t));return s.spatialReference=c,s}function W(e,t){if(null==e)throw new p;const c=e.spatialReference;if(null==(t=t??v(e)))throw new p;const s=e.constructor.fromJSON(n.G.flipVertical(e,t));return s.spatialReference=c,s}function H(e,t,c,s){return n.G.generalize(a.hydratedAdapter,i(e),e,t,c,s)}function J(e,t,c){return n.G.densify(a.hydratedAdapter,i(e),e,t,c)}function N(e,t,c,s=0){return n.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,c,s)}function X(e,t){return n.G.planarArea(a.hydratedAdapter,i(e),e,t)}function Y(e,t){return n.G.planarLength(a.hydratedAdapter,i(e),e,t)}function F(e,t,c){return n.G.geodesicArea(a.hydratedAdapter,i(e),e,t,c)}function Q(e,t,c){return n.G.geodesicLength(a.hydratedAdapter,i(e),e,t,c)}function $(e,t){return n.G.intersectLinesToPoints(a.hydratedAdapter,i(e),e,t)}function k(e,t){n.G.changeDefaultSpatialReferenceTolerance(e,t)}function b(e){n.G.clearDefaultSpatialReferenceTolerance(e)}class p extends Error{constructor(){super("Illegal Argument Exception")}}}}]);