"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[7728],{7728:(Z,P,p)=>{p.r(P),p.d(P,{default:()=>q});var D=p(15861),F=p(26584),T=p(62208),g=p(91179),v=p(37053),j=p(82054),C=p(1476),A=p(3579),I=p(82959),x=p(58175),h=p(56554),d=p(35775),M=p(60466),U=p(85),b=p(36630);const B=v.Zn,L={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:v.Zn},Q={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function $(O){return(0,g.wp)(O)?null!=O.m:!!O.hasM}class q{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(e){var t=this;return(0,D.Z)(function*(){const s=[],{features:i}=e,a=t._inferLayerProperties(i,e.fields),u=e.fields||[],m=null!=e.hasM?e.hasM:!!a.hasM,_=null!=e.hasZ?e.hasZ:!!a.hasZ,c=!e.spatialReference&&!a.spatialReference,E=c?B:e.spatialReference||a.spatialReference,l=c?L:null,f=e.geometryType||a.geometryType;let r=e.objectIdField||a.objectIdField,y=e.timeInfo;if(f&&(c&&s.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!f))throw new F.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!r)throw new F.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(a.objectIdField&&r!==a.objectIdField&&(s.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${r}" doesn't match the field name "${a.objectIdField}", found in the provided fields`}),r=a.objectIdField),r&&!a.objectIdField){let n=null;u.some(R=>R.name===r&&(n=R,!0))?(n.type="esriFieldTypeOID",n.editable=!1,n.nullable=!1):u.unshift({alias:r,name:r,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const n of u){if(null==n.name&&(n.name=n.alias),null==n.alias&&(n.alias=n.name),!n.name)throw new F.Z("feature-layer:invalid-field-name","field name is missing",{field:n});if(n.name===r&&(n.type="esriFieldTypeOID"),!U.v.jsonValues.includes(n.type))throw new F.Z("feature-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n})}const S={};for(const n of u)if("esriFieldTypeOID"!==n.type&&"esriFieldTypeGlobalID"!==n.type){const R=(0,b.os)(n);void 0!==R&&(S[n.name]=R)}if(t._fieldsIndex=new M.Z(u),t._createDefaultAttributes=(0,h.Dm)(S,r),y){if(y.startTimeField){const n=t._fieldsIndex.get(y.startTimeField);n?(y.startTimeField=n.name,n.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const n=t._fieldsIndex.get(y.endTimeField);n?(y.endTimeField=n.name,n.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const n=t._fieldsIndex.get(y.trackIdField);n?y.trackIdField=n.name:(y.trackIdField=null,s.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(s.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:y}}),y=null)}const W={warnings:s,featureErrors:[],layerDefinition:{...Q,drawingInfo:(0,h.bU)(f),templates:(0,h.Hq)(S),extent:l,geometryType:f,objectIdField:r,fields:u,hasZ:_,hasM:m,timeInfo:y},assignedObjectIds:{}};if(t._queryEngine=new x.q({fields:u,geometryType:f,hasM:m,hasZ:_,objectIdField:r,spatialReference:E,featureStore:new A.Z({geometryType:f,hasM:m,hasZ:_}),timeInfo:y,cacheSpatialQueries:!0}),!i||!i.length)return t._nextObjectId=C.X,W;const G=(0,C.S)(r,i);return t._nextObjectId=G+1,yield(0,I._W)(i,E),t._loadInitialFeatures(W,i)})()}applyEdits(e){var t=this;return(0,D.Z)(function*(){const{spatialReference:s,geometryType:i}=t._queryEngine;return yield Promise.all([(0,d.b)(s,i),(0,I._W)(e.adds,s),(0,I._W)(e.updates,s)]),t._applyEdits(e)})()}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,a=null,u=null,m=null;for(const _ of e){const c=_.geometry;if(!(0,T.Wi)(c)&&(a||(a=(0,g.Ji)(c)),u||(u=c.spatialReference),null==s&&(s=(0,g.wp)(O=c)?null!=O.z:!!O.hasZ),null==i&&(i=$(c)),a&&u&&null!=s&&null!=i))break}var O;if(t&&t.length){let _=null;t.some(c=>{const E="esriFieldTypeOID"===c.type,l=!c.type&&c.name&&"objectid"===c.name.toLowerCase();return _=c,E||l})&&(m=_.name)}return{geometryType:a,spatialReference:u,objectIdField:m,hasM:i,hasZ:s}}_loadInitialFeatures(e,t){var s=this;return(0,D.Z)(function*(){const{geometryType:i,hasM:a,hasZ:u,objectIdField:m,spatialReference:_,featureStore:c}=s._queryEngine,E=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&i!==(0,g.Ji)(o.geometry)){e.featureErrors.push((0,d.av)("Incorrect geometry type."));continue}const r=s._createDefaultAttributes(),y=(0,d.O0)(s._fieldsIndex,r,o.attributes,!0,e.warnings);y?e.featureErrors.push(y):(s._assignObjectId(r,o.attributes,!0),o.attributes=r,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[m]),(0,T.pC)(o.geometry)&&(o.geometry=(0,I.iV)(o.geometry,o.geometry.spatialReference,_)),E.push(o))}c.addMany((0,j.Yn)([],E,i,u,a,m));const{fullExtent:l,timeExtent:f}=yield s._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=l,f){const{start:o,end:r}=f;e.layerDefinition.timeInfo.timeExtent=[o,r]}return e})()}_applyEdits(e){var t=this;return(0,D.Z)(function*(){const{adds:s,updates:i,deletes:a}=e,u={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(s&&s.length&&t._applyAddEdits(u,s),i&&i.length&&t._applyUpdateEdits(u,i),a&&a.length){for(const c of a)u.deleteResults.push((0,d.d1)(c));t._queryEngine.featureStore.removeManyById(a)}const{fullExtent:m,timeExtent:_}=yield t._queryEngine.fetchRecomputedExtents();return{extent:m,timeExtent:_,featureEditResults:u}})()}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:a,hasZ:u,objectIdField:m,spatialReference:_,featureStore:c}=this._queryEngine,E=[];for(const l of t){if(l.geometry&&i!==(0,g.Ji)(l.geometry)){s.push((0,d.av)("Incorrect geometry type."));continue}const f=this._createDefaultAttributes(),o=(0,d.O0)(this._fieldsIndex,f,l.attributes);if(o)s.push(o);else{if(this._assignObjectId(f,l.attributes),l.attributes=f,null!=l.uid&&(e.uidToObjectId[l.uid]=l.attributes[m]),(0,T.pC)(l.geometry)){const r=l.geometry.spatialReference??_;l.geometry=(0,I.iV)((0,d.og)(l.geometry,r),r,_)}E.push(l),s.push((0,d.d1)(l.attributes[m]))}}c.addMany((0,j.Yn)([],E,i,u,a,m))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:u,spatialReference:m,featureStore:_}=this._queryEngine;for(const c of t){const{attributes:E,geometry:l}=c,f=E&&E[u];if(null==f){e.push((0,d.av)(`Identifier field ${u} missing`));continue}if(!_.has(f)){e.push((0,d.av)(`Feature with object id ${f} missing`));continue}const o=(0,j.EI)(_.getFeature(f),s,a,i);if((0,T.pC)(l)){if(s!==(0,g.Ji)(l)){e.push((0,d.av)("Incorrect geometry type."));continue}const r=l.spatialReference??m;o.geometry=(0,I.iV)((0,d.og)(l,r),r,m)}if(E){const r=(0,d.O0)(this._fieldsIndex,o.attributes,E);if(r){e.push(r);continue}}_.add((0,j.XA)(o,s,a,i,u)),e.push((0,d.d1)(f))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&t&&isFinite(t[i])?t[i]:this._nextObjectId++}}},56554:(Z,P,p)=>{p.d(P,{Dm:()=>A,Hq:()=>I,MS:()=>x,bU:()=>v});var D=p(8314),F=p(58817),T=p(87757),g=p(24837);function v(h){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===h||"esriGeometryMultipoint"===h?g.I4:"esriGeometryPolyline"===h?g.ET:g.lF}}}const j=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let C=1;function A(h,d){if((0,D.Z)("esri-csp-restrictions"))return()=>({[d]:null,...h});try{let M=`this.${d} = null;`;for(const b in h)M+=`this${j.test(b)?`.${b}`:`["${b}"]`} = ${JSON.stringify(h[b])};`;const U=new Function(`\n      return class AttributesClass$${C++} {\n        constructor() {\n          ${M};\n        }\n      }\n    `)();return()=>new U}catch{return()=>({[d]:null,...h})}}function I(h={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,F.d9)(h)}}]}function x(h,d){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:h},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:d,supportsDelete:d,supportsEditing:d,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:d,supportsExceedsLimitStatistics:!0},query:T.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:d,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);