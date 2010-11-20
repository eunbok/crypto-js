/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: 2676
*/
YUI.add("tabview-base",function(B){var C=B.ClassNameManager.getClassName,F="tabview",K="tab",L="content",J="panel",G="selected",H={},I=".",D={tabview:C(F),tabviewPanel:C(F,J),tabviewList:C(F,"list"),tab:C(K),tabLabel:C(K,"label"),tabPanel:C(K,J),selectedTab:C(K,G),selectedPanel:C(K,J,G)},E={tabview:I+D.tabview,tabviewList:"> ul",tab:"> ul > li",tabLabel:"> ul > li > a ",tabviewPanel:"> div",tabPanel:"> div > div",selectedTab:"> ul > "+I+D.selectedTab,selectedPanel:"> div "+I+D.selectedPanel},A=function(M){this.init.apply(this,arguments);};A.NAME="tabviewBase";A._queries=E;A._classNames=D;B.mix(A.prototype,{init:function(M){M=M||H;this._node=M.host||B.one(M.node);this.refresh();},initClassNames:function(M){B.Object.each(E,function(P,O){if(D[O]){var N=this.all(P);if(M!==undefined){N=N.item(M);}if(N){N.addClass(D[O]);}}},this._node);this._node.addClass(D.tabview);},_select:function(N){var Q=this._node,R=Q.one(E.selectedTab),P=Q.one(E.selectedPanel),O=Q.all(E.tab).item(N),M=Q.all(E.tabPanel).item(N);if(R){R.removeClass(D.selectedTab);}if(P){P.removeClass(D.selectedPanel);}if(O){O.addClass(D.selectedTab);}if(M){M.addClass(D.selectedPanel);}},initState:function(){var N=this._node,O=N.one(E.selectedTab),M=O?N.all(E.tab).indexOf(O):0;this._select(M);},_scrubTextNodes:function(){this._node.one(E.tabviewList).get("childNodes").each(function(M){if(M.get("nodeType")===3){M.remove();}});},refresh:function(){this._scrubTextNodes();this.initClassNames();this.initState();this.initEvents();},tabEventName:"click",initEvents:function(){this._node.delegate(this.tabEventName,this.onTabEvent,E.tab,this);},onTabEvent:function(M){M.preventDefault();this._select(this._node.all(E.tab).indexOf(M.currentTarget));},destroy:function(){this._node.detach(this.tabEventName);}});B.TabviewBase=A;},"3.2.0",{requires:["node-event-delegate","classnamemanager","skin-sam-tabview"]});