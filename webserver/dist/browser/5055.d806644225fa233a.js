"use strict";(self.webpackChunkparcel_app=self.webpackChunkparcel_app||[]).push([[5055],{10992:(on,Y,M)=>{M.d(Y,{AR:()=>k,Gr:()=>V,JG:()=>G,Jk:()=>I,KU:()=>$,Ue:()=>W,al:()=>N,ct:()=>F,nF:()=>Z,zk:()=>H});var L=M(21286),h=M(97535),s=M(84161),A=M(28093),T=M(26242);function W(i){return i?{origin:(0,A.a)(i.origin),vector:(0,A.a)(i.vector)}:{origin:(0,A.c)(),vector:(0,A.c)()}}function G(i,a=W()){return N(i.origin,i.vector,a)}function N(i,a,l=W()){return(0,s.c)(l.origin,i),(0,s.c)(l.vector,a),l}function H(i,a,l=W()){return(0,s.c)(l.origin,i),(0,s.b)(l.vector,a,i),l}function I(i,a){const l=(0,s.b)(T.WM.get(),a,i.origin),C=(0,s.e)(i.vector,l),D=(0,s.e)(i.vector,i.vector),v=(0,L.uZ)(C/D,0,1),B=(0,s.b)(T.WM.get(),(0,s.g)(T.WM.get(),i.vector,v),l);return(0,s.e)(B,B)}function Z(i,a,l){return F(i,a,0,1,l)}function $(i,a,l){return(0,s.a)(l,i.origin,(0,s.g)(l,i.vector,a))}function F(i,a,l,C,D){const{vector:v,origin:B}=i,E=(0,s.b)(T.WM.get(),a,B),d=(0,s.e)(v,E)/(0,s.p)(v);return(0,s.g)(D,v,(0,L.uZ)(d,l,C)),(0,s.a)(D,D,i.origin)}function V(i,a){if(u(i,function z(i,a){const l=S.get();return l.origin=i,l.vector=a,l}(a.origin,a.direction),!1,y)){const{tA:l,pB:C,distance2:D}=y;if(l>=0&&l<=1)return D;if(l<0)return(0,s.d)(i.origin,C);if(l>1)return(0,s.d)((0,s.a)(T.WM.get(),i.origin,i.vector),C)}return null}function k(i,a,l){return!!u(i,a,!0,y)&&((0,s.c)(l,y.pA),!0)}function u(i,a,l,C){const v=i.origin,B=(0,s.a)(T.WM.get(),v,i.vector),E=a.origin,d=(0,s.a)(T.WM.get(),E,a.vector),P=T.WM.get(),_=T.WM.get();if(P[0]=v[0]-E[0],P[1]=v[1]-E[1],P[2]=v[2]-E[2],_[0]=d[0]-E[0],_[1]=d[1]-E[1],_[2]=d[2]-E[2],Math.abs(_[0])<1e-6&&Math.abs(_[1])<1e-6&&Math.abs(_[2])<1e-6)return!1;const O=T.WM.get();if(O[0]=B[0]-v[0],O[1]=B[1]-v[1],O[2]=B[2]-v[2],Math.abs(O[0])<1e-6&&Math.abs(O[1])<1e-6&&Math.abs(O[2])<1e-6)return!1;const J=P[0]*_[0]+P[1]*_[1]+P[2]*_[2],w=_[0]*O[0]+_[1]*O[1]+_[2]*O[2],X=P[0]*O[0]+P[1]*O[1]+P[2]*O[2],b=_[0]*_[0]+_[1]*_[1]+_[2]*_[2],Q=(O[0]*O[0]+O[1]*O[1]+O[2]*O[2])*b-w*w;if(Math.abs(Q)<1e-6)return!1;let x=(J*w-X*b)/Q,U=(J+w*x)/b;l&&(x=(0,L.uZ)(x,0,1),U=(0,L.uZ)(U,0,1));const j=T.WM.get(),K=T.WM.get();return j[0]=v[0]+x*O[0],j[1]=v[1]+x*O[1],j[2]=v[2]+x*O[2],K[0]=E[0]+U*_[0],K[1]=E[1]+U*_[1],K[2]=E[2]+U*_[2],C.tA=x,C.tB=U,C.pA=j,C.pB=K,C.distance2=(0,s.d)(j,K),!0}const y={tA:0,tB:0,pA:(0,A.c)(),pB:(0,A.c)(),distance2:0},S=new h.x(()=>W())},11544:(on,Y,M)=>{M.d(Y,{bE:()=>$,wu:()=>R});var L=M(97535),h=M(84161),s=M(28093),A=M(10992);function R(u,y,S){return.5*Math.abs((y[0]-u[0])*(S[1]-u[1])-(y[1]-u[1])*(S[0]-u[0]))}function $(u,y,S){return(0,h.b)(k,y,u),(0,h.b)(q,S,u),(0,h.l)((0,h.f)(k,k,q))/2}M(26242),new L.x(A.Ue),new L.x(()=>function W(u){return u?{p0:(0,s.a)(u.p0),p1:(0,s.a)(u.p1),p2:(0,s.a)(u.p2)}:{p0:(0,s.c)(),p1:(0,s.c)(),p2:(0,s.c)()}}());const k=(0,s.c)(),q=(0,s.c)()},7547:(on,Y,M)=>{var L,h,s,A,T,W,z,G,N,H,I,R,Z,$,F,V,k,q,u,y,S,i,a,l,C,D,v,B,E,d,P,_,O,J,w,X,b,Q,x,U,j,K,en,rn,nn,tn,an,ln,dn,pn,fn,_n,gn,mn,Mn,sn,cn,hn,un,Cn,Pn,t;M.d(Y,{$y:()=>i,AH:()=>h,CS:()=>an,DD:()=>G,Dd:()=>E,Em:()=>S,JS:()=>nn,Ky:()=>N,Lh:()=>ln,Qb:()=>cn,RL:()=>L,RS:()=>un,TF:()=>y,Tx:()=>T,UR:()=>k,UX:()=>sn,bj:()=>tn,eZ:()=>z,id:()=>C,kP:()=>X,of:()=>I,r4:()=>U,sj:()=>b,v2:()=>s,zQ:()=>B,zV:()=>V}),(t=L||(L={}))[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE",t[t.UNKNOWN=4]="UNKNOWN",function(t){t[t.BEVEL=0]="BEVEL",t[t.ROUND=1]="ROUND",t[t.MITER=2]="MITER",t[t.UNKNOWN=4]="UNKNOWN"}(h||(h={})),function(t){t[t.SCREEN=0]="SCREEN",t[t.MAP=1]="MAP"}(s||(s={})),function(t){t[t.Tint=0]="Tint",t[t.Ignore=1]="Ignore",t[t.Multiply=99]="Multiply"}(A||(A={})),function(t){t.Both="Both",t.JustBegin="JustBegin",t.JustEnd="JustEnd",t.None="None"}(T||(T={})),function(t){t[t.Mosaic=0]="Mosaic",t[t.Centered=1]="Centered"}(W||(W={})),function(t){t[t.Normal=0]="Normal",t[t.Superscript=1]="Superscript",t[t.Subscript=2]="Subscript"}(z||(z={})),function(t){t[t.MSSymbol=0]="MSSymbol",t[t.Unicode=1]="Unicode"}(G||(G={})),function(t){t[t.Unspecified=0]="Unspecified",t[t.TrueType=1]="TrueType",t[t.PSOpenType=2]="PSOpenType",t[t.TTOpenType=3]="TTOpenType",t[t.Type1=4]="Type1"}(N||(N={})),function(t){t[t.Display=0]="Display",t[t.Map=1]="Map"}(H||(H={})),function(t){t.None="None",t.Loop="Loop",t.Oscillate="Oscillate"}(I||(I={})),function(t){t[t.Z=0]="Z",t[t.X=1]="X",t[t.Y=2]="Y"}(R||(R={})),function(t){t[t.XYZ=0]="XYZ",t[t.ZXY=1]="ZXY",t[t.YXZ=2]="YXZ"}(Z||(Z={})),function(t){t[t.Rectangle=0]="Rectangle",t[t.RoundedRectangle=1]="RoundedRectangle",t[t.Oval=2]="Oval"}($||($={})),function(t){t[t.None=0]="None",t[t.Alpha=1]="Alpha",t[t.Screen=2]="Screen",t[t.Multiply=3]="Multiply",t[t.Add=4]="Add"}(F||(F={})),function(t){t[t.TTB=0]="TTB",t[t.RTL=1]="RTL",t[t.BTT=2]="BTT"}(V||(V={})),function(t){t[t.None=0]="None",t[t.SignPost=1]="SignPost",t[t.FaceNearPlane=2]="FaceNearPlane"}(k||(k={})),function(t){t[t.Float=0]="Float",t[t.String=1]="String",t[t.Boolean=2]="Boolean"}(q||(q={})),function(t){t[t.Intersect=0]="Intersect",t[t.Subtract=1]="Subtract"}(u||(u={})),function(t){t.OpenEnded="OpenEnded",t.Block="Block",t.Crossed="Crossed"}(y||(y={})),function(t){t.FullGeometry="FullGeometry",t.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",t.ReversedFirstSegment="ReversedFirstSegment",t.PerpendicularToSecondSegment="PerpendicularToSecondSegment",t.SecondSegmentWithTicks="SecondSegmentWithTicks",t.DoublePerpendicular="DoublePerpendicular",t.OppositeToFirstSegment="OppositeToFirstSegment",t.TriplePerpendicular="TriplePerpendicular",t.HalfCircleFirstSegment="HalfCircleFirstSegment",t.HalfCircleSecondSegment="HalfCircleSecondSegment",t.HalfCircleExtended="HalfCircleExtended",t.OpenCircle="OpenCircle",t.CoverageEdgesWithTicks="CoverageEdgesWithTicks",t.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",t.GapExtentMidline="GapExtentMidline",t.Chevron="Chevron",t.PerpendicularWithArc="PerpendicularWithArc",t.ClosedHalfCircle="ClosedHalfCircle",t.TripleParallelExtended="TripleParallelExtended",t.ParallelWithTicks="ParallelWithTicks",t.Parallel="Parallel",t.PerpendicularToFirstSegment="PerpendicularToFirstSegment",t.ParallelOffset="ParallelOffset",t.OffsetOpposite="OffsetOpposite",t.OffsetSame="OffsetSame",t.CircleWithArc="CircleWithArc",t.DoubleJog="DoubleJog",t.PerpendicularOffset="PerpendicularOffset",t.LineExcludingLastSegment="LineExcludingLastSegment",t.MultivertexArrow="MultivertexArrow",t.CrossedArrow="CrossedArrow",t.ChevronArrow="ChevronArrow",t.ChevronArrowOffset="ChevronArrowOffset",t.PartialFirstSegment="PartialFirstSegment",t.Arch="Arch",t.CurvedParallelTicks="CurvedParallelTicks",t.Arc90Degrees="Arc90Degrees"}(S||(S={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square",t.TrueBuffer="TrueBuffer"}(i||(i={})),function(t){t.ClosePath="ClosePath",t.ConvexHull="ConvexHull",t.RectangularBox="RectangularBox"}(a||(a={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(l||(l={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square"}(C||(C={})),function(t){t.Fast="Fast",t.Accurate="Accurate"}(D||(D={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(v||(v={})),function(t){t.Sinus="Sinus",t.Square="Square",t.Triangle="Triangle",t.Random="Random"}(B||(B={})),function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Force=2]="Force"}(E||(E={})),function(t){t[t.Buffered=0]="Buffered",t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.AlongLine=3]="AlongLine"}(d||(d={})),function(t){t[t.Linear=0]="Linear",t[t.Rectangular=1]="Rectangular",t[t.Circular=2]="Circular",t[t.Buffered=3]="Buffered"}(P||(P={})),function(t){t[t.Discrete=0]="Discrete",t[t.Continuous=1]="Continuous"}(_||(_={})),function(t){t[t.AcrossLine=0]="AcrossLine",t[t.AloneLine=1]="AloneLine"}(O||(O={})),function(t){t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Center=2]="Center",t[t.Justify=3]="Justify"}(J||(J={})),function(t){t[t.Base=0]="Base",t[t.MidPoint=1]="MidPoint",t[t.ThreePoint=2]="ThreePoint",t[t.FourPoint=3]="FourPoint",t[t.Underline=4]="Underline",t[t.CircularCW=5]="CircularCW",t[t.CircularCCW=6]="CircularCCW"}(w||(w={})),function(t){t.Butt="Butt",t.Round="Round",t.Square="Square"}(X||(X={})),function(t){t.NoConstraint="NoConstraint",t.HalfPattern="HalfPattern",t.HalfGap="HalfGap",t.FullPattern="FullPattern",t.FullGap="FullGap",t.Custom="Custom"}(b||(b={})),function(t){t[t.None=-1]="None",t[t.Custom=0]="Custom",t[t.Circle=1]="Circle",t[t.OpenArrow=2]="OpenArrow",t[t.ClosedArrow=3]="ClosedArrow",t[t.Diamond=4]="Diamond"}(Q||(Q={})),function(t){t[t.ExtraLeading=0]="ExtraLeading",t[t.Multiple=1]="Multiple",t[t.Exact=2]="Exact"}(x||(x={})),function(t){t.Bevel="Bevel",t.Round="Round",t.Miter="Miter"}(U||(U={})),function(t){t[t.Default=0]="Default",t[t.String=1]="String",t[t.Numeric=2]="Numeric"}(j||(j={})),function(t){t[t.InsidePolygon=0]="InsidePolygon",t[t.PolygonCenter=1]="PolygonCenter",t[t.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(K||(K={})),function(t){t[t.Tint=0]="Tint",t[t.Replace=1]="Replace",t[t.Multiply=2]="Multiply"}(en||(en={})),function(t){t[t.ClipAtBoundary=0]="ClipAtBoundary",t[t.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",t[t.DoNotTouchBoundary=2]="DoNotTouchBoundary",t[t.DoNotClip=3]="DoNotClip"}(rn||(rn={})),function(t){t.NoConstraint="NoConstraint",t.WithMarkers="WithMarkers",t.WithFullGap="WithFullGap",t.WithHalfGap="WithHalfGap",t.Custom="Custom"}(nn||(nn={})),function(t){t.Fixed="Fixed",t.Random="Random",t.RandomFixedQuantity="RandomFixedQuantity"}(tn||(tn={})),function(t){t.LineMiddle="LineMiddle",t.LineBeginning="LineBeginning",t.LineEnd="LineEnd",t.SegmentMidpoint="SegmentMidpoint"}(an||(an={})),function(t){t.OnPolygon="OnPolygon",t.CenterOfMass="CenterOfMass",t.BoundingBoxCenter="BoundingBoxCenter"}(ln||(ln={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(dn||(dn={})),function(t){t[t.MarkerCenter=0]="MarkerCenter",t[t.MarkerBounds=1]="MarkerBounds"}(pn||(pn={})),function(t){t[t.None=0]="None",t[t.PropUniform=1]="PropUniform",t[t.PropNonuniform=2]="PropNonuniform",t[t.DifUniform=3]="DifUniform",t[t.DifNonuniform=4]="DifNonuniform"}(fn||(fn={})),function(t){t.Tube="Tube",t.Strip="Strip",t.Wall="Wall"}(_n||(_n={})),function(t){t[t.Random=0]="Random",t[t.Increasing=1]="Increasing",t[t.Decreasing=2]="Decreasing",t[t.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(gn||(gn={})),function(t){t[t.Relative=0]="Relative",t[t.Absolute=1]="Absolute"}(mn||(mn={})),function(t){t[t.Normal=0]="Normal",t[t.LowerCase=1]="LowerCase",t[t.Allcaps=2]="Allcaps"}(Mn||(Mn={})),function(t){t[t.LTR=0]="LTR",t[t.RTL=1]="RTL"}(sn||(sn={})),function(t){t.Draft="Draft",t.Picture="Picture",t.Text="Text"}(cn||(cn={})),function(t){t[t.Top=0]="Top",t[t.Center=1]="Center",t[t.Baseline=2]="Baseline",t[t.Bottom=3]="Bottom"}(hn||(hn={})),function(t){t[t.Right=0]="Right",t[t.Upright=1]="Upright"}(un||(un={})),function(t){t[t.Small=0]="Small",t[t.Medium=1]="Medium",t[t.Large=2]="Large"}(Cn||(Cn={})),function(t){t[t.Calm=0]="Calm",t[t.Rippled=1]="Rippled",t[t.Slight=2]="Slight",t[t.Moderate=3]="Moderate"}(Pn||(Pn={}))},7959:(on,Y,M)=>{M.d(Y,{r:()=>q}),M(29132);var h=M(88879),A=(M(20383),M(54024)),T=M(23841),W=M(67831),z=M(99770),G=M(28093),N=M(7547),H=M(85095),I=M(36460),R=M(13459),Z=M(57213),$=M(52068),F=M(94398),V=M(72642),k=M(55214);class q extends R.a{constructor(d){super(),this._graphicsLayer=d}visualizeIntersectionPoint(d,P){return this._visualizeSnappingIndicator(new V.Z({x:d.intersectionPoint[0],y:d.intersectionPoint[1],spatialReference:P.spatialReference}),S)}visualizePoint(d,P){return this._visualizeSnappingIndicator(new V.Z({x:d.point[0],y:d.point[1],spatialReference:P.spatialReference}),i)}visualizeLine(d,P){return this._visualizeSnappingIndicator(new k.Z({paths:[[d.lineStart,d.lineEnd]],spatialReference:P.spatialReference}),a)}visualizeParallelSign(d,P){return this._visualizeSnappingIndicator(new k.Z({paths:[[d.lineStart,d.lineEnd]],spatialReference:P.spatialReference}),l)}visualizeRightAngleQuad(d,P){return this._visualizeSnappingIndicator(new k.Z({paths:[[d.previousVertex,d.centerVertex,d.nextVertex]],spatialReference:P.spatialReference}),B(d))}_visualizeSnappingIndicator(d,P){const _=new h.Z({geometry:d,symbol:P});return this._graphicsLayer.add(_),(0,A.kB)(()=>{this._graphicsLayer.remove(_)})}}const u=H.O.main.toArray(),y=[...H.O.main.toRgb(),100],S=new Z.Z({outline:new $.Z({width:1.5,color:u}),size:15,color:[0,0,0,0]}),i=new Z.Z({outline:{width:.5,color:[0,0,0,1]},size:10,color:u}),a=new F.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:N.kP.Butt,joinStyle:N.r4.Round,miterLimit:10,width:(0,T.Wz)(I.c.lineHintWidthTarget),color:u}]}}}),l=new F.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),C=E=>new F.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,T.Wz)(I.c.rightAngleHintSize),rotation:E,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,T.Wz)(I.c.rightAngleHintOutlineSize),color:u},{type:"CIMSolidFill",enable:!0,color:y}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),D=C(45),v=C(225),B=(()=>{const E=(0,z.a)(),d=(0,z.a)(),P=(0,G.c)();return _=>((0,W.a)(E,_.centerVertex,_.previousVertex),(0,W.a)(d,_.nextVertex,_.previousVertex),(0,W.g)(P,E,d),P[2]<0?D:v)})()},85095:(on,Y,M)=>{M.d(Y,{O:()=>h,X:()=>H});var L=M(91558);const h={main:new L.Z([255,127,0]),selected:new L.Z([255,255,255]),outline:new L.Z([0,0,0,.5]),selectedOutline:new L.Z([255,255,255]),hoverOutline:new L.Z([255,255,255]),secondary:new L.Z([255,255,255]),secondaryOutline:new L.Z([100,100,100]),transparent:new L.Z([0,0,0,0])};function s(I,R){if(R)for(const Z in R)I[Z]=R[Z]}class A{constructor(R){this.size=8,this.hoverSize=10,this.color=h.main,this.hoverColor=h.main,this.outlineColor=h.outline,this.hoverOutlineColor=h.hoverOutline,s(this,R)}}class T{constructor(R){this.color=h.secondary,this.hoverColor=h.main,s(this,R)}}class W{constructor(R){this.color=h.transparent,this.hoverColor=h.transparent,this.outlineColor=h.main,this.hoverOutlineColor=h.main,this.stagedColor=h.transparent,this.stagedOutlineColor=h.secondary,s(this,R)}}class z{constructor(R){this.vertex=new A,this.midpoint=new A({color:h.secondary,outlineColor:h.secondaryOutline,size:6}),this.selected=new A({color:h.selected,hoverColor:h.selected,hoverOutlineColor:h.hoverOutline}),s(this,R)}}class G{constructor(R){this.center=new A({color:h.secondaryOutline}),this.fill=new W,this.line=new T,this.vertex=new A({color:h.selected,outlineColor:h.main,hoverColor:h.selected,hoverOutlineColor:h.secondaryOutline}),s(this,R)}}const H=new class N{constructor(R){this.reshapeGraphics=new z,this.transformGraphics=new G,s(this,R)}}}}]);