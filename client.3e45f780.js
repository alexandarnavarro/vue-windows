webpackJsonp([0,2],[,,,function(e,t,n){"use strict";var i=n(2),r=n.n(i),s=n(9),o=n.n(s);new r.a({el:"#app",render:function(e){return e(o.a)}})},function(e,t,n){"use strict";var i=n(0),r=n.n(i),s=n(5);r.a.registerLanguage("javascript",n(1)),t.default={name:"app",data:function(){return{width:500,height:340,code:r.a.highlight("javascript","import {EditorWindow} from 'vue-windows'\n\nnew Vue({\n  el: '#app',\n  render(h) {\n    return h(EditorWindow, {props: {title: 'hola!'}})\n  }\n})\n\n// set how to use in single file component\n// https://github.com/egoist/vue-windows#usage\n").value}},components:{EditorWindow:s.a,BrowserWindow:s.b}}},function(e,t,n){"use strict";var i=n(6),r=n.n(i);n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});var s={functional:!0,name:"editor-window",props:{title:{required:!0,type:String},browser:Boolean,height:Number,width:Number},render:function(e,t){var n=t.children,i=t.props,s=i.browser,o=i.title,a=i.height,l=i.width,h=[r.a.window,s&&r.a.browser],d={height:Boolean(a)&&a+"px",width:Boolean(l)&&l+"px"};return e("div",{class:h,style:d},[e("div",{class:r.a.header},[e("div",{class:r.a.bullets},[e("span",{class:[r.a.bullet,r.a["bullet-red"]]},[]),e("span",{class:[r.a.bullet,r.a["bullet-yellow"]]},[]),e("span",{class:[r.a.bullet,r.a["bullet-green"]]},[])]),e("span",{class:r.a.title,domProps:{innerHTML:o}},[])]),e("div",{class:r.a.body},[n])])}},o={functional:!0,name:"browser-window",props:{url:{required:!0,type:String},height:Number,width:Number},render:function(e,t){var n=t.props,i=n.url,r=n.height,o=n.width,a=t.children;return"https://"===i.substr(0,8)&&(i='<span style="color: rgba(57,126,73,1)">https</span>'+i.substr(5)),e(s,{attrs:{title:i,browser:!0,height:r,width:o}},[a])}}},function(e,t){e.exports={window:"style__window___3EmXK",browser:"style__browser___17O2B",header:"style__header___3t_1_",title:"style__title___vH9OU",body:"style__body___2ZVoV",bullets:"style__bullets___A6BMt",bullet:"style__bullet___1dmsk","bullet-red":"style__bullet-red___3eoh6","bullet-yellow":"style__bullet-yellow___29N8k","bullet-green":"style__bullet-green___3nPdW"}},function(e,t){},function(e,t){},function(e,t,n){var i,r;n(7),n(8),i=n(4);var s=n(10);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=i},function(e,t){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"app"}},[e._h("div",{staticClass:"example"},[e._h("editor-window",{attrs:{title:"How To",width:e.width,height:e.height}},[e._h("pre",[e._h("code",{domProps:{innerHTML:e._s(e.code)}})])])," ",e._h("browser-window",{attrs:{url:"https://github.com/egoist/vue-windows",width:e.width,height:e.height}},[e._h("div",{staticClass:"content"},[e._h("h2",["\n          Such Window, Very Lovely!\n        "])," ",e._h("a",{staticClass:"star",attrs:{href:"https://github.com/egoist/vue-windows"}},["Start me on GitHub!"])])])])," ",e._h("div",{staticClass:"control"},[e._h("div",{staticClass:"range"},["\n      Width: ",e._h("input",{directives:[{name:"model",rawName:"v-model.number",value:e.width,expression:"width",modifiers:{number:!0}}],attrs:{type:"range",min:"460",max:"600"},domProps:{value:e._s(e.width)},on:{input:function(t){e.width=e._n(t.target.value)}}})," ",e._h("span",{directives:[{name:"show",rawName:"v-show",value:e.width,expression:"width"}]},[e._s(e.width)+" px"])])," ",e._h("div",{staticClass:"range"},["\n      Height: ",e._h("input",{directives:[{name:"model",rawName:"v-model.number",value:e.height,expression:"height",modifiers:{number:!0}}],attrs:{type:"range",min:"100",max:"600"},domProps:{value:e._s(e.height)},on:{input:function(t){e.height=e._n(t.target.value)}}})," ",e._h("span",{directives:[{name:"show",rawName:"v-show",value:e.height,expression:"height"}]},[e._s(e.height)+" px"])])])])},staticRenderFns:[]}},,function(e,t,n){e.exports=n(3)}],[12]);
//# sourceMappingURL=client.3e45f780.js.map