"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[7755],{17002:(J,z,m)=>{m.d(z,{BN:()=>w,Yc:()=>F,mx:()=>y});var P=m(15861),U=m(59318);const j="woff2",k=new Map;function y(r){return b.apply(this,arguments)}function b(){return(b=(0,P.Z)(function*(r){const g=F(r);let L=k.get(g);if(L)return L;const C=new FontFace(r.family,`url('${U.Z.fontsUrl}/woff2/${g}.${j}') format('${j}')`),B=document.fonts;return B.has(C)&&"loading"===C.status?C.loaded:(L=C.load(),k.set(g,L),B.add(C),L)})).apply(this,arguments)}function w(r){if(!r)return"arial-unicode-ms";const g=r.toLowerCase().split(" ").join("-");switch(g){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return g}}function F(r){const g=function T(r){if(!r.weight)return"";switch(r.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(r)+function Z(r){if(!r.style)return"";switch(r.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(r);return w(r.family)+(g.length>0?g:"-regular")}},67755:(J,z,m)=>{m.r(z),m.d(z,{getContrastingBackgroundTheme:()=>V,getRenderSymbolParameters:()=>G,previewSymbol2D:()=>oe});var P=m(15861),U=m(91558),j=m(26584),k=m(17002),y=m(23841),b=m(74741),w=m(71131),F=m(34057),T=m(85453);const Z="picture-fill",Y=w.b_.size,W=w.b_.maxSize,Q=w.b_.maxOutlineSize,q=w.b_.lineWidth,ee=document.createElement("canvas");function K(t,e){const n=ee.getContext("2d"),l=[];return e&&(e.weight&&l.push(e.weight),e.size&&l.push(e.size+"px"),e.family&&l.push(e.family)),n.font=l.join(" "),n.measureText(t).width}function O(t){const e=t?.size;return{width:null!=e&&"object"==typeof e&&"width"in e?(0,y.F2)(e.width):null,height:null!=e&&"object"==typeof e&&"height"in e?(0,y.F2)(e.height):null}}function se(t,e){return A.apply(this,arguments)}function A(){return(A=(0,P.Z)(function*(t,e){const n=e.fill,l=t.color;if("pattern"===n?.type&&l&&t.type!==Z){const p=yield(0,b.Od)(n.src,l.toCss(!0));n.src=p,e.fill=n}})).apply(this,arguments)}function le(t,e,n,l){return R.apply(this,arguments)}function R(){return(R=(0,P.Z)(function*(t,e,n,l){if(!("font"in t)||!t.font||"text"!==e.shape.type)return;try{yield(0,k.mx)(t.font)}catch{}const{width:p}=O(l),h=/[\uE600-\uE6FF]/.test(e.shape.text);null!=p||h||(n[0]=K(e.shape.text,{weight:e.font?.weight,size:e.font?.size,family:e.font?.family}))})).apply(this,arguments)}function $(t,e){return t>e?"dark":"light"}function G(t,e){const n="number"==typeof e?.size?e?.size:null,l=null!=n?(0,y.F2)(n):null,p=null!=e?.maxSize?(0,y.F2)(e.maxSize):null,h=null!=e?.rotation?e.rotation:"angle"in t?t.angle:null,M=(0,b._M)(t);let d=(0,b.mx)(t);"dark"!==V(t,245)||e?.ignoreWhiteSymbols||(d={width:.75,...d,color:"#bdc3c7"});const u={shape:null,fill:M,stroke:d,offset:[0,0]};d?.width&&(d.width=Math.min(d.width,Q));const f=d?.width||0;let E=null!=e?.size&&(null==e?.scale||e?.scale),a=0,s=0,D=!1;switch(t.type){case"simple-marker":{const i=t.style,{width:c,height:o}=O(e),x=c===o&&null!=c?c:l??Math.min((0,y.F2)(t.size),p||W);switch(a=x,s=x,i){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*x},E||(a+=f,s+=f);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[a,.5*s]},{command:"M",values:[.5*a,0]},{command:"L",values:[.5*a,s]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[.5*a,0]},{command:"L",values:[a,.5*s]},{command:"L",values:[.5*a,s]},{command:"Z",values:[]}]},E||(a+=f,s+=f);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,0]},{command:"L",values:[a,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},E||(a+=f,s+=f),h&&(D=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*a,0]},{command:"L",values:[a,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},E||(a+=f,s+=f),h&&(D=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,s]},{command:"M",values:[a,0]},{command:"L",values:[0,s]}]},h&&(D=!0);break;case"path":u.shape={type:"path",path:t.path||""},E||(a+=f,s+=f),h&&(D=!0),E=!0}break}case"simple-line":{const{width:i,height:c}=O(e),o=c??l??f,x=i??q;d&&(d.width=o),a=x,s=o;const v=u?.stroke?.cap||"butt",_="round"===v;E=!0,u.stroke&&(u.stroke.cap="butt"===v?"square":v),u.shape={type:"path",path:[{command:"M",values:[_?o/2:0,s/2]},{command:"L",values:[_?a-o/2:a,s/2]}]};break}case Z:case"simple-fill":{const i="object"==typeof e?.symbolConfig&&e?.symbolConfig.isSquareFill,{width:c,height:o}=O(e);a=!i&&c!==o||null==c?l??Y:c,s=!i&&c!==o||null==o?a:o,E||(a+=f,s+=f),E=!0,u.shape=i?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,0]},{command:"L",values:[a,s]},{command:"L",values:[0,s]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:w.JZ.fill[0];break}case"picture-marker":{const i=Math.min((0,y.F2)(t.width),p||W),c=Math.min((0,y.F2)(t.height),p||W),{width:o,height:x}=O(e),v=o===x&&null!=o?o:l??Math.max(i,c),_=i/c;a=_<=1?Math.ceil(v*_):v,s=_<=1?v:Math.ceil(v/_),u.shape={type:"image",x:-Math.round(a/2),y:-Math.round(s/2),width:a,height:s,src:t.url||""},h&&(D=!0);break}case"text":{const i=t,c=e?.overrideText||i.text||"Aa",o=i.font,{width:x,height:v}=O(e),_=v??l??Math.min((0,y.F2)(o.size),p||W),ie=K(c,{weight:o.weight,size:_,family:o.family}),X=/[\uE600-\uE6FF]/.test(c);a=x??(X?_:ie),s=_;let H=.25*function ae(t){if(0===t.length)return 0;if(t.length>2){const e=(0,y.Wz)(1),n=parseFloat(t);switch(t.slice(-2)){case"px":return n;case"pt":return n*e;case"in":return 72*n*e;case"pc":return 12*n*e;case"mm":return 2.8346456692913384*n*e;case"cm":return 28.346456692913385*n*e}}return parseFloat(t)}((o?_:0).toString());X&&(H+=5),u.shape={type:"text",text:c,x:i.xoffset||0,y:i.yoffset||H,align:"middle",alignBaseline:i.verticalAlignment,decoration:o&&o.decoration,rotated:i.rotated,kerning:i.kerning},u.font=o&&{size:_,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:u,size:[a,s],renderOptions:{node:e?.node,scale:E,opacity:e?.opacity,rotation:h,useRotationSize:D,effectView:e?.effectView}}}function oe(t,e){return S.apply(this,arguments)}function S(){return(S=(0,P.Z)(function*(t,e){const{shapeDescriptor:n,size:l,renderOptions:p}=G(t,e);if(!n.shape)throw new j.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");yield se(t,n),yield le(t,n,l,e);const h=[[n]];if("object"==typeof e?.symbolConfig&&e?.symbolConfig.applyColorModulation){const M=.6*l[0];h.unshift([{...n,offset:[-M,0],fill:(0,w.dc)(n.fill,-.3)}]),h.push([{...n,offset:[M,0],fill:(0,w.dc)(n.fill,.3)}]),l[0]+=2*M,p.scale=!1}return(0,F.wh)(h,l,p)})).apply(this,arguments)}function V(t,e=225){const n=(0,b._M)(t),l=(0,b.mx)(t),p=!n||"type"in n?null:new U.Z(n),h=l?.color?new U.Z(l?.color):null,M=p?$((0,T.EX)(p),e):null,d=h?$((0,T.EX)(h),e):null;return d?M?M===d?M:e>=225?"light":"dark":d:M}}}]);