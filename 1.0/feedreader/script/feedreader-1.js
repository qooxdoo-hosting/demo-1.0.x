qx.$$packageData['77d86f601e3e']={"resources":{"qx/icon/Tango/16/actions/dialog-apply.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-80],"qx/icon/Tango/16/actions/document-new.png":[16,16,"png","feedreader","feedreader/images/combined/icons16.png",0,-16]}};
(function(){var A="showingPlaceholder",z="color",y="",x="none",w="qx.client",v="changeValue",u="Boolean",t="qx.event.type.Data",s="readonly",r="input",bn="focusin",bm="visibility",bl="focusout",bk="hidden",bj="absolute",bi="readOnly",bh="text",bg="_applyTextAlign",bf="px",be="RegExp",H=")",I="syncAppearance",F="gecko",G="A",D="change",E="textAlign",B="focused",C="center",J="visible",K="disabled",R="url(",P="String",V="resize",T="qx.ui.form.AbstractField",ba="transparent",X="off",M="spellcheck",bd="false",bc="right",bb="PositiveInteger",L="mshtml",N="abstract",O="block",Q="webkit",S="_applyReadOnly",U="_applyPlaceholder",W="left",Y="qx/static/blank.gif";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:N,construct:function(bD){arguments.callee.base.call(this);

if(bD!=null){this.setValue(bD);
}this.getContentElement().addListener(D,this._onChangeContent,this);
this.addListener(I,this._syncPlaceholder,this);
},events:{"input":t,"changeValue":t},properties:{textAlign:{check:[W,C,bc],nullable:true,themeable:true,apply:bg},readOnly:{check:u,apply:S,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bb,init:Infinity},liveUpdate:{check:u,init:false},placeholder:{check:P,nullable:true,apply:U},filter:{check:be,nullable:true,init:null}},members:{__p:true,__q:null,getFocusElement:function(){var c=this.getContentElement();

if(c){return c;
}},_createInputElement:function(){return new qx.html.Input(bh);
},renderLayout:function(bp,top,bq,br){var bs=this._updateInsets;
var bw=arguments.callee.base.call(this,bp,top,bq,br);
if(!bw){return;
}var bu=bw.size||bs;
var bx=bf;

if(bu||bw.local||bw.margin){var bt=this.getInsets();
var innerWidth=bq-bt.left-bt.right;
var innerHeight=br-bt.top-bt.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bv=this.getContentElement();

if(bs){this.__s().setStyles({"left":bt.left+bx,"top":bt.top+bx});
}
if(bu){this.__s().setStyles({"width":innerWidth+bx,"height":innerHeight+bx});
bv.setStyles({"width":innerWidth+bx,"height":innerHeight+bx});
}},_createContentElement:function(){var bo=this._createInputElement();
bo.setStyles({"border":x,"padding":0,"margin":0,"display":O,"background":ba,"outline":x,"appearance":x,"position":bj,"autoComplete":X});
bo.setSelectable(this.getSelectable());
bo.setEnabled(this.getEnabled());
bo.addListener(r,this._onHtmlInput,this);
if(qx.core.Variant.isSet(w,F)){bo.setAttribute(M,bd);
}if(qx.core.Variant.isSet(w,Q)){bo.setStyle(V,x);
}if(qx.core.Variant.isSet(w,L)){bo.setStyles({backgroundImage:R+qx.util.ResourceManager.getInstance().toUri(Y)+H});
}return bo;
},_applyEnabled:function(g,h){arguments.callee.base.call(this,g,h);
this.getContentElement().setEnabled(g);

if(g){this._showPlaceholder();
}else{this._removePlaceholder();
}},__r:{width:16,height:16},_getContentHint:function(){return {width:this.__r.width*10,height:this.__r.height||16};
},_applyFont:function(bE,bF){var bG;

if(bE){var bH=qx.theme.manager.Font.getInstance().resolve(bE);
bG=bH.getStyles();
}else{bG=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bG);
this.__s().setStyles(bG);
if(bE){this.__r=qx.bom.Label.getTextSize(G,bG);
}else{delete this.__r;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(m,n){if(m){this.getContentElement().setStyle(z,qx.theme.manager.Color.getInstance().resolve(m));
this.__s().setStyle(z,qx.theme.manager.Color.getInstance().resolve(m));
}else{this.getContentElement().removeStyle(z);
this.__s().removeStyle(z);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__r;
},_onHtmlInput:function(e){var bL=e.getData();
var bK=true;
this.__p=false;
if(this.getFilter()!=null){var bM=y;
var bI=bL.search(this.getFilter());
var bJ=bL;

while(bI>=0){bM=bM+(bJ.charAt(bI));
bJ=bJ.substring(bI+1,bJ.length);
bI=bJ.search(this.getFilter());
}
if(bM!=bL){bK=false;
bL=bM;
this.getContentElement().setValue(bL);
}}if(bL.length>this.getMaxLength()){var bK=false;
this.getContentElement().setValue(bL.substr(0,this.getMaxLength()));
}if(bK){this.fireDataEvent(r,bL);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(v,qx.event.type.Data,[bL]);
}}},setValue:function(i){if(i===null){if(this.__p){return i;
}i=y;
this.__p=true;
}else{this.__p=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(i)){var k=this.getContentElement();

if(i.length>this.getMaxLength()){i=i.substr(0,this.getMaxLength());
}
if(k.getValue()!=i){var l=k.getValue();
k.setValue(i);
var j=this.__p?null:i;
this.fireNonBubblingEvent(v,qx.event.type.Data,[j,l]);
}this._showPlaceholder();
return i;
}throw new Error("Invalid value type: "+i);
},getValue:function(){var o=this.getContentElement().getValue();
return this.__p?null:o;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__p=e.getData()===null;
this.fireNonBubblingEvent(v,qx.event.type.Data,[e.getData()]);
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(by,bz){this.getContentElement().setTextSelection(by,bz);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var f=this.getValue()||y;
var d=this.getPlaceholder();

if(d!=null&&f==y&&!this.hasState(B)&&!this.hasState(K)){if(this.hasState(A)){this._syncPlaceholder();
}else{this.addState(A);
}}},_removePlaceholder:function(){if(this.hasState(A)){this.__s().setStyle(bm,bk);
this.removeState(A);
}},_syncPlaceholder:function(){if(this.hasState(A)){this.__s().setStyle(bm,J);
}},__s:function(){if(this.__q==null){this.__q=new qx.html.Label();
this.__q.setStyles({"visibility":bk,"zIndex":6,"position":bj});
this.getContainerElement().add(this.__q);
}return this.__q;
},_applyPlaceholder:function(a,b){this.__s().setValue(a);

if(a!=null){this.addListener(bn,this._removePlaceholder,this);
this.addListener(bl,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bn,this._removePlaceholder,this);
this.removeListener(bl,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(p,q){this.getContentElement().setStyle(E,p);
},_applyReadOnly:function(bA,bB){var bC=this.getContentElement();
bC.setAttribute(bi,bA);

if(bA){this.addState(s);
this.setFocusable(false);
}else{this.removeState(s);
this.setFocusable(true);
}}},destruct:function(){this.__q=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="off",n="on",m="qxSelectable",l="",k="webkit",g="input",j="qx.html.Input",i="select",f="disabled",e="read-only",h="userSelect";
qx.Class.define(j,{extend:qx.html.Element,construct:function(u){arguments.callee.base.call(this);
this.__c=u;
if(u===i||u===p){this.setNodeName(u);
}else{this.setNodeName(g);
}},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);
var b=this.getDomElement();

if(name===r){qx.bom.Input.setValue(b,a);
}else if(name===s){qx.bom.Input.setWrap(b,a);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(B){this.__e=B;

if(!B){this.setStyles({"userModify":e,"userSelect":t});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:t});
}},"default":function(x){this.setAttribute(f,x===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(v){this.__d=v;
this.setAttribute(m,v?n:o);
if(qx.core.Variant.isSet(q,k)){var w=this.__e?v?null:t:t;
this.setStyle(h,w);
}},"default":function(c){this.setAttribute(m,c?n:o);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(r,y);
}return this;
},getValue:function(){var d=this.getDomElement();

if(d){return qx.bom.Input.getValue(d);
}return this._getProperty(r)||l;
},setWrap:function(A){if(this.__c===p){this._setProperty(s,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var u="change",t="input",s="checkbox",r="radio",q="textarea",p="qx.client",n="text",m="password",k="keypress",j="propertychange",d="select-multiple",h="checked",g="value",c="select",b="qx.event.handler.Input",f="Enter";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(I,J){var K=I.tagName.toLowerCase();

if(J===t&&(K===t||K===q)){return true;
}
if(J===u&&(K===t||K===q||K===c)){return true;
}return false;
},registerEvent:qx.core.Variant.select(p,{"mshtml":function(B,C,D){if(!B.__h){var E=B.tagName.toLowerCase();
var F=B.type;

if(F===n||F===m||E===q||F===s||F===r){qx.bom.Event.addNativeListener(B,j,this._onPropertyWrapper);
}
if(F!==s&&F!==r){qx.bom.Event.addNativeListener(B,u,this._onChangeValueWrapper);
}this.__k(B,F);
B.__h=true;
}},"default":function(Q,R,S){if(R===t){this.__i(Q);
}else if(R===u){if(Q.type===r||Q.type===s){qx.bom.Event.addNativeListener(Q,u,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Q,u,this._onChangeValueWrapper);
}this.__k(Q,Q.type);
}}}),__i:qx.core.Variant.select(p,{"mshtml":null,"webkit":function(L){var M=L.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&M==q){qx.bom.Event.addNativeListener(L,k,this._onInputWrapper);
}qx.bom.Event.addNativeListener(L,t,this._onInputWrapper);
},"default":function(T){qx.bom.Event.addNativeListener(T,t,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(p,{"mshtml":function(U,V){if(U.__h){var W=U.tagName.toLowerCase();
var X=U.type;

if(X===n||X===m||W===q||X===s||X===r){qx.bom.Event.removeNativeListener(U,j,this._onPropertyWrapper);
}
if(X!==s&&X!==r){qx.bom.Event.removeNativeListener(U,u,this._onChangeValueWrapper);
}
try{delete U.__h;
}catch(Y){U.__h=null;
}}},"default":function(v,w){if(w===t){this.__i(v);
}else if(w===u){if(v.type===r||v.type===s){qx.bom.Event.removeNativeListener(v,u,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(v,u,this._onChangeValueWrapper);
}}}}),__j:qx.core.Variant.select(p,{"mshtml":null,"webkit":function(z){var A=z.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&A==q){qx.bom.Event.removeNativeListener(z,k,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(z,t,this._onInputWrapper);
},"default":function(N){qx.bom.Event.removeNativeListener(N,t,this._onInputWrapper);
}}),__k:qx.core.Variant.select(p,{"mshtml|opera":function(bc,bd){if(bd===n||bd===m){qx.event.Registration.addListener(bc,k,function(e){if(e.getKeyIdentifier()===f){qx.event.Registration.fireEvent(bc,u,qx.event.type.Data,[bc.value]);
}});
}},"default":function(G,H){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bb=e.target;
qx.event.Registration.fireEvent(bb,t,qx.event.type.Data,[bb.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var y=e.target||e.srcElement;
var x=y.value;

if(y.type===d){var x=[];

for(var i=0,o=y.options,l=o.length;i<l;i++){if(o[i].selected){x.push(o[i].value);
}}}qx.event.Registration.fireEvent(y,u,qx.event.type.Data,[x]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var a=e.target;

if(a.type===r){if(a.checked){qx.event.Registration.fireEvent(a,u,qx.event.type.Data,[a.value]);
}}else{qx.event.Registration.fireEvent(a,u,qx.event.type.Data,[a.checked]);
}}),_onProperty:qx.core.Variant.select(p,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var O=e.target||e.srcElement;
var P=e.propertyName;

if(P===g&&(O.type===n||O.type===m||O.tagName.toLowerCase()===q)){if(!O.__inValueSet){qx.event.Registration.fireEvent(O,t,qx.event.type.Data,[O.value]);
}}else if(P===h){if(O.type===s){qx.event.Registration.fireEvent(O,u,qx.event.type.Data,[O.checked]);
}else if(O.checked){qx.event.Registration.fireEvent(O,u,qx.event.type.Data,[O.value]);
}}}),"default":function(){}})},defer:function(ba){qx.event.Registration.addHandler(ba);
}});
})();
(function(){var G="",F="select",E="soft",D="off",C="qx.client",B="wrap",A="text",z="mshtml",y="number",x="checkbox",q="select-one",w="input",t="option",p="value",o="radio",s="qx.bom.Input",r="nowrap",u="textarea",n="auto",v="normal";
qx.Class.define(s,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(X,Y,ba){{};
var Y=Y?qx.lang.Object.clone(Y):{};
var bb;

if(X===u||X===F){bb=X;
}else{bb=w;
Y.type=X;
}return qx.bom.Element.create(bb,Y,ba);
},setValue:function(c,d){var j=c.nodeName.toLowerCase();
var f=c.type;
var Array=qx.lang.Array;
var k=qx.lang.Type;

if(typeof d===y){d+=G;
}
if((f===x||f===o)){if(k.isArray(d)){c.checked=Array.contains(d,c.value);
}else{c.checked=c.value==d;
}}else if(j===F){var e=k.isArray(d);
var m=c.options;
var g,h;

for(var i=0,l=m.length;i<l;i++){g=m[i];
h=g.getAttribute(p);

if(h==null){h=g.text;
}g.selected=e?Array.contains(d,h):d==h;
}
if(e&&d.length==0){c.selectedIndex=-1;
}}else if(f===A&&qx.core.Variant.isSet(C,z)){c.__g=true;
c.value=d;
c.__g=null;
}else{c.value=d;
}},getValue:function(N){var T=N.nodeName.toLowerCase();

if(T===t){return (N.attributes.value||{}).specified?N.value:N.text;
}
if(T===F){var O=N.selectedIndex;
if(O<0){return null;
}var U=[];
var W=N.options;
var V=N.type==q;
var S=qx.bom.Input;
var R;
for(var i=V?O:0,Q=V?O+1:W.length;i<Q;i++){var P=W[i];

if(P.selected){R=S.getValue(P);
if(V){return R;
}U.push(R);
}}return U;
}else{return (N.value||G).replace(/\r/g,G);
}},setWrap:qx.core.Variant.select(C,{"mshtml":function(H,I){H.wrap=I?E:D;
},"gecko|webkit":function(J,K){var M=K?E:D;
var L=K?G:n;
J.setAttribute(B,M);
J.style.overflow=L;
},"default":function(a,b){a.style.whiteSpace=b?v:r;
}})}});
})();
(function(){var s="",r="Add",q="Title:",p="__m",o="Add a feed",n="feedreader.view.AddFeedWindow",m="user",l="URL:",k="__n",j="icon/16/actions/document-new.png",g="icon/16/actions/dialog-apply.png",i="__l",h="right",f="Feed Information",d="execute";
qx.Class.define(n,{extend:qx.ui.window.Window,construct:function(c){arguments.callee.base.call(this,this.tr(o),j);
this.__l=c;
this.set({modal:true,showMinimize:false,showMaximize:false,allowMaximize:false});
this._addContent();
},members:{__m:null,__n:null,__l:null,_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
var x=new qx.ui.groupbox.GroupBox(this.tr(f));
this.add(x);
var u=new qx.ui.layout.Grid();
u.setSpacing(10);
x.setLayout(u);
var v=new qx.ui.basic.Label(this.tr(q));
var t=this.__n=new qx.ui.form.TextField();
var y=new qx.ui.basic.Label(this.tr(l));
var z=this.__m=new qx.ui.form.TextField();
x.add(v,{row:0,column:0});
x.add(t,{row:0,column:1});
x.add(y,{row:1,column:0});
x.add(z,{row:1,column:1});
z.setWidth(200);
var w=new qx.ui.form.Button(this.tr(r),g);
w.set({alignX:h,allowGrowX:false});
this.add(w);
w.addListener(d,this._addFeed,this);
},_addFeed:function(e){var b=this.__n.getValue();

if(b==null||b==s){alert(this.tr("Please enter a title."));
return;
}var a=this.__m.getValue();

if(a==null||b==s){alert(this.tr("Please enter a url."));
return;
}this.__l.addFeed(b,a,m);
this.close();
}},destruct:function(){this.__o=null;
this._disposeObjects(i,k,p);
}});
})();
