"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[8704],{38704:(c,u,t)=>{t.r(u),t.d(u,{previewWebStyleSymbol:()=>p});var o=t(84792),d=t(23841),m=t(71131),r=t(86606);function p(e,s,i){const l=e.thumbnail&&e.thumbnail.url;return l?(0,o.default)(l,{responseType:"image"}).then(n=>{const h=function E(e,s){const i=!/\\.svg$/i.test(e.src)&&s&&s.disableUpsampling,l=Math.max(e.width,e.height);let n=s&&null!=s.maxSize?(0,d.F2)(s.maxSize):m.b_.maxSize;i&&(n=Math.min(l,n));const h="number"==typeof s?.size?s?.size:null,a=Math.min(n,null!=h?(0,d.F2)(h):l);if(a!==l){const _=0!==e.width&&0!==e.height?e.width/e.height:1;_>=1?(e.width=a,e.height=a/_):(e.width=a*_,e.height=a)}return e}(n.data,i);return i&&i.node?(i.node.appendChild(h),i.node):h}):(0,r.Q8)(e).then(n=>n?s(n,i):null)}}}]);