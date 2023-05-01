"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[1983],{96160:(ne,j,t)=>{t.d(j,{D:()=>le,b:()=>k});var y=t(62208),v=t(43703),s=t(52382),p=t(73132),L=t(13934),M=t(78925),O=t(24255),n=t(60355),_=t(26859),i=t(84833),f=t(72326),m=t(36603),T=t(58173),A=t(21799),P=t(66085),d=t(58208),D=t(29052),K=t(54662),U=t(13146),E=t(31166),S=t(10109),B=t(96395),g=t(98898),J=t(92724),Z=t(72968),u=t(70489),G=t(92836),V=t(67022),x=t(72397),X=t(28137),ee=t(99198),$=t(97139),fe=t(69960),pe=t(65787),H=t(17625),C=t(63123),W=t(22355),ve=t(35387),oe=t(44835),he=t(16396);function k(a){const h=new W.kG,{vertex:ie,fragment:se,varyings:me}=h;return(0,ee.Sv)(ie,a),h.include(i.f),me.add("vpos","vec3"),h.include(G.k,a),h.include(n.f,a),h.include(P.L,a),a.hasColorTextureTransform&&h.include(u.av),a.output!==L.H.Color&&a.output!==L.H.Alpha||(a.hasNormalTextureTransform&&h.include(u.NI),a.hasEmissionTextureTransform&&h.include(u.R5),a.hasOcclusionTextureTransform&&h.include(u.jF),a.hasMetallicRoughnessTextureTransform&&h.include(u.DT),(0,ee.hY)(ie,a),h.include(_.O,a),h.include(O.w,a),a.normalType===_.h.Attribute&&a.offsetBackfaces&&h.include(p.w),h.include(D.Q,a),h.include(A.Bb,a),a.instancedColor&&h.attributes.add(he.T.INSTANCECOLOR,"vec4"),me.add("localvpos","vec3"),h.include(m.D,a),h.include(s.qj,a),h.include(f.R,a),h.include(T.c,a),ie.uniforms.add(new fe.N("externalColor",Y=>Y.externalColor)),me.add("vcolorExt","vec4"),a.hasMultipassTerrain&&me.add("depth","float"),a.hasModelTransformation&&ie.uniforms.add(new C.g("model",Y=>(0,y.pC)(Y.modelTransformation)?Y.modelTransformation:v.I)),ie.code.add(H.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${a.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${H.H.float(V.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a.normalType===_.h.Attribute?H.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${a.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${a.hasModelTransformation?"model,":""} vpos);
          ${a.normalType===_.h.Attribute&&a.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${a.hasColorTextureTransform?H.H`forwardColorUV();`:""}
        ${a.hasNormalTextureTransform?H.H`forwardNormalUV();`:""}
        ${a.hasEmissionTextureTransform?H.H`forwardEmissiveUV();`:""}
        ${a.hasOcclusionTextureTransform?H.H`forwardOcclusionUV();`:""}
        ${a.hasMetallicRoughnessTextureTransform?H.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),a.output===L.H.Alpha&&(h.include(M.f5,a),h.include(x.z,a),h.include(S.l,a),se.uniforms.add([new pe.p("opacity",Y=>Y.opacity),new pe.p("layerOpacity",Y=>Y.layerOpacity)]),a.hasColorTexture&&se.uniforms.add(new ve.A("tex",Y=>Y.texture)),se.include(X.y),se.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?H.H`
                vec4 texColor = texture2D(tex, ${a.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        ${a.hasVertexColors?H.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),a.output===L.H.Color&&(h.include(M.f5,a),h.include(U.XP,a),h.include(K.K,a),h.include(x.z,a),h.include(a.instancedDoublePrecision?Z.hb:Z.XE,a),h.include(S.l,a),(0,ee.hY)(se,a),se.uniforms.add([ie.uniforms.get("localOrigin"),new $.J("ambient",Y=>Y.ambient),new $.J("diffuse",Y=>Y.diffuse),new pe.p("opacity",Y=>Y.opacity),new pe.p("layerOpacity",Y=>Y.layerOpacity)]),a.hasColorTexture&&se.uniforms.add(new ve.A("tex",Y=>Y.texture)),h.include(J.jV,a),h.include(g.T,a),se.include(X.y),h.include(B.k,a),(0,U.PN)(se),(0,U.sC)(se),(0,E.F1)(se),se.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${a.hasColorTexture?H.H`
                vec4 texColor = texture2D(tex, ${a.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${a.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${a.normalType===_.h.ScreenDerivative?H.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:H.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${a.pbrMode===J.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${a.receiveShadows?"readShadowMap(vpos, linearDepth)":a.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${a.hasVertexColors?H.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${a.hasNormalTexture?H.H`
                mat3 tangentSpace = ${a.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:H.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${a.spherical?H.H`normalize(posWorld);`:H.H`vec3(0.0, 0.0, 1.0);`}

        ${a.snowCover?H.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${a.pbrMode===J.f7.Normal||a.pbrMode===J.f7.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${a.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${a.transparencyPassType===oe.A.Color?H.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),h.include(d.s,a),h}const le=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}))},77133:(ne,j,t)=>{t.d(j,{R:()=>H,b:()=>pe});var y=t(52382),v=t(73132),s=t(13934),p=t(78925),L=t(24255),M=t(60355),O=t(26859),n=t(84833),_=t(72326),i=t(36603),f=t(58173),m=t(66085),T=t(58208),A=t(54662),P=t(13146),d=t(31166),D=t(10109),K=t(98898),U=t(92724),E=t(72968),S=t(92836),B=t(67022),g=t(72397),J=t(28137),Z=t(99198),u=t(97139),G=t(69960),V=t(65787),x=t(17625),X=t(22355),ee=t(35387),$=t(44835),fe=t(16396);function pe(C){const W=new X.kG,{vertex:ve,fragment:oe,varyings:he}=W;return(0,Z.Sv)(ve,C),W.include(n.f),he.add("vpos","vec3"),W.include(S.k,C),W.include(M.f,C),W.include(m.L,C),C.output!==s.H.Color&&C.output!==s.H.Alpha||((0,Z.hY)(W.vertex,C),W.include(O.O,C),W.include(L.w,C),C.offsetBackfaces&&W.include(v.w),C.instancedColor&&W.attributes.add(fe.T.INSTANCECOLOR,"vec4"),he.add("vNormalWorld","vec3"),he.add("localvpos","vec3"),C.hasMultipassTerrain&&he.add("depth","float"),W.include(i.D,C),W.include(y.qj,C),W.include(_.R,C),W.include(f.c,C),ve.uniforms.add(new G.N("externalColor",k=>k.externalColor)),he.add("vcolorExt","vec4"),ve.code.add(x.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${C.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${x.H.float(B.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${C.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${C.hasMultipassTerrain?x.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),C.output===s.H.Alpha&&(W.include(p.f5,C),W.include(g.z,C),W.include(D.l,C),oe.uniforms.add([new V.p("opacity",k=>k.opacity),new V.p("layerOpacity",k=>k.layerOpacity)]),C.hasColorTexture&&oe.uniforms.add(new ee.A("tex",k=>k.texture)),oe.include(J.y),oe.code.add(x.H`
      void main() {
        discardBySlice(vpos);
        ${C.hasMultipassTerrain?x.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${C.hasColorTexture?x.H`
                vec4 texColor = texture2D(tex, ${C.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                ${C.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:x.H`vec4 texColor = vec4(1.0);`}
        ${C.hasVertexColors?x.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:x.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),C.output===s.H.Color&&(W.include(p.f5,C),W.include(P.XP,C),W.include(A.K,C),W.include(g.z,C),W.include(C.instancedDoublePrecision?E.hb:E.XE,C),W.include(D.l,C),(0,Z.hY)(W.fragment,C),(0,d.Pe)(oe),(0,P.PN)(oe),(0,P.sC)(oe),oe.uniforms.add([ve.uniforms.get("localOrigin"),ve.uniforms.get("view"),new u.J("ambient",k=>k.ambient),new u.J("diffuse",k=>k.diffuse),new V.p("opacity",k=>k.opacity),new V.p("layerOpacity",k=>k.layerOpacity)]),C.hasColorTexture&&oe.uniforms.add(new ee.A("tex",k=>k.texture)),W.include(U.jV,C),W.include(K.T,C),oe.include(J.y),W.extensions.add("GL_OES_standard_derivatives"),(0,d.F1)(oe),oe.code.add(x.H`
      void main() {
        discardBySlice(vpos);
        ${C.hasMultipassTerrain?x.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${C.hasColorTexture?x.H`
                vec4 texColor = texture2D(tex, ${C.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                ${C.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:x.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${C.pbrMode===U.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${C.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":C.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${C.hasVertexColors?x.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:x.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${C.snowCover?x.H`albedo = mix(albedo, vec3(1), 0.9);`:x.H``}
        ${x.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${C.pbrMode===U.f7.Normal||C.pbrMode===U.f7.Schematic?C.spherical?x.H`vec3 normalGround = normalize(vpos + localOrigin);`:x.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:x.H``}
        ${C.pbrMode===U.f7.Normal||C.pbrMode===U.f7.Schematic?x.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${C.snowCover?x.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:x.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${C.transparencyPassType===$.A.Color?x.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:x.H``}
      }
    `)),W.include(T.s,C),W}const H=Object.freeze(Object.defineProperty({__proto__:null,build:pe},Symbol.toStringTag,{value:"Module"}))},79800:(ne,j,t)=>{t.d(j,{a:()=>s,b:()=>M,n:()=>L,s:()=>p,t:()=>v});var y=t(96286);function v(n,_,i){if(n.count!==_.count)return void y.c.error("source and destination buffers need to have the same number of elements");const f=n.count,m=i[0],T=i[1],A=i[2],P=i[4],d=i[5],D=i[6],K=i[8],U=i[9],E=i[10],S=i[12],B=i[13],g=i[14],J=n.typedBuffer,Z=n.typedBufferStride,u=_.typedBuffer,G=_.typedBufferStride;for(let V=0;V<f;V++){const x=V*Z,X=V*G,ee=u[X],$=u[X+1],fe=u[X+2];J[x]=m*ee+P*$+K*fe+S,J[x+1]=T*ee+d*$+U*fe+B,J[x+2]=A*ee+D*$+E*fe+g}}function s(n,_,i){if(n.count!==_.count)return void y.c.error("source and destination buffers need to have the same number of elements");const f=n.count,m=i[0],T=i[1],A=i[2],P=i[3],d=i[4],D=i[5],K=i[6],U=i[7],E=i[8],S=n.typedBuffer,B=n.typedBufferStride,g=_.typedBuffer,J=_.typedBufferStride;for(let Z=0;Z<f;Z++){const u=Z*B,G=Z*J,V=g[G],x=g[G+1],X=g[G+2];S[u]=m*V+P*x+K*X,S[u+1]=T*V+d*x+U*X,S[u+2]=A*V+D*x+E*X}}function p(n,_,i){const f=Math.min(n.count,_.count),m=n.typedBuffer,T=n.typedBufferStride,A=_.typedBuffer,P=_.typedBufferStride;for(let d=0;d<f;d++){const D=d*T,K=d*P;m[D]=i*A[K],m[D+1]=i*A[K+1],m[D+2]=i*A[K+2]}}function L(n,_){const i=Math.min(n.count,_.count),f=n.typedBuffer,m=n.typedBufferStride,T=_.typedBuffer,A=_.typedBufferStride;for(let P=0;P<i;P++){const d=P*m,D=P*A,K=T[D],U=T[D+1],E=T[D+2],S=K*K+U*U+E*E;if(S>0){const B=1/Math.sqrt(S);f[d]=B*K,f[d+1]=B*U,f[d+2]=B*E}}}function M(n,_,i){const f=Math.min(n.count,_.count),m=n.typedBuffer,T=n.typedBufferStride,A=_.typedBuffer,P=_.typedBufferStride;for(let d=0;d<f;d++){const D=d*T,K=d*P;m[D]=A[K]>>i,m[D+1]=A[K+1]>>i,m[D+2]=A[K+2]>>i}}Object.freeze(Object.defineProperty({__proto__:null,normalize:L,scale:p,shiftRight:M,transformMat3:s,transformMat4:v},Symbol.toStringTag,{value:"Module"}))},9554:(ne,j,t)=>{function y(p,L,M){const O=p.typedBuffer,n=p.typedBufferStride,_=L.typedBuffer,i=L.typedBufferStride,f=M?M.count:L.count;let m=(M&&M.dstIndex?M.dstIndex:0)*n,T=(M&&M.srcIndex?M.srcIndex:0)*i;for(let A=0;A<f;++A)O[m]=_[T],O[m+1]=_[T+1],O[m+2]=_[T+2],m+=n,T+=i}function v(p,L,M,O,n){const _=p.typedBuffer,i=p.typedBufferStride,f=n?.count??p.count;let m=(n?.dstIndex??0)*i;for(let T=0;T<f;++T)_[m]=L,_[m+1]=M,_[m+2]=O,m+=i}t.d(j,{c:()=>y,f:()=>v}),Object.freeze(Object.defineProperty({__proto__:null,copy:y,fill:v},Symbol.toStringTag,{value:"Module"}))},96286:(ne,j,t)=>{t.d(j,{c:()=>v});const v=t(63290).Z.getLogger("esri.views.3d.support.buffer.math")},98496:(ne,j,t)=>{t.d(j,{i:()=>L});var y=t(62208),v=t(49966),s=t(9545),p=t(30217);function L(M){if((0,y.Wi)(M))return null;const O=(0,y.pC)(M.offset)?M.offset:s.Z,n=(0,y.pC)(M.rotation)?M.rotation:0,_=(0,y.pC)(M.scale)?M.scale:s.O,i=(0,v.f)(1,0,0,0,1,0,O[0],O[1],1),f=(0,v.f)(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),m=(0,v.f)(_[0],0,0,0,_[1],0,0,0,1),T=(0,v.c)();return(0,p.m)(T,f,m),(0,p.m)(T,i,T),T}},11983:(ne,j,t)=>{t.r(j),t.d(j,{fetch:()=>ze,gltfToEngineResources:()=>Ne,parseUrl:()=>He});var y=t(15861),v=t(83100),s=t(62208),p=t(30217),L=t(550),M=t(28347),O=t(43703),n=t(84161),_=t(28093),i=t(5548),f=t(60479),m=t(79800),T=t(63657),A=t(60490),P=t(9160),d=t(12495),D=t(96170),K=t(19574),U=t(98496);class E{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class S{constructor(c,I,b){this.name=c,this.lodThreshold=I,this.pivotOffset=b,this.stageResources=new E,this.numberOfVertices=0}}var B=t(84792),g=t(59213),J=t(27306),Z=t(26584),u=t(63290),G=t(1101),V=t(10699),x=t(10349),X=t(70026),ee=t(94255),$=t(42743),fe=t(44968),pe=t(9983),H=t(28523),C=t(67969);const W=u.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function ve(l,c){return oe.apply(this,arguments)}function oe(){return(oe=(0,y.Z)(function*(l,c){const I=yield he(l,c),b=yield Y(I.textureDefinitions??{},c);let z=0;for(const F in b)if(b.hasOwnProperty(F)){const N=b[F];z+=N?.image?N.image.width*N.image.height*4:0}return{resource:I,textures:b,size:z+(0,J.Ul)(I)}})).apply(this,arguments)}function he(l,c){return k.apply(this,arguments)}function k(){return(k=(0,y.Z)(function*(l,c){const I=(0,s.pC)(c)&&c.streamDataRequester;if(I)return le(l,I,c);const b=yield(0,g.q6)((0,B.default)(l,(0,s.Wg)(c)));if(!0===b.ok)return b.value.data;(0,V.r9)(b.error),h(b.error)})).apply(this,arguments)}function le(l,c,I){return a.apply(this,arguments)}function a(){return(a=(0,y.Z)(function*(l,c,I){const b=yield(0,g.q6)(c.request(l,"json",I));if(!0===b.ok)return b.value;(0,V.r9)(b.error),h(b.error.details.url)})).apply(this,arguments)}function h(l){throw new Z.Z("",`Request for object resource failed: ${l}`)}function ie(l){const c=l.params,I=c.topology;let b=!0;switch(c.vertexAttributes||(W.warn("Geometry must specify vertex attributes"),b=!1),c.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const F=c.faces;if(F){if(c.vertexAttributes)for(const N in c.vertexAttributes){const w=F[N];w&&w.values?(null!=w.valueType&&"UInt32"!==w.valueType&&(W.warn(`Unsupported indexed geometry indices type '${w.valueType}', only UInt32 is currently supported`),b=!1),null!=w.valuesPerElement&&1!==w.valuesPerElement&&(W.warn(`Unsupported indexed geometry values per element '${w.valuesPerElement}', only 1 is currently supported`),b=!1)):(W.warn(`Indexed geometry does not specify face indices for '${N}' attribute`),b=!1)}}else W.warn("Indexed geometries must specify faces"),b=!1;break}default:W.warn(`Unsupported topology '${I}'`),b=!1}l.params.material||(W.warn("Geometry requires material"),b=!1);const z=l.params.vertexAttributes;for(const F in z)z[F].values||(W.warn("Geometries with externally defined attributes are not yet supported"),b=!1);return b}function se(l,c){const I=new Array,b=new Array,z=new Array,F=new G.r,N=l.resource,w=x.G.parse(N.version||"1.0","wosr");Re.validate(w);const R=N.model.name,te=N.model.geometries,Q=N.materialDefinitions??{},ae=l.textures;let de=0;const q=new Map;for(let re=0;re<te.length;re++){const ce=te[re];if(!ie(ce))continue;const Ce=Ae(ce),Oe=ce.params.vertexAttributes,Le=[];for(const ue in Oe){const Pe=Oe[ue];Le.push([ue,new ee.a(Pe.values,Pe.valuesPerElement,!0)])}const De=[];if("PerAttributeArray"!==ce.params.topology){const ue=ce.params.faces;for(const Pe in ue)De.push([Pe,ue[Pe].values])}const Te=Ce.texture,ge=ae&&ae[Te];if(ge&&!q.has(Te)){const{image:ue,params:Pe}=ge,be=new pe.x(ue,Pe);b.push(be),q.set(Te,be)}const we=q.get(Te),Ie=we?we.id:void 0,Ee=Ce.material;let Se=F.get(Ee,Te);if((0,s.Wi)(Se)){const ue=Q[Ee.substring(Ee.lastIndexOf("/")+1)].params;1===ue.transparency&&(ue.transparency=0);const Pe=ge&&ge.alphaChannelUsage,be=ue.transparency>0||"transparency"===Pe||"maskAndTransparency"===Pe,Qe=ge?_e(ge.alphaChannelUsage):void 0,Ke={ambient:(0,_.d)(ue.diffuse),diffuse:(0,_.d)(ue.diffuse),opacity:1-(ue.transparency||0),transparent:be,textureAlphaMode:Qe,textureAlphaCutoff:.33,textureId:Ie,initTextureTransparent:!0,doubleSided:!0,cullFace:$.Vr.None,colorMixMode:ue.externalColorMixMode||"tint",textureAlphaPremultiplied:!!ge&&!!ge.params.preMultiplyAlpha};(0,s.pC)(c)&&c.materialParamsMixin&&Object.assign(Ke,c.materialParamsMixin),Se=new H.Gp(Ke),F.set(Ee,Te,Se)}z.push(Se);const Ye=new fe.Z(Se,Le,De);de+=De.position?De.position.length:0,I.push(Ye)}return{engineResources:[{name:R,stageResources:{textures:b,materials:z,geometries:I},pivotOffset:N.model.pivotOffset,numberOfVertices:de,lodThreshold:null}],referenceBoundingBox:me(I)}}function me(l){const c=(0,i.cS)();return l.forEach(I=>{const b=I.boundingInfo;(0,s.pC)(b)&&((0,i.pp)(c,b.bbMin),(0,i.pp)(c,b.bbMax))}),c}function Y(l,c){return xe.apply(this,arguments)}function xe(){return(xe=(0,y.Z)(function*(l,c){const I=[];for(const F in l){const N=l[F],w=N.images[0].data;if(!w){W.warn("Externally referenced texture data is not yet supported");continue}const R=N.encoding+";base64,"+w,te="/textureDefinitions/"+F,Q="rgba"===N.channels?N.alphaChannelUsage||"transparency":"none",ae={noUnpackFlip:!0,wrap:{s:C.e8.REPEAT,t:C.e8.REPEAT},preMultiplyAlpha:_e(Q)!==$.JJ.Opaque},de=(0,s.pC)(c)&&c.disableTextures?Promise.resolve(null):(0,X.t)(R,c);I.push(de.then(q=>({refId:te,image:q,params:ae,alphaChannelUsage:Q})))}const b=yield Promise.all(I),z={};for(const F of b)z[F.refId]=F;return z})).apply(this,arguments)}function _e(l){switch(l){case"mask":return $.JJ.Mask;case"maskAndTransparency":return $.JJ.MaskBlend;case"none":return $.JJ.Opaque;default:return $.JJ.Blend}}function Ae(l){const c=l.params;return{id:1,material:c.material,texture:c.texture,region:c.texture}}const Re=new x.G(1,2,"wosr");var Be=t(26859),Me=t(16396),ye=t(79331),Ve=t(35995),je=t(63470),Fe=t(9554);function ze(l,c){return We.apply(this,arguments)}function We(){return(We=(0,y.Z)(function*(l,c){const I=He((0,v.pJ)(l));if("wosr"===I.fileType){const ae=yield c.cache?c.cache.loadWOSR(I.url,c):ve(I.url,c),{engineResources:de,referenceBoundingBox:q}=se(ae,c);return{lods:de,referenceBoundingBox:q,isEsriSymbolResource:!1,isWosr:!0}}const b=yield c.cache?c.cache.loadGLTF(I.url,c,!!c.usePBR):(0,d.Q)(new P.C(c.streamDataRequester),I.url,c,c.usePBR),z=(0,s.U2)(b.model.meta,"ESRI_proxyEllipsoid"),F=b.meta.isEsriSymbolResource&&(0,s.pC)(z)&&b.meta.uri.includes("/RealisticTrees/");F&&!b.customMeta.esriTreeRendering&&(b.customMeta.esriTreeRendering=!0,Xe(b,z));const N=!!c.usePBR,w=b.meta.isEsriSymbolResource?{usePBR:N,isSchematic:!1,treeRendering:F,mrrFactors:[0,1,.2]}:{usePBR:N,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},R={...c.materialParamsMixin,treeRendering:F},{engineResources:te,referenceBoundingBox:Q}=Ne(b,w,R,c.skipHighLods&&null==I.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:I.specifiedLodIndex});return{lods:te,referenceBoundingBox:Q,isEsriSymbolResource:b.meta.isEsriSymbolResource,isWosr:!1}})).apply(this,arguments)}function He(l){const c=l.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return c?{fileType:"gltf",url:c[1],specifiedLodIndex:null!=c[4]?Number(c[4]):null}:l.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:l,specifiedLodIndex:null}:{fileType:"unknown",url:l,specifiedLodIndex:null}}function Ne(l,c,I,b){const z=l.model,F=new Array,N=new Map,w=new Map,R=z.lods.length,te=(0,i.cS)();return z.lods.forEach((Q,ae)=>{const de=!0===b.skipHighLods&&(R>1&&0===ae||R>3&&1===ae)||!1===b.skipHighLods&&null!=b.singleLodIndex&&ae!==b.singleLodIndex;if(de&&0!==ae)return;const q=new S(Q.name,Q.lodThreshold,[0,0,0]);Q.parts.forEach(re=>{const ce=de?new H.Gp({}):function Ge(l,c,I,b,z,F,N){const w=c.material+(c.attributes.normal?"_normal":"")+(c.attributes.color?"_color":"")+(c.attributes.texCoord0?"_texCoord0":"")+(c.attributes.tangent?"_tangent":""),R=l.materials.get(c.material),te=(0,s.pC)(c.attributes.texCoord0),Q=(0,s.pC)(c.attributes.normal);if((0,s.Wi)(R))return null;const ae=function Je(l){switch(l){case"BLEND":return $.JJ.Blend;case"MASK":return $.JJ.Mask;case"OPAQUE":case null:case void 0:return $.JJ.Opaque}}(R.alphaMode);if(!F.has(w)){if(te){const Te=(ge,we=!1)=>{if((0,s.pC)(ge)&&!N.has(ge)){const Ie=l.textures.get(ge);if((0,s.pC)(Ie)){const Ee=Ie.data;N.set(ge,new pe.x((0,K.$A)(Ee)?Ee.data:Ee,{...Ie.parameters,preMultiplyAlpha:!(0,K.$A)(Ee)&&we,encoding:(0,K.$A)(Ee)&&(0,s.pC)(Ee.encoding)?Ee.encoding:void 0}))}}};Te(R.textureColor,ae!==$.JJ.Opaque),Te(R.textureNormal),Te(R.textureOcclusion),Te(R.textureEmissive),Te(R.textureMetallicRoughness)}const q=R.color[0]**(1/ye.K),re=R.color[1]**(1/ye.K),ce=R.color[2]**(1/ye.K),Ce=R.emissiveFactor[0]**(1/ye.K),Oe=R.emissiveFactor[1]**(1/ye.K),Le=R.emissiveFactor[2]**(1/ye.K),De=(0,s.pC)(R.textureColor)&&te?N.get(R.textureColor):null;F.set(w,new H.Gp({...b,transparent:ae===$.JJ.Blend,customDepthTest:$.Gv.Lequal,textureAlphaMode:ae,textureAlphaCutoff:R.alphaCutoff,diffuse:[q,re,ce],ambient:[q,re,ce],opacity:R.opacity,doubleSided:R.doubleSided,doubleSidedType:"winding-order",cullFace:R.doubleSided?$.Vr.None:$.Vr.Back,hasVertexColors:!!c.attributes.color,hasVertexTangents:!!c.attributes.tangent,normalType:Q?Be.h.Attribute:Be.h.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:(0,s.pC)(De)?De.id:void 0,colorMixMode:R.colorMixMode,normalTextureId:(0,s.pC)(R.textureNormal)&&te?N.get(R.textureNormal).id:void 0,textureAlphaPremultiplied:(0,s.pC)(De)&&!!De.params.preMultiplyAlpha,occlusionTextureId:(0,s.pC)(R.textureOcclusion)&&te?N.get(R.textureOcclusion).id:void 0,emissiveTextureId:(0,s.pC)(R.textureEmissive)&&te?N.get(R.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,s.pC)(R.textureMetallicRoughness)&&te?N.get(R.textureMetallicRoughness).id:void 0,emissiveFactor:[Ce,Oe,Le],mrrFactors:[R.metallicFactor,R.roughnessFactor,b.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:(0,U.i)(R.colorTextureTransform),normalTextureTransformMatrix:(0,U.i)(R.normalTextureTransform),occlusionTextureTransformMatrix:(0,U.i)(R.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,U.i)(R.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,U.i)(R.metallicRoughnessTextureTransform),...z}))}const de=F.get(w);if(I.stageResources.materials.push(de),te){const q=re=>{(0,s.pC)(re)&&I.stageResources.textures.push(N.get(re))};q(R.textureColor),q(R.textureNormal),q(R.textureOcclusion),q(R.textureEmissive),q(R.textureMetallicRoughness)}return de}(z,re,q,c,I,N,w),{geometry:Ce,vertexCount:Oe}=function $e(l,c){const I=l.attributes.position.count,b=function Ze(l,c){switch(c){case C.MX.TRIANGLES:return(0,D.nh)(l);case C.MX.TRIANGLE_STRIP:return(0,D.DA)(l);case C.MX.TRIANGLE_FAN:return(0,D.jX)(l)}}(l.indices||I,l.primitiveType),z=(0,A.gS)(f.ct,I);(0,m.t)(z,l.attributes.position,l.transform);const F=[[Me.T.POSITION,new ee.a(z.typedBuffer,z.elementCount,!0)]],N=[[Me.T.POSITION,b]];if((0,s.pC)(l.attributes.normal)){const w=(0,A.gS)(f.ct,I);(0,p.b)(Ue,l.transform),(0,m.a)(w,l.attributes.normal,Ue),F.push([Me.T.NORMAL,new ee.a(w.typedBuffer,w.elementCount,!0)]),N.push([Me.T.NORMAL,b])}if((0,s.pC)(l.attributes.tangent)){const w=(0,A.gS)(f.ek,I);(0,p.b)(Ue,l.transform),(0,T.t)(w,l.attributes.tangent,Ue),F.push([Me.T.TANGENT,new ee.a(w.typedBuffer,w.elementCount,!0)]),N.push([Me.T.TANGENT,b])}if((0,s.pC)(l.attributes.texCoord0)){const w=(0,A.gS)(f.Eu,I);(0,Ve.n)(w,l.attributes.texCoord0),F.push([Me.T.UV0,new ee.a(w.typedBuffer,w.elementCount,!0)]),N.push([Me.T.UV0,b])}if((0,s.pC)(l.attributes.color)){const w=(0,A.gS)(f.mc,I);if(4===l.attributes.color.elementCount)l.attributes.color instanceof f.ek?(0,T.s)(w,l.attributes.color,255):l.attributes.color instanceof f.mc?(0,je.c)(w,l.attributes.color):l.attributes.color instanceof f.v6&&(0,T.s)(w,l.attributes.color,1/256);else{(0,je.f)(w,255,255,255,255);const R=new f.ne(w.buffer,0,4);l.attributes.color instanceof f.ct?(0,m.s)(R,l.attributes.color,255):l.attributes.color instanceof f.ne?(0,Fe.c)(R,l.attributes.color):l.attributes.color instanceof f.mw&&(0,m.s)(R,l.attributes.color,1/256)}F.push([Me.T.COLOR,new ee.a(w.typedBuffer,w.elementCount,!0)]),N.push([Me.T.COLOR,b])}return{geometry:new fe.Z(c,F,N),vertexCount:I}}(re,(0,s.pC)(ce)?ce:new H.Gp({})),Le=Ce.boundingInfo;(0,s.pC)(Le)&&0===ae&&((0,i.pp)(te,Le.bbMin),(0,i.pp)(te,Le.bbMax)),(0,s.pC)(ce)&&(q.stageResources.geometries.push(Ce),q.numberOfVertices+=Oe)}),de||F.push(q)}),{engineResources:F,referenceBoundingBox:te}}const Ue=(0,L.c)();function Xe(l,c){for(let I=0;I<l.model.lods.length;++I){const b=l.model.lods[I];for(const z of b.parts){const F=z.attributes.normal;if((0,s.Wi)(F))return;const N=z.attributes.position,w=N.count,R=(0,_.c)(),te=(0,_.c)(),Q=(0,_.c)(),ae=(0,A.gS)(f.mc,w),de=(0,A.gS)(f.ct,w),q=(0,M.a)((0,O.c)(),z.transform);for(let re=0;re<w;re++){N.getVec(re,te),F.getVec(re,R),(0,n.m)(te,te,z.transform),(0,n.b)(Q,te,c.center),(0,n.C)(Q,Q,c.radius);const ce=Q[2],Ce=(0,n.l)(Q),Oe=Math.min(.45+.55*Ce*Ce,1);(0,n.C)(Q,Q,c.radius),null!==q&&(0,n.m)(Q,Q,q),(0,n.n)(Q,Q),I+1!==l.model.lods.length&&l.model.lods.length>1&&(0,n.h)(Q,Q,R,ce>-1?.2:Math.min(-4*ce-3.8,1)),de.setVec(re,Q),ae.set(re,0,255*Oe),ae.set(re,1,255*Oe),ae.set(re,2,255*Oe),ae.set(re,3,255)}z.attributes.normal=de,z.attributes.color=ae}}}},9044:(ne,j,t)=>{t.d(j,{F5:()=>p,HB:()=>L,a9:()=>s});var s,i,y=t(21286),v=t(62208);function p(i){switch(i){case"multiply":default:return s.Multiply;case"ignore":return s.Ignore;case"replace":return s.Replace;case"tint":return s.Tint}}function L(i,f,m){if((0,v.Wi)(i)||f===s.Ignore)return m[0]=255,m[1]=255,m[2]=255,void(m[3]=255);const T=(0,y.uZ)(Math.round(i[3]*O),0,O),A=0===T||f===s.Tint?0:f===s.Replace?n:_;m[0]=(0,y.uZ)(Math.round(i[0]*M),0,M),m[1]=(0,y.uZ)(Math.round(i[1]*M),0,M),m[2]=(0,y.uZ)(Math.round(i[2]*M),0,M),m[3]=T+A}(i=s||(s={}))[i.Multiply=1]="Multiply",i[i.Ignore=2]="Ignore",i[i.Replace=3]="Replace",i[i.Tint=4]="Tint";const M=255,O=85,n=O,_=2*O},73132:(ne,j,t)=>{t.d(j,{w:()=>v});var y=t(17625);function v(s){s.vertex.code.add(y.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},60355:(ne,j,t)=>{t.d(j,{f:()=>T});var y=t(17626),v=t(84161),s=t(28093),p=t(13934),L=t(7228),M=t(99198),O=t(77739),n=t(17625),_=t(87601),i=t(16396),f=t(2757);function T(P,d){d.instanced&&d.instancedDoublePrecision&&(P.attributes.add(i.T.MODELORIGINHI,"vec3"),P.attributes.add(i.T.MODELORIGINLO,"vec3"),P.attributes.add(i.T.MODEL,"mat3"),P.attributes.add(i.T.MODELNORMAL,"mat3"));const D=P.vertex;d.instancedDoublePrecision&&(D.include(L.$,d),D.uniforms.add(new O.B("viewOriginHi",(K,U)=>(0,f.U8)((0,v.s)(A,U.camera.viewInverseTransposeMatrix[3],U.camera.viewInverseTransposeMatrix[7],U.camera.viewInverseTransposeMatrix[11]),A))),D.uniforms.add(new O.B("viewOriginLo",(K,U)=>(0,f.GB)((0,v.s)(A,U.camera.viewInverseTransposeMatrix[3],U.camera.viewInverseTransposeMatrix[7],U.camera.viewInverseTransposeMatrix[11]),A)))),D.code.add(n.H`
    vec3 calculateVPos() {
      ${d.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),D.code.add(n.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${d.instancedDoublePrecision?n.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),D.code.add(n.H`
    vec3 dpNormal(vec4 _normal) {
      ${d.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),d.output===p.H.Normal&&((0,M._8)(D),D.code.add(n.H`
    vec3 dpNormalView(vec4 _normal) {
      ${d.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),d.hasVertexTangents&&D.code.add(n.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${d.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,y._)([(0,_.o)()],class m extends _.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}.prototype,"instancedDoublePrecision",void 0);const A=(0,s.c)()},72326:(ne,j,t)=>{t.d(j,{R:()=>O});var y=t(9044),v=t(17625);function s(n){n.vertex.code.add(v.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${v.H.int(y.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${v.H.int(y.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${v.H.int(y.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${v.H.int(y.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var p=t(18952),L=t(16396),M=t(57623);function O(n,_){_.hasSymbolColors?(n.include(s),n.attributes.add(L.T.SYMBOLCOLOR,"vec4"),n.varyings.add("colorMixMode","mediump float"),n.vertex.code.add(v.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(n.fragment.uniforms.add(new p._("colorMixMode",i=>M.FZ[i.colorMixMode])),n.vertex.code.add(v.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},58208:(ne,j,t)=>{t.d(j,{s:()=>E});var y=t(62208),v=t(43703),s=t(52382),p=t(13934),L=t(78925),M=t(24255),O=t(26859),n=t(23164),_=t(36603),i=t(21799),f=t(54120),m=t(62952),T=t(92836),A=t(72397),P=t(99198),d=t(17625),D=t(63123),K=t(35387),U=t(42743);function E(S,B){const{vertex:g,fragment:J}=S,Z=B.hasModelTransformation;Z&&g.uniforms.add(new D.g("model",G=>(0,y.pC)(G.modelTransformation)?G.modelTransformation:v.I));const u=B.hasColorTexture&&B.alphaDiscardMode!==U.JJ.Opaque;switch(B.output){case p.H.Depth:case p.H.Shadow:case p.H.ShadowHighlight:case p.H.ShadowExcludeHighlight:case p.H.ObjectAndLayerIdColor:(0,P.Sv)(g,B),S.include(M.w,B),S.include(_.D,B),S.include(T.k,B),S.include(f.F,B),S.include(L.f5,B),S.include(n.R,B),(0,s.Zu)(S),S.varyings.add("depth","float"),u&&J.uniforms.add(new K.A("tex",G=>G.texture)),g.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${Z?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),S.include(A.z,B),J.code.add(d.H`
          void main(void) {
            discardBySlice(vpos);
            ${u?d.H`
                    vec4 texColor = texture2D(tex, ${B.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${B.output===p.H.ObjectAndLayerIdColor?d.H`outputObjectAndLayerIdColor();`:d.H`outputDepth(depth);`}
          }
        `);break;case p.H.Normal:(0,P.Sv)(g,B),S.include(M.w,B),S.include(O.O,B),S.include(i.Bb,B),S.include(_.D,B),S.include(T.k,B),u&&J.uniforms.add(new K.A("tex",G=>G.texture)),S.varyings.add("vPositionView","vec3"),g.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${B.normalType===O.h.Attribute?d.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${Z?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),S.include(L.f5,B),S.include(A.z,B),J.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${u?d.H`
                    vec4 texColor = texture2D(tex, ${B.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${B.normalType===O.h.ScreenDerivative?d.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case p.H.Highlight:(0,P.Sv)(g,B),S.include(M.w,B),S.include(_.D,B),S.include(T.k,B),u&&J.uniforms.add(new K.A("tex",G=>G.texture)),g.code.add(d.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${Z?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),S.include(L.f5,B),S.include(A.z,B),S.include(m.bA,B),J.code.add(d.H`
          void main() {
            discardBySlice(vpos);
            ${u?d.H`
                    vec4 texColor = texture2D(tex, ${B.hasColorTextureTransform?d.H`colorUV`:d.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},29052:(ne,j,t)=>{t.d(j,{Q:()=>f});var y=t(36603),v=t(85982),s=t(96395),p=t(43177),L=t(17625),M=t(5864),O=t(35387),n=t(19755),_=t(37847),i=t(16396);function f(m,T){const A=m.fragment;if(T.hasVertexTangents?(m.attributes.add(i.T.TANGENT,"vec4"),m.varyings.add("vTangent","vec4"),A.code.add(T.doubleSidedMode===s.q.WindingOrder?L.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:L.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(m.extensions.add("GL_OES_standard_derivatives"),A.code.add(L.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),T.textureCoordinateType!==y.N.None){m.include(v.i,T);const P=T.supportsTextureAtlas?T.hasWebGL2Context?n.D.None:n.D.Size:n.D.None;A.uniforms.add(T.pbrTextureBindType===_.P.Pass?(0,O.J)("normalTexture",d=>d.textureNormal,P):(0,M.F)("normalTexture",d=>d.textureNormal,P)),A.code.add(L.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${T.supportsTextureAtlas?L.H`vtc.size = ${(0,p.w_)(T,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},54662:(ne,j,t)=>{t.d(j,{K:()=>M});var y=t(43177),v=t(17625),s=t(35387),p=t(19755),L=t(35671);function M(O,n){const _=O.fragment;n.receiveAmbientOcclusion?(_.uniforms.add((0,s.J)("ssaoTex",(i,f)=>f.ssaoHelper.colorTexture,n.hasWebGL2Context?p.D.None:p.D.InvSize)),_.constants.add("blurSizePixelsInverse","float",1/L.s),_.code.add(v.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,y.w_)(n,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):_.code.add(v.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},13146:(ne,j,t)=>{t.d(j,{PN:()=>m,XP:()=>A,sC:()=>T});var y=t(94573),v=t(44965),s=t(54662),p=t(31166),L=t(98898),M=t(92724),O=t(39337),n=t(78038),_=t(65787),i=t(17625),f=t(95279);function m(P){P.constants.add("ambientBoostFactor","float",f.V)}function T(P){P.uniforms.add(new _.p("lightingGlobalFactor",(d,D)=>D.lighting.globalFactor))}function A(P,d){const D=P.fragment;switch(P.include(s.K,d),d.pbrMode!==M.f7.Disabled&&P.include(L.T,d),P.include(v._,d),P.include(O.e),D.code.add(i.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${d.pbrMode===M.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),m(D),T(D),(0,p.Pe)(D),D.code.add(i.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${d.spherical?i.H`normalize(vPosWorld)`:i.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,p.F1)(D),D.code.add(i.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),d.pbrMode){case M.f7.Disabled:case M.f7.WaterOnIntegratedMesh:case M.f7.Water:P.include(p.kR,d),D.code.add(i.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case M.f7.Normal:case M.f7.Schematic:D.code.add(i.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),D.code.add(i.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),d.useFillLights?D.uniforms.add(new n.U("hasFillLights",(K,U)=>U.enableFillLights)):D.constants.add("hasFillLights","bool",!1),D.code.add(i.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),D.uniforms.add([new _.p("lightingSpecularStrength",(K,U)=>U.lighting.mainLight.specularStrength),new _.p("lightingEnvironmentStrength",(K,U)=>U.lighting.mainLight.environmentStrength)]),D.code.add(i.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),D.code.add(i.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${d.pbrMode===M.f7.Schematic?i.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case M.f7.Terrain:case M.f7.TerrainWithWater:P.include(p.kR,d),D.code.add(i.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,y.Bg)(d.pbrMode);case M.f7.COUNT:}}},96395:(ne,j,t)=>{t.d(j,{k:()=>s,q:()=>p});var p,L,y=t(94573),v=t(17625);function s(L,M){const O=L.fragment;switch(O.code.add(v.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),M.doubleSidedMode){case p.None:O.code.add(v.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case p.View:O.code.add(v.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case p.WindingOrder:O.code.add(v.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,y.Bg)(M.doubleSidedMode);case p.COUNT:}}(L=p||(p={}))[L.None=0]="None",L[L.View=1]="View",L[L.WindingOrder=2]="WindingOrder",L[L.COUNT=3]="COUNT"},70489:(ne,j,t)=>{t.d(j,{DT:()=>_,NI:()=>M,R5:()=>O,av:()=>L,jF:()=>n});var y=t(62208),v=t(49966),s=t(17625),p=t(91574);function L(i){i.vertex.uniforms.add(new p.c("colorTextureTransformMatrix",f=>(0,y.pC)(f.colorTextureTransformMatrix)?f.colorTextureTransformMatrix:(0,v.c)())),i.varyings.add("colorUV","vec2"),i.vertex.code.add(s.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function M(i){i.vertex.uniforms.add(new p.c("normalTextureTransformMatrix",f=>(0,y.pC)(f.normalTextureTransformMatrix)?f.normalTextureTransformMatrix:(0,v.c)())),i.varyings.add("normalUV","vec2"),i.vertex.code.add(s.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function O(i){i.vertex.uniforms.add(new p.c("emissiveTextureTransformMatrix",f=>(0,y.pC)(f.emissiveTextureTransformMatrix)?f.emissiveTextureTransformMatrix:(0,v.c)())),i.varyings.add("emissiveUV","vec2"),i.vertex.code.add(s.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function n(i){i.vertex.uniforms.add(new p.c("occlusionTextureTransformMatrix",f=>(0,y.pC)(f.occlusionTextureTransformMatrix)?f.occlusionTextureTransformMatrix:(0,v.c)())),i.varyings.add("occlusionUV","vec2"),i.vertex.code.add(s.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function _(i){i.vertex.uniforms.add(new p.c("metallicRoughnessTextureTransformMatrix",f=>(0,y.pC)(f.metallicRoughnessTextureTransformMatrix)?f.metallicRoughnessTextureTransformMatrix:(0,v.c)())),i.varyings.add("metallicRoughnessUV","vec2"),i.vertex.code.add(s.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},72397:(ne,j,t)=>{t.d(j,{z:()=>_});var y=t(67022),v=t(17625);function s(m){m.fragment.code.add(v.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${v.H.float(y.b)}) { discard; } }
  `)}t(85930),t(37847);var O=t(65787),n=t(42743);function _(m,T){!function f(m,T,A){const P=m.fragment;switch(T.alphaDiscardMode!==n.JJ.Mask&&T.alphaDiscardMode!==n.JJ.MaskBlend||P.uniforms.add(A),T.alphaDiscardMode){case n.JJ.Blend:return m.include(s);case n.JJ.Opaque:P.code.add(v.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case n.JJ.Mask:P.code.add(v.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case n.JJ.MaskBlend:m.fragment.code.add(v.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(m,T,new O.p("textureAlphaCutoff",A=>A.textureAlphaCutoff))}},28137:(ne,j,t)=>{t.d(j,{y:()=>p});var y=t(9044),v=t(33726),s=t(17625);function p(L){L.include(v.Y),L.code.add(s.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.H.int(y.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.H.int(y.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.H.int(y.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.H.int(y.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.H.int(y.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},28523:(ne,j,t)=>{t.d(j,{Gp:()=>X});var y=t(8314),v=t(62208),s=t(84161),p=t(28093),L=t(59617),M=t(19625),O=t(13934),n=t(96395),_=t(92724),i=t(42743),f=t(33470),m=t(40723),T=t(88569),A=t(5894),P=t(16396),d=t(40841),D=t(2770),K=t(57623),U=t(39711),E=t(17626),S=t(26859),B=t(36603),g=t(87601),J=t(44835),Z=t(41528);class u extends Z.W{constructor(){super(...arguments),this.output=O.H.Color,this.alphaDiscardMode=i.JJ.Opaque,this.doubleSidedMode=n.q.None,this.pbrMode=_.f7.Disabled,this.cullFace=i.Vr.None,this.transparencyPassType=J.A.NONE,this.normalType=S.h.Attribute,this.textureCoordinateType=B.N.None,this.customDepthTest=i.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,E._)([(0,g.o)({count:O.H.COUNT})],u.prototype,"output",void 0),(0,E._)([(0,g.o)({count:i.JJ.COUNT})],u.prototype,"alphaDiscardMode",void 0),(0,E._)([(0,g.o)({count:n.q.COUNT})],u.prototype,"doubleSidedMode",void 0),(0,E._)([(0,g.o)({count:_.f7.COUNT})],u.prototype,"pbrMode",void 0),(0,E._)([(0,g.o)({count:i.Vr.COUNT})],u.prototype,"cullFace",void 0),(0,E._)([(0,g.o)({count:J.A.COUNT})],u.prototype,"transparencyPassType",void 0),(0,E._)([(0,g.o)({count:S.h.COUNT})],u.prototype,"normalType",void 0),(0,E._)([(0,g.o)({count:B.N.COUNT})],u.prototype,"textureCoordinateType",void 0),(0,E._)([(0,g.o)({count:i.Gv.COUNT})],u.prototype,"customDepthTest",void 0),(0,E._)([(0,g.o)()],u.prototype,"spherical",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasVertexColors",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasSymbolColors",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasVerticalOffset",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasSlicePlane",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasSliceHighlight",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasColorTexture",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasMetallicRoughnessTexture",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasEmissionTexture",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasOcclusionTexture",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasNormalTexture",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasScreenSizePerspective",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasVertexTangents",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasOccludees",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasMultipassTerrain",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasModelTransformation",void 0),(0,E._)([(0,g.o)()],u.prototype,"offsetBackfaces",void 0),(0,E._)([(0,g.o)()],u.prototype,"vvSize",void 0),(0,E._)([(0,g.o)()],u.prototype,"vvColor",void 0),(0,E._)([(0,g.o)()],u.prototype,"receiveShadows",void 0),(0,E._)([(0,g.o)()],u.prototype,"receiveAmbientOcclusion",void 0),(0,E._)([(0,g.o)()],u.prototype,"textureAlphaPremultiplied",void 0),(0,E._)([(0,g.o)()],u.prototype,"instanced",void 0),(0,E._)([(0,g.o)()],u.prototype,"instancedColor",void 0),(0,E._)([(0,g.o)()],u.prototype,"objectAndLayerIdColorInstanced",void 0),(0,E._)([(0,g.o)()],u.prototype,"instancedDoublePrecision",void 0),(0,E._)([(0,g.o)()],u.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,E._)([(0,g.o)()],u.prototype,"writeDepth",void 0),(0,E._)([(0,g.o)()],u.prototype,"transparent",void 0),(0,E._)([(0,g.o)()],u.prototype,"enableOffset",void 0),(0,E._)([(0,g.o)()],u.prototype,"cullAboveGround",void 0),(0,E._)([(0,g.o)()],u.prototype,"snowCover",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasColorTextureTransform",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasEmissionTextureTransform",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasNormalTextureTransform",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasOcclusionTextureTransform",void 0),(0,E._)([(0,g.o)()],u.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,E._)([(0,g.o)({constValue:!0})],u.prototype,"hasVvInstancing",void 0),(0,E._)([(0,g.o)({constValue:!1})],u.prototype,"useCustomDTRExponentForWater",void 0),(0,E._)([(0,g.o)({constValue:!1})],u.prototype,"supportsTextureAtlas",void 0),(0,E._)([(0,g.o)({constValue:!0})],u.prototype,"useFillLights",void 0);var G=t(651),V=t(77133);class x extends U.tT{initializeConfiguration(a,h){super.initializeConfiguration(a,h),h.hasMetallicRoughnessTexture=!1,h.hasEmissionTexture=!1,h.hasOcclusionTexture=!1,h.hasNormalTexture=!1,h.hasModelTransformation=!1,h.normalType=S.h.Attribute,h.doubleSidedMode=n.q.WindingOrder,h.hasVertexTangents=!1}initializeProgram(a){return this._initializeProgram(a,x.shader)}}x.shader=new G.J(V.R,()=>t.e(3959).then(t.bind(t,93959)));class X extends m.F5{constructor(a){super(a,fe),this.supportsEdges=!0,this._configuration=new u,this._vertexBufferLayout=function pe(le){const a=(0,M.U$)().vec3f(P.T.POSITION).vec3f(P.T.NORMAL),h=le.textureId||le.normalTextureId||le.metallicRoughnessTextureId||le.emissiveTextureId||le.occlusionTextureId;return le.hasVertexTangents&&a.vec4f(P.T.TANGENT),h&&a.vec2f(P.T.UV0),le.hasVertexColors&&a.vec4u8(P.T.COLOR),le.hasSymbolColors&&a.vec4u8(P.T.SYMBOLCOLOR),(0,y.Z)("enable-feature:objectAndLayerId-rendering")&&a.vec4u8(P.T.OBJECTANDLAYERIDCOLOR),a}(this.parameters)}isVisibleForOutput(a){return a!==O.H.Shadow&&a!==O.H.ShadowExcludeHighlight&&a!==O.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const a=this.parameters;if(!super.isVisible()||0===a.layerOpacity)return!1;const{instanced:h,hasVertexColors:ie,hasSymbolColors:se,vvColorEnabled:me}=a,Y=(0,v.pC)(h)&&h.includes("color"),xe="replace"===a.colorMixMode,_e=a.opacity>0,Ae=a.externalColor&&a.externalColor[3]>0;return ie&&(Y||me||se)?!!xe||_e:ie?xe?Ae:_e:Y||me||se?!!xe||_e:xe?Ae:_e}getConfiguration(a,h){return this._configuration.output=a,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,v.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,v.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,v.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?i.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=h.multipassTerrain.enabled,this._configuration.cullAboveGround=h.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,v.pC)(this.parameters.modelTransformation),a!==O.H.Color&&a!==O.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this._configuration.doubleSidedMode=this.parameters.treeRendering?n.q.WindingOrder:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?n.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?n.q.WindingOrder:n.q.None,this._configuration.instancedColor=(0,v.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!h.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?_.f7.Schematic:_.f7.Normal:_.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=h.transparencyPassType,this._configuration.enableOffset=h.camera.relativeElevation<T.ve,this._configuration.snowCover=this.hasSnowCover(h),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(a){return(0,v.pC)(a.weather)&&a.weatherVisible&&"snowy"===a.weather.type&&"enabled"===a.weather.snowCover}intersect(a,h,ie,se,me,Y){if((0,v.pC)(this.parameters.verticalOffset)){const xe=ie.camera;(0,s.s)(he,h[12],h[13],h[14]);let _e=null;switch(ie.viewingMode){case L.JY.Global:_e=(0,s.n)(ve,he);break;case L.JY.Local:_e=(0,s.c)(ve,W)}let Ae=0;const Re=(0,s.b)(k,he,xe.eye),Be=(0,s.l)(Re),Me=(0,s.g)(Re,Re,1/Be);let ye=null;this.parameters.screenSizePerspective&&(ye=(0,s.e)(_e,Me)),Ae+=(0,K.Hx)(xe,Be,this.parameters.verticalOffset,ye??0,this.parameters.screenSizePerspective),(0,s.g)(_e,_e,Ae),(0,s.t)(oe,_e,ie.transform.inverseRotation),se=(0,s.b)(H,se,oe),me=(0,s.b)(C,me,oe)}(0,K.Bw)(a,ie,se,me,(0,d.W9)(ie.verticalOffset),Y)}requiresSlot(a,h){return!(h!==O.H.Color&&h!==O.H.Alpha&&h!==O.H.Depth&&h!==O.H.Normal&&h!==O.H.Shadow&&h!==O.H.ShadowHighlight&&h!==O.H.ShadowExcludeHighlight&&h!==O.H.Highlight&&h!==O.H.ObjectAndLayerIdColor||a!==(this.parameters.transparent?this.parameters.writeDepth?A.r.TRANSPARENT_MATERIAL:A.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:A.r.OPAQUE_MATERIAL)&&a!==A.r.DRAPED_MATERIAL)}createGLMaterial(a){return new ee(a)}createBufferWriter(){return new D.G(this._vertexBufferLayout)}}class ee extends f.F{constructor(a){super({...a,...a.material.parameters})}_updateShadowState(a){a.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:a.shadowMap.enabled})}_updateOccludeeState(a){a.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:a.hasOccludees})}beginSlot(a){this._output!==O.H.Color&&this._output!==O.H.Alpha||(this._updateShadowState(a),this._updateOccludeeState(a));const h=this._material.parameters;this.updateTexture(h.textureId);const ie=a.camera.viewInverseTransposeMatrix;return(0,s.s)(h.origin,ie[3],ie[7],ie[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h.treeRendering?x:U.tT,a)}}const fe=new class $ extends U.em{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},H=(0,p.c)(),C=(0,p.c)(),W=(0,p.f)(0,0,1),ve=(0,p.c)(),oe=(0,p.c)(),he=(0,p.c)(),k=(0,p.c)()},39711:(ne,j,t)=>{t.d(j,{Qm:()=>J,em:()=>g,tT:()=>Z});var y=t(550),v=t(28093),s=t(4794),p=t(59617),L=t(13934),M=t(26859),O=t(36603),n=t(21799),_=t(67022),i=t(651),f=t(91056),m=t(42743),T=t(39114),A=t(40723),P=t(88569),d=t(12407),D=t(64127),K=t(44835),U=t(96160),E=t(57596),S=t(67969),B=t(2078);class g extends n.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,v.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=m.Vr.Back,this.emissiveFactor=(0,v.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=M.h.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,v.f)(.2,.2,.2),this.diffuse=(0,v.f)(.8,.8,.8),this.externalColor=(0,s.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,v.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,y.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=m.Gv.Less,this.textureAlphaMode=m.JJ.Blend,this.textureAlphaCutoff=_.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=A.yD.Occlude}}class J extends n.Pf{constructor(){super(...arguments),this.origin=(0,v.c)(),this.slicePlaneLocalOrigin=this.origin}}class Z extends f.A{initializeConfiguration(V,x){x.hasWebGL2Context=V.rctx.type===E.zO.WEBGL2,x.spherical=V.viewingMode===p.JY.Global,x.doublePrecisionRequiresObfuscation=V.rctx.driverTest.doublePrecisionRequiresObfuscation.result,x.textureCoordinateType=x.hasColorTexture||x.hasMetallicRoughnessTexture||x.hasEmissionTexture||x.hasOcclusionTexture||x.hasNormalTexture?O.N.Default:O.N.None,x.objectAndLayerIdColorInstanced=x.instanced}initializeProgram(V){return this._initializeProgram(V,Z.shader)}_initializeProgram(V,x){return new d.$(V.rctx,x.get().build(this.configuration),T.i)}_convertDepthTestFunction(V){return V===m.Gv.Lequal?S.wb.LEQUAL:S.wb.LESS}_makePipeline(V,x){const X=this.configuration,ee=V===K.A.NONE,$=V===K.A.FrontFace;return(0,B.sm)({blending:X.output!==L.H.Color&&X.output!==L.H.Alpha||!X.transparent?null:ee?P.wu:(0,P.j7)(V),culling:(G=X,G.cullFace===m.Vr.None&&(G.hasSlicePlane||G.transparent||G.doubleSidedMode)?null:(0,B.zp)(X.cullFace)),depthTest:{func:(0,P.Bh)(V,this._convertDepthTestFunction(X.customDepthTest))},depthWrite:(ee||$)&&X.writeDepth?B.LZ:null,colorWrite:B.BK,stencilWrite:X.hasOccludees?D.s3:null,stencilTest:X.hasOccludees?x?D.eD:D.RY:null,polygonOffset:ee||$?null:(0,P.je)(X.enableOffset)});var G}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(V,x){return x?this._occludeePipelineState:super.getPipelineState(V,x)}}Z.shader=new i.J(U.D,()=>t.e(3907).then(t.bind(t,83907)))}}]);