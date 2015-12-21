qx.$$packageData['3043464c0975']={"resources":{}};
(function(){var o="move",n="Boolean",m="mouseup",l="mousedown",k="losecapture",j="qx.ui.core.MMovable",i="mousemove",h="maximized",g="__u",f="__t";
qx.Mixin.define(j,{properties:{movable:{check:n,init:true},useMoveFrame:{check:n,init:false}},members:{__t:null,__u:null,__v:null,__w:null,__x:null,__y:null,__z:null,__A:false,__B:null,__C:0,_activateMoveHandle:function(v){if(this.__t){throw new Error("The move handle could not be redefined!");
}this.__t=v;
v.addListener(l,this._onMoveMouseDown,this);
v.addListener(m,this._onMoveMouseUp,this);
v.addListener(i,this._onMoveMouseMove,this);
v.addListener(k,this.__G,this);
},__D:function(){var b=this.__u;

if(!b){b=this.__u=new qx.ui.core.Widget();
b.setAppearance("move-frame");
b.exclude();
qx.core.Init.getApplication().getRoot().add(b);
}return b;
},__E:function(){var location=this.getContainerLocation();
var d=this.getBounds();
var c=this.__D();
c.setUserBounds(location.left,location.top,d.width,d.height);
c.show();
c.setZIndex(this.getZIndex()+1);
},__F:function(e){var q=this.__v;
var t=Math.max(q.left,Math.min(q.right,e.getDocumentLeft()));
var s=Math.max(q.top,Math.min(q.bottom,e.getDocumentTop()));
var p=this.__w+t;
var r=this.__x+s;
return {viewportLeft:p,viewportTop:r,parentLeft:p-this.__y,parentTop:r-this.__z};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(h)){return;
}var parent=this.getLayoutParent();
var x=parent.getContentLocation();
var y=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__A=true;
this.__B=parent.getBlockerColor();
this.__C=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__v={left:x.left,top:x.top,right:x.left+y.width,bottom:x.top+y.height};
var w=this.getContainerLocation();
this.__y=x.left;
this.__z=x.top;
this.__w=w.left-e.getDocumentLeft();
this.__x=w.top-e.getDocumentTop();
this.addState(o);
this.__t.capture();
if(this.getUseMoveFrame()){this.__E();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(o)){return;
}var u=this.__F(e);

if(this.getUseMoveFrame()){this.__D().setDomPosition(u.viewportLeft,u.viewportTop);
}else{this.setDomPosition(u.parentLeft,u.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(o)){return;
}this.removeState(o);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__A){parent.unblockContent();
parent.setBlockerColor(this.__B);
parent.setBlockerOpacity(this.__C);
this.__B=null;
this.__C=0;
}}this.__t.releaseCapture();
var a=this.__F(e);
this.setLayoutProperties({left:a.parentLeft,top:a.parentTop});
if(this.getUseMoveFrame()){this.__D().exclude();
}e.stopPropagation();
},__G:function(e){if(!this.hasState("move")){return;
}this.removeState("move");
if(this.getUseMoveFrame()){this.__D().exclude();
}}},destruct:function(){this._disposeObjects(g,f);
this.__v=null;
}});
})();
(function(){var t="Boolean",s="mouseup",r="mousedown",q="losecapture",p="resizableBottom",o="mouseout",n="resizableRight",m="resizableLeft",l="mousemove",k="shorthand",h="resizableTop",j="Integer",i="qx.ui.core.MResizable";
qx.Mixin.define(i,{construct:function(){this.addListener(r,this.__U,this,true);
this.addListener(s,this.__V,this);
this.addListener(l,this.__X,this);
this.addListener(o,this.__Y,this);
this.addListener(q,this.__W,this);
},properties:{resizableTop:{check:t,init:true},resizableRight:{check:t,init:true},resizableBottom:{check:t,init:true},resizableLeft:{check:t,init:true},resizable:{group:[h,n,p,m],mode:k},resizeSensitivity:{check:j,init:5},useResizeFrame:{check:t,init:true}},members:{__K:null,__L:null,__M:null,__N:null,__O:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__P:function(){var D=this.__K;

if(!D){D=this.__K=new qx.ui.core.Widget();
D.setAppearance("resize-frame");
D.exclude();
qx.core.Init.getApplication().getRoot().add(D);
}return D;
},__Q:function(){var C=this.__O;
var B=this.__P();
B.setUserBounds(C.left,C.top,C.width,C.height);
B.show();
B.setZIndex(this.getZIndex()+1);
},__R:function(e){var v=this.__L;
var w=this.getSizeHint();
var y=this.__O;
var u=y.width;
var x=y.height;
var A=y.left;
var top=y.top;
var z;

if((v&this.RESIZE_TOP)||(v&this.RESIZE_BOTTOM)){z=e.getDocumentTop()-this.__N;

if(v&this.RESIZE_TOP){x-=z;
}else{x+=z;
}
if(x<w.minHeight){x=w.minHeight;
}else if(x>w.maxHeight){x=w.maxHeight;
}
if(v&this.RESIZE_TOP){top+=y.height-x;
}}
if((v&this.RESIZE_LEFT)||(v&this.RESIZE_RIGHT)){z=e.getDocumentLeft()-this.__M;

if(v&this.RESIZE_LEFT){u-=z;
}else{u+=z;
}
if(u<w.minWidth){u=w.minWidth;
}else if(u>w.maxWidth){u=w.maxWidth;
}
if(v&this.RESIZE_LEFT){A+=y.width-u;
}}return {viewportLeft:A,viewportTop:top,parentLeft:y.bounds.left+A-y.left,parentTop:y.bounds.top+top-y.top,width:u,height:x};
},__S:{1:"n-resize",2:"s-resize",4:"w-resize",8:"e-resize",5:"nw-resize",6:"sw-resize",9:"ne-resize",10:"se-resize"},__T:function(e){var c=this.getContentLocation();
var a=this.getResizeSensitivity();
var f=e.getDocumentLeft();
var d=e.getDocumentTop();
var b=0;

if(this.getResizableTop()&&Math.abs(c.top-d)<a){b+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(c.bottom-d)<a){b+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(c.left-f)<a){b+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(c.right-f)<a){b+=this.RESIZE_RIGHT;
}this.__L=b;
},__U:function(e){if(!this.__L){return;
}this.addState("resize");
this.__M=e.getDocumentLeft();
this.__N=e.getDocumentTop();
var location=this.getContainerLocation();
var g=this.getBounds();
this.__O={top:location.top,left:location.left,width:g.width,height:g.height,bounds:qx.lang.Object.clone(g)};
if(this.getUseResizeFrame()){this.__Q();
}this.capture();
e.stop();
},__V:function(e){if(!this.hasState("resize")){return;
}if(this.getUseResizeFrame()){this.__P().exclude();
}var J=this.__R(e);
this.setWidth(J.width);
this.setHeight(J.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:J.parentLeft,top:J.parentTop});
}this.__L=0;
this.removeState("resize");
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__W:function(e){if(!this.__L){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState("move");
if(this.getUseResizeFrame()){this.__P().exclude();
}},__X:function(e){if(this.hasState("resize")){var H=this.__R(e);
if(this.getUseResizeFrame()){var F=this.__P();
F.setUserBounds(H.viewportLeft,H.viewportTop,H.width,H.height);
}else{this.setWidth(H.width);
this.setHeight(H.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:H.parentLeft,top:H.parentTop});
}}e.stopPropagation();
}else if(!this.hasState("maximized")){this.__T(e);
var I=this.__L;
var G=this.getApplicationRoot();

if(I){var E=this.__S[I];
this.setCursor(E);
G.setGlobalCursor(E);
}else if(this.getCursor()){this.resetCursor();
G.resetGlobalCursor();
}}},__Y:function(e){if(this.getCursor()&&!this.hasState("resize")){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__K!=null&&!qx.core.ObjectRegistry.inShutDown){this.__K.destroy();
this.__K=null;
}}});
})();
(function(){var b="qx.ui.window.IWindowManager";
qx.Interface.define(b,{members:{setDesktop:function(a){this.assertInterface(a,qx.ui.window.IDesktop);
},changeActiveWindow:function(e,f){},updateStack:function(){},bringToFront:function(c){this.assertInstance(c,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var c="qx.ui.window.Manager",b="__J";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__J:null,setDesktop:function(a){this.__J=a;
this.updateStack();
},getDesktop:function(){return this.__J;
},changeActiveWindow:function(q,r){if(q){this.bringToFront(q);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__J.forceUnblockContent();
var h=this.__J.getWindows();
var m=this._minZIndex-1;
var k=false;
var j,g=null;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(!j.isVisible()){continue;
}m+=2;
j.setZIndex(m);
if(j.getModal()){this.__J.blockContent(m-1);
}k=k||j.isActive();
g=j;
}
if(!k){this.__J.setActiveWindow(g);
}},bringToFront:function(n){var o=this.__J.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(d){var e=this.__J.getWindows();
var f=qx.lang.Array.remove(e,d);

if(f){e.unshift(d);
this.updateStack();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var s="Boolean",r="qx.event.type.Event",q="captionbar",p="maximize-button",o="_applyCaptionBarChange",n="restore-button",m="minimize-button",l="close-button",k="maximized",j="execute",ba="pane",Y="title",X="icon",W="statusbar-text",V="statusbar",U="normal",T="String",S="active",R="beforeClose",Q="beforeMinimize",z="mousedown",A="changeStatus",x="changeIcon",y="excluded",v="_applyCaption",w="_applyActive",t="beforeRestore",u="minimize",B="dblclick",C="changeModal",I="_applyShowStatusbar",H="_applyStatus",K="qx.ui.window.Window",J="changeCaption",M="_applyIcon",L="focusout",E="beforeMaximize",P="maximize",O="restore",N="window",D="close",F="changeActive",G="minimized";
qx.Class.define(K,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(br,bs){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(q);
this._createChildControl(ba);
if(bs!=null){this.setIcon(bs);
}
if(br!=null){this.setCaption(br);
}this._updateCaptionBar();
this.addListener(z,this._onWindowMouseDown,this,true);
this.addListener(L,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":r,"close":r,"beforeMinimize":r,"minimize":r,"beforeMaximize":r,"maximize":r,"beforeRestore":r,"restore":r},properties:{appearance:{refine:true,init:N},visibility:{refine:true,init:y},focusable:{refine:true,init:true},active:{check:s,init:false,apply:w,event:F},modal:{check:s,init:false,event:C},caption:{apply:v,event:J,nullable:true},icon:{check:T,nullable:true,apply:M,event:x,themeable:true},status:{check:T,nullable:true,apply:H,event:A},showClose:{check:s,init:true,apply:o,themeable:true},showMaximize:{check:s,init:true,apply:o,themeable:true},showMinimize:{check:s,init:true,apply:o,themeable:true},allowClose:{check:s,init:true,apply:o},allowMaximize:{check:s,init:true,apply:o},allowMinimize:{check:s,init:true,apply:o},showStatusbar:{check:s,init:false,apply:I}},members:{__H:null,__I:null,getChildrenContainer:function(){return this.getChildControl(ba);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bi){var bj;

switch(bi){case V:bj=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bj);
bj.add(this.getChildControl(W));
break;
case W:bj=new qx.ui.basic.Label();
bj.setValue(this.getStatus());
break;
case ba:bj=new qx.ui.container.Composite();
this._add(bj,{flex:1});
break;
case q:var bl=new qx.ui.layout.Grid();
bl.setRowFlex(0,1);
bl.setColumnFlex(1,1);
bj=new qx.ui.container.Composite(bl);
this._add(bj);
bj.addListener(B,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bj);
break;
case X:bj=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(q).add(bj,{row:0,column:0});
break;
case Y:bj=new qx.ui.basic.Label(this.getCaption());
bj.setWidth(0);
bj.setAllowGrowX(true);
var bk=this.getChildControl(q);
bk.add(bj,{row:0,column:1});
break;
case m:bj=new qx.ui.form.Button();
bj.setFocusable(false);
bj.addListener(j,this._onMinimizeButtonClick,this);
this.getChildControl(q).add(bj,{row:0,column:2});
break;
case n:bj=new qx.ui.form.Button();
bj.setFocusable(false);
bj.addListener(j,this._onRestoreButtonClick,this);
this.getChildControl(q).add(bj,{row:0,column:3});
break;
case p:bj=new qx.ui.form.Button();
bj.setFocusable(false);
bj.addListener(j,this._onMaximizeButtonClick,this);
this.getChildControl(q).add(bj,{row:0,column:4});
break;
case l:bj=new qx.ui.form.Button();
bj.setFocusable(false);
bj.addListener(j,this._onCloseButtonClick,this);
this.getChildControl(q).add(bj,{row:0,column:6});
break;
}return bj||arguments.callee.base.call(this,bi);
},_updateCaptionBar:function(){var bh;

if(this.getIcon()){this._showChildControl(X);
}else{this._excludeChildControl(X);
}
if(this.getCaption()){this._showChildControl(Y);
}else{this._excludeChildControl(Y);
}
if(this.getShowMinimize()){this._showChildControl(m);
bh=this.getChildControl(m);
this.getAllowMinimize()?bh.resetEnabled():bh.setEnabled(false);
}else{this._excludeChildControl(m);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(n);
this._excludeChildControl(p);
}else{this._showChildControl(p);
this._excludeChildControl(n);
}bh=this.getChildControl(p);
this.getAllowMaximize()?bh.resetEnabled():bh.setEnabled(false);
}else{this._excludeChildControl(p);
this._excludeChildControl(n);
}
if(this.getShowClose()){this._showChildControl(l);
bh=this.getChildControl(l);
this.getAllowClose()?bh.resetEnabled():bh.setEnabled(false);
}else{this._excludeChildControl(l);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(R,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(D);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bo=parent.getBounds();

if(bo){var bp=this.getSizeHint();
var bn=Math.round((bo.width-bp.width)/2);
var top=Math.round((bo.height-bp.height)/2);

if(top<0){top=0;
}this.moveTo(bn,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(E,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bm=this.getLayoutProperties();
this.__I=bm.left===undefined?0:bm.left;
this.__H=bm.top===undefined?0:bm.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(k);
this._updateCaptionBar();
this.fireEvent(P);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(Q,qx.event.type.Event,[false,true])){var bb=this.getLayoutProperties();
this.__I=bb.left===undefined?0:bb.left;
this.__H=bb.top===undefined?0:bb.top;
this.removeState(k);
this.hide();
this.fireEvent(u);
}},restore:function(){if(this.getMode()===U){return;
}
if(this.fireNonBubblingEvent(t,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bq=this.__I;
var top=this.__H;
this.setLayoutProperties({edge:null,left:bq,top:top});
this.removeState(k);
this._updateCaptionBar();
this.fireEvent(O);
}},moveTo:function(bg,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bg,top:top});
},isMaximized:function(){return this.hasState(k);
},getMode:function(){if(!this.isVisible()){return G;
}else{if(this.isMaximized()){return k;
}else{return U;
}}},_applyActive:function(be,bf){if(bf){this.removeState(S);
}else{this.addState(S);
}},_getContentPaddingTarget:function(){return this.getChildControl(ba);
},_applyShowStatusbar:function(bc,bd){if(bc){this._showChildControl(V);
}else{this._excludeChildControl(V);
}},_applyCaptionBarChange:function(f,g){this._updateCaptionBar();
},_applyStatus:function(b,c){var d=this.getChildControl(W,true);

if(d){d.setValue(b);
}},_applyCaption:function(h,i){this.getChildControl(Y).setValue(h);
},_applyIcon:function(bt,bu){this.getChildControl(X).setSource(bt);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var a=e.getRelatedTarget();

if(a!=null&&!qx.ui.core.Widget.contains(this,a)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(m).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(n).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(p).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(l).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var a="qx.ui.window.Desktop";
qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.window.MDesktop,qx.ui.core.MBlocker],implement:qx.ui.window.IDesktop,construct:function(b){arguments.callee.base.call(this);
this.getContentElement().disableScrolling();
this._setLayout(new qx.ui.layout.Canvas());
this.setWindowManager(b);
}});
})();
(function(){var b="showcase.page.AbstractDesktopContent";
qx.Class.define(b,{extend:showcase.AbstractContent,construct:function(c){arguments.callee.base.call(this,c);
this.setView(this._createView());
},members:{_createView:function(){var e=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var d=new qx.ui.window.Window();
d.set({showClose:false,showMinimize:false,contentPadding:0});
this._addWindowContent(d);
e.add(d);
d.moveTo(30,20);
d.open();
return e;
},_addWindowContent:function(a){throw new Error("Abstract method call!");
}}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(i,j){arguments.callee.base.call(this);
if(i!=null){if(i.translate){this.setLabel(i.translate());
}else{this.setLabel(i);
}}
if(j!=null){this.setMenu(j);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(k,l){k?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
