"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[5039],{35039:(yn,ye,h)=>{h.r(ye),h.d(ye,{executeScript:()=>gn,extend:()=>Me,functionHelper:()=>hn});var d=h(15861),Ce=h(78778),me=h(9288),x=h(6729),o=h(25919),_e=h(42275),m=h(7652),a=h(47562),Ae=h(19927),Oe=h(67525),Fe=h(84228),Ze=h(38302),I=h(24499),Pe=h(53840),De=h(97536),Le=h(31975),ve=h(21674),we=h(65234);function xe(n){return n&&"function"==typeof n.then}const S=100;function E(n,e){return M.apply(this,arguments)}function M(){return(M=(0,d.Z)(function*(n,e){const r=[];for(let t=0;t<e.arguments.length;t++)r.push(yield u(n,e.arguments[t]));return r})).apply(this,arguments)}function v(n,e,r){return C.apply(this,arguments)}function C(){return(C=(0,d.Z)(function*(n,e,r){return!0===e.preparsed?r(n,null,e.arguments):r(n,e,yield E(n,e))})).apply(this,arguments)}class Be extends m.Rm{constructor(e,r){super(),this.definition=null,this.context=null,this.definition=e,this.context=r}createFunction(e){return(...r)=>{const t={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeReference:this.context.timeReference?this.context.timeReference:null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(t.depthCounter.depth>64)throw new o.aV(e,o.rH.MaximumCallDepth,null);return de(this.definition,t,r,null)}}call(e,r){return V(e,r,(t,i,l)=>{const s={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(s.depthCounter.depth>64)throw new o.aV(e,o.rH.MaximumCallDepth,r);return de(this.definition,s,l,r)})}marshalledCall(e,r,t,i){var l=this;return i(e,r,function(){var s=(0,d.Z)(function*(c,f,p){const y={spatialReference:e.spatialReference,globalScope:t.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,localScope:{}};return p=p.map(w=>!(0,a.i)(w)||w instanceof m.Vg?w:(0,m.aq)(w,e,i)),(0,m.aq)(yield de(l.definition,y,p,r),t,i)});return function(c,f,p){return s.apply(this,arguments)}}())}}class b extends Ce.P{constructor(e){super(e)}global(e){var r=this;return(0,d.Z)(function*(){const t=r.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=yield u(r.executingContext,t.node),t.valueset=!0),(0,a.i)(t.value)&&!(t.value instanceof m.Vg)){const i=new m.Vg;i.fn=t.value,i.parameterEvaluator=V,i.context=r.executingContext,t.value=i}return t.value})()}setGlobal(e,r){if((0,a.i)(r))throw new o.aV(null,o.rH.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:r,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}loadModule(e){var r=this;return(0,d.Z)(function*(){let t=e.spatialReference;null==t&&(t=new we.Z({wkid:102100})),r.moduleScope=Ie({},e.customfunctions,e.timeReference),r.executingContext={spatialReference:t,services:e.services,libraryResolver:new me.s(e.libraryResolver._moduleSingletons,r.source.syntax.loadedModules),exports:{},abortSignal:null==e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:r.moduleScope,console:e.console?e.console:Ee,lrucache:e.lrucache,timeReference:e.timeReference??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},yield u(r.executingContext,r.source.syntax)})()}}function V(n,e,r){return A.apply(this,arguments)}function A(){return(A=(0,d.Z)(function*(n,e,r){if(!0===e.preparsed){const i=r(n,null,e.arguments);return xe(i),i}const t=r(n,e,yield E(n,e));return xe(t),t})).apply(this,arguments)}function u(n,e,r){return O.apply(this,arguments)}function O(){return(O=(0,d.Z)(function*(n,e,r){if(e.breakpoint&&!0!==r)return yield e.breakpoint(),u(n,e,!0);try{switch(e?.type){case"VariableDeclarator":return yield rn(n,e);case"ImportDeclaration":return yield en(n,e);case"ExportNamedDeclaration":return yield nn(n,e);case"VariableDeclaration":return yield Re(n,e,0);case"BlockStatement":case"Program":return yield $e(n,e);case"FunctionDeclaration":return yield qe(n,e);case"ReturnStatement":return yield ze(n,e);case"IfStatement":return yield Ye(n,e);case"ExpressionStatement":return yield Xe(n,e);case"UpdateExpression":return yield Je(n,e);case"AssignmentExpression":return yield Qe(n,e);case"ForStatement":return yield Ue(n,e);case"WhileStatement":return yield Te(n,e);case"ForInStatement":return yield Ge(n,e);case"BreakStatement":return a.o;case"EmptyStatement":return a.v;case"ContinueStatement":return a.p;case"TemplateElement":return yield cn(n,e);case"TemplateLiteral":return yield pn(n,e);case"Identifier":return yield ie(n,e);case"MemberExpression":return yield tn(n,e);case"Literal":return e.value;case"CallExpression":return yield un(n,e);case"UnaryExpression":return yield on(n,e);case"BinaryExpression":return yield ln(n,e);case"LogicalExpression":return yield sn(n,e);case"ArrayExpression":return yield an(n,e);case"ObjectExpression":return yield je(n,e);case"Property":return yield Ke(n,e);default:throw new o.aV(n,o.rH.Unrecognised,e)}}catch(t){throw(0,o.VO)(n,e,t)}})).apply(this,arguments)}function je(n,e){return F.apply(this,arguments)}function F(){return(F=(0,d.Z)(function*(n,e){const r=[];for(let s=0;s<e.properties.length;s++)r[s]=yield u(n,e.properties[s]);const t={},i=new Map;for(let s=0;s<r.length;s++){const c=r[s];if((0,a.i)(c.value))throw new o.aV(n,o.rH.NoFunctionInDictionary,e);if(!1===(0,a.c)(c.key))throw new o.aV(n,o.rH.KeyMustBeString,e);let f=c.key.toString();const p=f.toLowerCase();i.has(p)?f=i.get(p):i.set(p,f),t[f]=c.value===a.v?null:c.value}const l=new x.Z(t);return l.immutable=!1,l})).apply(this,arguments)}function Ke(n,e){return Z.apply(this,arguments)}function Z(){return(Z=(0,d.Z)(function*(n,e){const r=yield u(n,e.value);return"Identifier"===e.key.type?{key:e.key.name,value:r}:{key:yield u(n,e.key),value:r}})).apply(this,arguments)}function Te(n,e){return P.apply(this,arguments)}function P(){return(P=(0,d.Z)(function*(n,e){const r={testResult:!0,lastAction:a.v};if(r.testResult=yield u(n,e.test),!1===r.testResult)return a.v;if(!0!==r.testResult)throw new o.aV(n,o.rH.BooleanConditionRequired,e);for(;!0===r.testResult&&(r.lastAction=yield u(n,e.body),r.lastAction!==a.o)&&!(r.lastAction instanceof a.R);)if(r.testResult=yield u(n,e.test),!0!==r.testResult&&!1!==r.testResult)throw new o.aV(n,o.rH.BooleanConditionRequired,e);return r.lastAction instanceof a.R?r.lastAction:a.v})).apply(this,arguments)}function be(n,e,r){return D.apply(this,arguments)}function D(){return(D=(0,d.Z)(function*(n,e,r){const t=yield u(n,e.body);return r.lastAction=t,r.lastAction===a.o||r.lastAction instanceof a.R?(r.testResult=!1,r):(null!==e.update&&(yield u(n,e.update)),r)})).apply(this,arguments)}function L(){return(L=(0,d.Z)(function*(n,e,r){if(null!==e.test){const t=yield u(n,e.test);if(!0===n.abortSignal?.aborted)throw new o.aV(n,o.rH.Cancelled,e);if(r.testResult=t,!1===r.testResult)return r;if(!0!==r.testResult)throw new o.aV(n,o.rH.BooleanConditionRequired,e);return be(n,e,r)}return be(n,e,r)})).apply(this,arguments)}function H(n,e,r,t,i,l){try{(function Ne(n,e,r){return L.apply(this,arguments)})(n,e,r).then(()=>{try{!0===r.testResult?++l>S?(l=0,setTimeout(()=>{H(n,e,r,t,i,l)},0)):H(n,e,r,t,i,l):t(r.lastAction instanceof a.R?r.lastAction:a.v)}catch(s){i(s)}},s=>{i(s)})}catch(s){i(s)}}function Ue(n,e){try{return null!==e.init?u(n,e.init).then(()=>new Promise((r,t)=>{H(n,e,{testResult:!0,lastAction:a.v},i=>{r(i)},i=>{t(i)},0)})):new Promise((r,t)=>{H(n,e,{testResult:!0,lastAction:a.v},i=>{r(i)},i=>{t(i)},0)})}catch(r){return Promise.reject(r)}}function B(n,e,r,t,i,l,s,c,f,p){try{if(t<=l)return void c(a.v);i.value="k"===s?r[l]:l,u(n,e.body).then(y=>{try{y instanceof a.R?c(y):y===a.o?c(a.v):++p>S?(p=0,setTimeout(()=>{B(n,e,r,t,i,l+1,s,c,f,p)},0)):B(n,e,r,t,i,l+1,s,c,f,p)}catch(w){f(w)}},y=>{f(y)})}catch(y){f(y)}}function j(n,e,r,t,i,l,s,c,f){try{if(r.length()<=i)return void s(a.v);t.value="k"===l?r.get(i):i,u(n,e.body).then(p=>{p instanceof a.R?s(p):p===a.o?s(a.v):++f>S?(f=0,setTimeout(()=>{j(n,e,r,t,i+1,l,s,c,f)},0)):j(n,e,r,t,i+1,l,s,c,f)},p=>{c(p)})}catch(p){c(p)}}function K(n,e,r,t,i,l){try{if(void 0===l&&(l="i"),0===r.length)return void t.resolve(a.v);B(n,e,r,r.length,i,0,l,s=>{t.resolve(s)},s=>{t.reject(s)},0)}catch(s){t.reject(s)}}function We(n,e,r,t,i,l){try{if(void 0===l&&(l="i"),0===r.length)return void t.resolve(a.v);j(n,e,r,i,0,l,s=>{t.resolve(s)},s=>{t.reject(s)},0)}catch(s){t.reject(s)}}function ke(n,e,r,t,i){try{K(n,e,r.keys(),t,i,"k")}catch(l){t.reject(l)}}function T(n,e,r,t,i,l,s,c){try{n.next().then(f=>{try{if(null===f)l(a.v);else{const p=_e.Z.createFromGraphicLikeObject(f.geometry,f.attributes,t,e.timeReference);p._underlyingGraphic=f,i.value=p,u(e,r.body).then(y=>{try{y===a.o?l(a.v):y instanceof a.R?l(y):++c>S?(c=0,setTimeout(()=>{T(n,e,r,t,i,l,s,c)},0)):T(n,e,r,t,i,l,s,c)}catch(w){s(w)}},y=>{s(y)})}}catch(p){s(p)}},f=>{s(f)})}catch(f){s(f)}}function Ge(n,e){return N.apply(this,arguments)}function N(){return(N=(0,d.Z)(function*(n,e){return new Promise((r,t)=>{u(n,e.right).then(i=>{try{let l=null;l="VariableDeclaration"===e.left.type?u(n,e.left):Promise.resolve(),l.then(()=>{try{let s="";if("VariableDeclaration"===e.left.type){const f=e.left.declarations[0].id;"Identifier"===f.type&&(s=f.name)}else"Identifier"===e.left.type&&(s=e.left.name);if(!s)throw new o.aV(n,o.rH.InvalidIdentifier,e);s=s.toLowerCase();let c=null;if(null!=n.localScope&&void 0!==n.localScope[s]&&(c=n.localScope[s]),null===c&&void 0!==n.globalScope[s]&&(c=n.globalScope[s]),null===c)return void t(new o.aV(n,o.rH.InvalidIdentifier,e));(0,a.m)(i)||(0,a.c)(i)?K(n,e,i,{reject:t,resolve:r},c):(0,a.x)(i)?We(n,e,i,{reject:t,resolve:r},c):i instanceof x.Z||(0,a.w)(i)?ke(n,e,i,{reject:t,resolve:r},c):(0,a.T)(i)?T(i.iterator(n.abortSignal),n,e,i,c,f=>{r(f)},f=>{t(f)},0):K(n,e,[],{reject:t,resolve:r},c)}catch(s){t(s)}},t)}catch(l){t(l)}},t)})})).apply(this,arguments)}function Je(n,e){return U.apply(this,arguments)}function U(){return(U=(0,d.Z)(function*(n,e){const r=e.argument;if("MemberExpression"===r.type){const l={t:null},s=yield u(n,r.object);let c=null;l.t=s,!0===r.computed?c=yield u(n,r.property):"Identifier"===r.property.type&&(c=r.property.name);const f=l.t;let p;if((0,a.m)(f)){if(!(0,a.b)(c))throw new o.aV(n,o.rH.ArrayAccessorMustBeNumber,e);if(c<0&&(c=f.length+c),c<0||c>=f.length)throw new o.aV(n,o.rH.OutOfBounds,e);p=(0,a.g)(f[c]),f[c]="++"===e.operator?p+1:p-1}else if(f instanceof x.Z){if(!1===(0,a.c)(c))throw new o.aV(n,o.rH.KeyAccessorMustBeString,e);if(!0!==f.hasField(c))throw new o.aV(n,o.rH.FieldNotFound,e,{key:c});p=(0,a.g)(f.field(c)),f.setField(c,"++"===e.operator?p+1:p-1)}else if(f instanceof b){if(!1===(0,a.c)(c))throw new o.aV(n,o.rH.ModuleAccessorMustBeString,e);if(!0!==f.hasGlobal(c))throw new o.aV(n,o.rH.ModuleExportNotFound,e);p=(0,a.g)(yield f.global(c)),f.setGlobal(c,"++"===e.operator?p+1:p-1)}else{if(!(0,a.w)(f))throw(0,a.x)(f)?new o.aV(n,o.rH.Immutable,e):new o.aV(n,o.rH.InvalidParameter,e);if(!1===(0,a.c)(c))throw new o.aV(n,o.rH.KeyAccessorMustBeString,e);if(!0!==f.hasField(c))throw new o.aV(n,o.rH.FieldNotFound,e,{key:c});p=(0,a.g)(f.field(c)),f.setField(c,"++"===e.operator?p+1:p-1)}return!1===e.prefix?p:"++"===e.operator?p+1:p-1}const t="Identifier"===e.argument.type?e.argument.name.toLowerCase():"";if(!t)throw new o.aV(n,o.rH.InvalidIdentifier,e);let i;if(null!=n.localScope&&void 0!==n.localScope[t])return i=(0,a.g)(n.localScope[t].value),n.localScope[t]={value:"++"===e.operator?i+1:i-1,valueset:!0,node:e},!1===e.prefix?i:"++"===e.operator?i+1:i-1;if(void 0!==n.globalScope[t])return i=(0,a.g)(n.globalScope[t].value),n.globalScope[t]={value:"++"===e.operator?i+1:i-1,valueset:!0,node:e},!1===e.prefix?i:"++"===e.operator?i+1:i-1;throw new o.aV(n,o.rH.InvalidIdentifier,e)})).apply(this,arguments)}function _(n,e,r,t,i){switch(e){case"=":return n===a.v?null:n;case"/=":return(0,a.g)(r)/(0,a.g)(n);case"*=":return(0,a.g)(r)*(0,a.g)(n);case"-=":return(0,a.g)(r)-(0,a.g)(n);case"+=":return(0,a.c)(r)||(0,a.c)(n)?(0,a.j)(r)+(0,a.j)(n):(0,a.g)(r)+(0,a.g)(n);case"%=":return(0,a.g)(r)%(0,a.g)(n);default:throw new o.aV(i,o.rH.UnsupportedOperator,t)}}function Qe(n,e){return W.apply(this,arguments)}function W(){return(W=(0,d.Z)(function*(n,e){const r=e.left;if("MemberExpression"===r.type){const i=yield u(n,r.object);let l=null;if(!0===r.computed)l=yield u(n,r.property);else{if("Identifier"!==r.property.type)throw new o.aV(n,o.rH.InvalidIdentifier,e);l=r.property.name}const s=yield u(n,e.right);if((0,a.m)(i)){if(!(0,a.b)(l))throw new o.aV(n,o.rH.ArrayAccessorMustBeNumber,e);if(l<0&&(l=i.length+l),l<0||l>i.length)throw new o.aV(n,o.rH.OutOfBounds,e);if(l===i.length){if("="!==e.operator)throw new o.aV(n,o.rH.OutOfBounds,e);i[l]=_(s,e.operator,i[l],e,n)}else i[l]=_(s,e.operator,i[l],e,n)}else if(i instanceof x.Z){if(!1===(0,a.c)(l))throw new o.aV(n,o.rH.KeyAccessorMustBeString,e);if(!0===i.hasField(l))i.setField(l,_(s,e.operator,i.field(l),e,n));else{if("="!==e.operator)throw new o.aV(n,o.rH.FieldNotFound,e,{key:l});i.setField(l,_(s,e.operator,null,e,n))}}else if(i instanceof b){if(!1===(0,a.c)(l))throw new o.aV(n,o.rH.KeyAccessorMustBeString,e);if(!0!==i.hasGlobal(l))throw new o.aV(n,o.rH.ModuleExportNotFound,e);i.setGlobal(l,_(s,e.operator,yield i.global(l),e,n))}else{if(!(0,a.w)(i))throw(0,a.x)(i)?new o.aV(n,o.rH.Immutable,e):new o.aV(n,o.rH.InvalidParameter,e);if(!1===(0,a.c)(l))throw new o.aV(n,o.rH.KeyAccessorMustBeString,e);if(!0===i.hasField(l))i.setField(l,_(s,e.operator,i.field(l),e,n));else{if("="!==e.operator)throw new o.aV(n,o.rH.FieldNotFound,e,{key:l});i.setField(l,_(s,e.operator,null,e,n))}}return a.v}const t=r.name.toLowerCase();if(null!=n.localScope&&void 0!==n.localScope[t]){const i=yield u(n,e.right);return n.localScope[t]={value:_(i,e.operator,n.localScope[t].value,e,n),valueset:!0,node:e.right},a.v}if(void 0!==n.globalScope[t]){const i=yield u(n,e.right);return n.globalScope[t]={value:_(i,e.operator,n.globalScope[t].value,e,n),valueset:!0,node:e.right},a.v}throw new o.aV(n,o.rH.InvalidIdentifier,e)})).apply(this,arguments)}function Xe(n,e){return k.apply(this,arguments)}function k(){return(k=(0,d.Z)(function*(n,e){if("AssignmentExpression"===e.expression.type)return u(n,e.expression);if("CallExpression"===e.expression.type){const t=yield u(n,e.expression);return t===a.v?a.v:new a.I(t)}const r=yield u(n,e.expression);return r===a.v?a.v:new a.I(r)})).apply(this,arguments)}function Ye(n,e){return G.apply(this,arguments)}function G(){return(G=(0,d.Z)(function*(n,e){const r=yield u(n,e.test);if(!0===r)return u(n,e.consequent);if(!1===r)return null!==e.alternate?u(n,e.alternate):a.v;throw new o.aV(n,o.rH.BooleanConditionRequired,e)})).apply(this,arguments)}function $e(n,e){return J.apply(this,arguments)}function J(){return(J=(0,d.Z)(function*(n,e){return Ve(n,e,0)})).apply(this,arguments)}function Ve(n,e,r){return Q.apply(this,arguments)}function Q(){return(Q=(0,d.Z)(function*(n,e,r){if(r>=e.body.length)return a.v;const t=yield u(n,e.body[r]);return t instanceof a.R||t===a.o||t===a.p||r===e.body.length-1?t:Ve(n,e,r+1)})).apply(this,arguments)}function ze(n,e){return X.apply(this,arguments)}function X(){return(X=(0,d.Z)(function*(n,e){if(null===e.argument)return new a.R(a.v);const r=yield u(n,e.argument);return new a.R(r)})).apply(this,arguments)}function qe(n,e){return Y.apply(this,arguments)}function Y(){return(Y=(0,d.Z)(function*(n,e){const r=e.id.name.toLowerCase();return n.globalScope[r]={valueset:!0,node:null,value:new Be(e,n)},a.v})).apply(this,arguments)}function en(n,e){return $.apply(this,arguments)}function $(){return($=(0,d.Z)(function*(n,e){const r=e.specifiers[0].local.name.toLowerCase(),t=n.libraryResolver.loadLibrary(r);let i=null;return n.libraryResolver._moduleSingletons?.has(t.uri)?i=n.libraryResolver._moduleSingletons.get(t.uri):(i=new b(t),yield i.loadModule(n),n.libraryResolver._moduleSingletons?.set(t.uri,i)),n.globalScope[r]={value:i,valueset:!0,node:e},a.v})).apply(this,arguments)}function nn(n,e){return z.apply(this,arguments)}function z(){return(z=(0,d.Z)(function*(n,e){if(yield u(n,e.declaration),"FunctionDeclaration"===e.declaration.type)n.exports[e.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===e.declaration.type)for(const r of e.declaration.declarations)n.exports[r.id.name.toLowerCase()]="variable";return a.v})).apply(this,arguments)}function Re(n,e,r){return q.apply(this,arguments)}function q(){return(q=(0,d.Z)(function*(n,e,r){return r>=e.declarations.length||(yield u(n,e.declarations[r]),r===e.declarations.length-1||(yield Re(n,e,r+1))),a.v})).apply(this,arguments)}function rn(n,e){return ee.apply(this,arguments)}function ee(){return(ee=(0,d.Z)(function*(n,e){let r=null;if(r=null===e.init?null:yield u(n,e.init),null!==n.localScope){if(r===a.v&&(r=null),"Identifier"!==e.id.type)throw new o.aV(n,o.rH.InvalidIdentifier,e);const i=e.id.name.toLowerCase();return null!=n.localScope&&(n.localScope[i]={value:r,valueset:!0,node:e.init}),a.v}if("Identifier"!==e.id.type)throw new o.aV(n,o.rH.InvalidIdentifier,e);const t=e.id.name.toLowerCase();return r===a.v&&(r=null),n.globalScope[t]={value:r,valueset:!0,node:e.init},a.v})).apply(this,arguments)}function tn(n,e){return ne.apply(this,arguments)}function ne(){return(ne=(0,d.Z)(function*(n,e){const r=yield u(n,e.object);if(null===r)throw new o.aV(n,o.rH.MemberOfNull,e);if(!1===e.computed){if("Identifier"===e.property.type){if(r instanceof x.Z||(0,a.w)(r))return r.field(e.property.name);if(r instanceof ve.Z)return(0,I.Z)(r,e.property.name,n,e);if(r instanceof b){if(!r.hasGlobal(e.property.name))throw new o.aV(n,o.rH.InvalidIdentifier,e);return r.global(e.property.name)}throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}let t=yield u(n,e.property);if(r instanceof x.Z||(0,a.w)(r)){if((0,a.c)(t))return r.field(t);throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}if(r instanceof b){if((0,a.c)(t))return r.global(t);throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}if(r instanceof ve.Z){if((0,a.c)(t))return(0,I.Z)(r,t,n,e);throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}if((0,a.m)(r)){if((0,a.b)(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new o.aV(n,o.rH.OutOfBounds,e);return r[t]}throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}if((0,a.x)(r)){if((0,a.b)(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length()+t),t>=r.length()||t<0)throw new o.aV(n,o.rH.OutOfBounds,e);return r.get(t)}throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}if((0,a.c)(r)){if((0,a.b)(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new o.aV(n,o.rH.OutOfBounds,e);return r[t]}throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)}throw new o.aV(n,o.rH.InvalidMemberAccessKey,e)})).apply(this,arguments)}function on(n,e){return re.apply(this,arguments)}function re(){return(re=(0,d.Z)(function*(n,e){const r=yield u(n,e.argument);if((0,a.a)(r)){if("!"===e.operator)return!r;if("-"===e.operator)return-1*(0,a.g)(r);if("+"===e.operator)return 1*(0,a.g)(r);if("~"===e.operator)return~(0,a.g)(r);throw new o.aV(n,o.rH.UnsupportedUnaryOperator,e)}if("-"===e.operator)return-1*(0,a.g)(r);if("+"===e.operator)return 1*(0,a.g)(r);if("~"===e.operator)return~(0,a.g)(r);throw new o.aV(n,o.rH.UnsupportedUnaryOperator,e)})).apply(this,arguments)}function an(n,e){return te.apply(this,arguments)}function te(){return(te=(0,d.Z)(function*(n,e){const r=[];for(let t=0;t<e.elements.length;t++)r.push(yield u(n,e.elements[t]));for(let t=0;t<r.length;t++){if((0,a.i)(r[t]))throw new o.aV(n,o.rH.NoFunctionInArray,e);r[t]===a.v&&(r[t]=null)}return r})).apply(this,arguments)}function ln(n,e){return oe.apply(this,arguments)}function oe(){return(oe=(0,d.Z)(function*(n,e){const r=[];r[0]=yield u(n,e.left),r[1]=yield u(n,e.right);const t=r[0],i=r[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,a.u)((0,a.g)(t),(0,a.g)(i),e.operator);case"==":return(0,a.s)(t,i);case"!=":return!(0,a.s)(t,i);case"<":case">":case"<=":case">=":return(0,a.r)(t,i,e.operator);case"+":return(0,a.c)(t)||(0,a.c)(i)?(0,a.j)(t)+(0,a.j)(i):(0,a.g)(t)+(0,a.g)(i);case"-":return(0,a.g)(t)-(0,a.g)(i);case"*":return(0,a.g)(t)*(0,a.g)(i);case"/":return(0,a.g)(t)/(0,a.g)(i);case"%":return(0,a.g)(t)%(0,a.g)(i);default:throw new o.aV(n,o.rH.UnsupportedOperator,e)}})).apply(this,arguments)}function sn(n,e){return ae.apply(this,arguments)}function ae(){return(ae=(0,d.Z)(function*(n,e){const r=yield u(n,e.left);let t=null;if(!(0,a.a)(r))throw new o.aV(n,o.rH.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":if(!0===r)return r;if(t=yield u(n,e.right),(0,a.a)(t))return t;throw new o.aV(n,o.rH.LogicExpressionOrAnd,e);case"&&":if(!1===r)return r;if(t=yield u(n,e.right),(0,a.a)(t))return t;throw new o.aV(n,o.rH.LogicExpressionOrAnd,e);default:throw new o.aV(n,o.rH.LogicExpressionOrAnd,e)}})).apply(this,arguments)}function ie(n,e){return le.apply(this,arguments)}function le(){return(le=(0,d.Z)(function*(n,e){const r=e.name.toLowerCase();if(null!=n.localScope&&void 0!==n.localScope[r]){const t=n.localScope[r];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=u(n,t.node);const i=yield t.d;return t.value=i,t.valueset=!0,i}if(void 0!==n.globalScope[r]){const t=n.globalScope[r];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=u(n,t.node);const i=yield t.d;return t.value=i,t.valueset=!0,i}throw new o.aV(n,o.rH.InvalidIdentifier,e)})).apply(this,arguments)}function un(n,e){return se.apply(this,arguments)}function se(){return(se=(0,d.Z)(function*(n,e){if("MemberExpression"===e.callee.type){const r=yield u(n,e.callee.object);if(!(r instanceof b))throw new o.aV(n,o.rH.FuncionNotFound,e);const t=!1===e.callee.computed?e.callee.property.name:yield u(n,e.callee.property);if(!r.hasGlobal(t))throw new o.aV(n,o.rH.FuncionNotFound,e);const i=yield r.global(t);if(!(0,a.i)(i))throw new o.aV(n,o.rH.CallNonFunction,e);return i.call(n,e)}if("Identifier"!==e.callee.type)throw new o.aV(n,o.rH.FuncionNotFound,e);if(null!=n.localScope&&void 0!==n.localScope[e.callee.name.toLowerCase()]){const r=n.localScope[e.callee.name.toLowerCase()];if((0,a.i)(r.value))return r.value.call(n,e);throw new o.aV(n,o.rH.CallNonFunction,e)}if(void 0!==n.globalScope[e.callee.name.toLowerCase()]){const r=n.globalScope[e.callee.name.toLowerCase()];if((0,a.i)(r.value))return r.value.call(n,e);throw new o.aV(n,o.rH.CallNonFunction,e)}throw new o.aV(n,o.rH.FuncionNotFound,e)})).apply(this,arguments)}function cn(n,e){return ue.apply(this,arguments)}function ue(){return(ue=(0,d.Z)(function*(n,e){return e.value?e.value.cooked:""})).apply(this,arguments)}function fn(n,e,r){if((0,a.i)(n))throw new o.aV(e,o.rH.NoFunctionInTemplateLiteral,r);return n}function pn(n,e){return ce.apply(this,arguments)}function ce(){return(ce=(0,d.Z)(function*(n,e){const r=[];for(let l=0;l<e.expressions.length;l++){const s=yield u(n,e.expressions[l]);r[l]=(0,a.j)(s)}let t="",i=0;for(const l of e.quasis)t+=l.value?l.value.cooked:"",!1===l.tail&&(t+=r[i]?fn(r[i],n,e):"",i++);return t})).apply(this,arguments)}const g={};function Se(n,e,r,t){return fe.apply(this,arguments)}function fe(){return(fe=(0,d.Z)(function*(n,e,r,t){const i=yield u(n,e.arguments[r]);if((0,a.s)(i,t))return u(n,e.arguments[r+1]);const l=e.arguments.length-r;return 1===l?u(n,e.arguments[r]):2===l?null:3===l?u(n,e.arguments[r+2]):Se(n,e,r+2,t)})).apply(this,arguments)}function He(n,e,r,t){return pe.apply(this,arguments)}function pe(){return(pe=(0,d.Z)(function*(n,e,r,t){if(!0===t)return u(n,e.arguments[r+1]);if(e.arguments.length-r==3)return u(n,e.arguments[r+2]);const i=yield u(n,e.arguments[r+2]);if(!1===(0,a.a)(i))throw new o.aV(n,o.rH.ModuleExportNotFound,e.arguments[r+2]);return He(n,e,r+2,i)})).apply(this,arguments)}function de(n,e,r,t){return he.apply(this,arguments)}function he(){return(he=(0,d.Z)(function*(n,e,r,t){const i=n.body;if(r.length!==n.params.length)throw new o.aV(e,o.rH.WrongNumberOfParameters,null);for(let s=0;s<r.length;s++){const c=n.params[s];"Identifier"===c.type&&null!=e.localScope&&(e.localScope[c.name.toLowerCase()]={d:null,value:r[s],valueset:!0,node:null})}const l=yield u(e,i);if(l instanceof a.R)return l.value;if(l===a.o)throw new o.aV(e,o.rH.UnexpectedToken,t);if(l===a.p)throw new o.aV(e,o.rH.UnexpectedToken,t);return l instanceof a.I?l.value:l})).apply(this,arguments)}(0,Fe.r)(g,v),(0,Le.r)(g,v),(0,Pe.r)(g,v),(0,I.r)(g,v),(0,De.r)(g,v),(0,Ze.registerFunctions)({functions:g,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:v,standardFunctionAsync:V}),g.iif=function(){var n=(0,d.Z)(function*(e,r){(0,a.y)(null===r.arguments?[]:r.arguments,3,3,e,r);const t=yield u(e,r.arguments[0]);if(!1===(0,a.a)(t))throw new o.aV(e,o.rH.BooleanConditionRequired,r);return u(e,t?r.arguments[1]:r.arguments[2])});return function(e,r){return n.apply(this,arguments)}}(),g.decode=function(){var n=(0,d.Z)(function*(e,r){if(r.arguments.length<2)throw new o.aV(e,o.rH.WrongNumberOfParameters,r);if(2===r.arguments.length)return u(e,r.arguments[1]);if((r.arguments.length-1)%2==0)throw new o.aV(e,o.rH.WrongNumberOfParameters,r);return Se(e,r,1,yield u(e,r.arguments[0]))});return function(e,r){return n.apply(this,arguments)}}(),g.when=function(){var n=(0,d.Z)(function*(e,r){if(r.arguments.length<3)throw new o.aV(e,o.rH.WrongNumberOfParameters,r);if(r.arguments.length%2==0)throw new o.aV(e,o.rH.WrongNumberOfParameters,r);const t=yield u(e,r.arguments[0]);if(!1===(0,a.a)(t))throw new o.aV(e,o.rH.BooleanConditionRequired,r.arguments[0]);return He(e,r,0,t)});return function(e,r){return n.apply(this,arguments)}}();const dn={fixSpatialReference:a.q,parseArguments:E,standardFunction:v,standardFunctionAsync:V,evaluateIdentifier:ie};for(const n in g)g[n]={value:new m.Bx(g[n]),valueset:!0,node:null};const R=function(){};function Ie(n,e,r){const t=new R;null==n&&(n={}),null==e&&(e={});const i=new x.Z({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});i.immutable=!1,t.textformatting={value:i,valueset:!0,node:null};for(const l in e)t[l]={value:new m.Bx(e[l]),native:!0,valueset:!0,node:null};for(const l in n)t[l]=n[l]&&"esri.Graphic"===n[l].declaredClass?{value:_e.Z.createFromGraphic(n[l],r),valueset:!0,node:null}:{value:n[l],valueset:!0,node:null};return t}function Ee(n){console.log(n)}(R.prototype=g).infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},R.prototype.pi={value:Math.PI,valueset:!0,node:null};const hn=dn;function Me(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:v,standardFunctionAsync:V,evaluateIdentifier:ie};for(let r=0;r<n.length;r++)n[r].registerFunctions(e);for(const r in e.functions)g[r]={value:new m.Bx(e.functions[r]),valueset:!0,node:null},R.prototype[r]=g[r];for(let r=0;r<e.signatures.length;r++)(0,Ae.gW)(e.signatures[r],"async")}function gn(n,e){return ge.apply(this,arguments)}function ge(){return(ge=(0,d.Z)(function*(n,e){let r=e.spatialReference;null==r&&(r=new we.Z({wkid:102100}));let t=null;n.usesModules&&(t=new me.s(new Map,n.loadedModules));const i=Ie(e.vars,e.customfunctions,e.timeReference),l={spatialReference:r,services:e.services,exports:{},libraryResolver:t,abortSignal:null==e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:i,console:e.console?e.console:Ee,timeReference:e.timeReference??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}};let s=yield u(l,n);if(s instanceof a.R&&(s=s.value),s instanceof a.I&&(s=s.value),s===a.v&&(s=null),s===a.o)throw new o.aV(l,o.rH.IllegalResult,null);if(s===a.p)throw new o.aV(l,o.rH.IllegalResult,null);if((0,a.i)(s))throw new o.aV(l,o.rH.IllegalResult,null);return s})).apply(this,arguments)}Me([Oe.A])}}]);