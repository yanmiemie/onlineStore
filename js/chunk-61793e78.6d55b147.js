(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61793e78"],{"057f":function(e,t,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return a(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?l(e):a(r(e))}},"0d03":function(e,t,n){var r=n("6eeb"),a=Date.prototype,i="Invalid Date",o="toString",l=a[o],c=a.getTime;new Date(NaN)+""!=i&&r(a,o,(function(){var e=c.call(this);return e===e?l.call(this):i}))},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),o=n("9112");for(var l in a){var c=r[l],u=c&&c.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(s){u.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),o=a("forEach"),l=i("forEach");e.exports=o&&l?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4160:function(e,t,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),o=n("ae40"),l=i("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!l||!c},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"6eba":function(e,t,n){var r=n("23e7");r({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},"746f":function(e,t,n){var r=n("428f"),a=n("5135"),i=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});a(t,e)||o(t,e,{value:i.f(e)})}},"7a82":function(e,t,n){var r=n("23e7"),a=n("83ab"),i=n("9bf2");r({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:i.f})},"7db3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("Navbar"),n("div",{staticClass:"m-20"},[n("div",{attrs:{id:"todo"}},[n("h2",[e._v("客戶清單建立中 ")]),n("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[e._v(" open ")]),n("el-drawer",{attrs:{title:"I am the title",visible:e.drawer,direction:e.ltr,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[n("span",[e._v(" Hi, there!")])]),n("el-calendar",{scopedSlots:e._u([{key:"dateCell",fn:function(t){t.date;var r=t.data;return[n("p",{staticClass:"text-xs text-gray-400",class:r.isSelected?"is-selected":""},[e._v(" "+e._s(r.day.split("-").slice(1).join("/"))+" "+e._s(r.isSelected?"✔️":"")+" ")]),e._l(e.todos,(function(t){return n("div",{staticClass:"text-xs"},[e._v(" "+e._s(r.day.split("-").slice(2))+" v.s "+e._s(t.creatTime.split("-").slice(2))+" "),parseInt(r.day.split("-").slice(2))==parseInt(t.creatTime.split("-").slice(2))?n("div",[e._v(" 客戶： "+e._s(t.text)+" ")]):e._e()])}))]}}])}),n("div",{staticClass:"grid grid-cols-2 gap-1"},[n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.addTodo(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo.text,expression:"newTodo.text"}],staticClass:"px-10 m-3 py-2 rounded-full bg-gray-100 ",attrs:{type:"text",placeholder:"Add new todo"},domProps:{value:e.newTodo.text},on:{input:function(t){t.target.composing||e.$set(e.newTodo,"text",t.target.value)}}}),n("div",{staticClass:"block"},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("Check all")]),n("div",{staticStyle:{margin:"15px 0"}}),n("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(t){e.checkedCities=t},expression:"checkedCities"}},e._l(e.cities,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),n("span",{staticClass:"demonstration"},[e._v("HHs")]),n("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day","picker-options":e.pickerOptions},model:{value:e.newTodo.creatTime,callback:function(t){e.$set(e.newTodo,"creatTime",t)},expression:"newTodo.creatTime"}})],1)])]),n("div",[n("button",{staticClass:"text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400",on:{click:e.addTodo}},[e._v("新增")])])]),e._v(" "+e._s(e.newTodo.creatTime)+" "),n("hr"),e._v(" "+e._s(e.g)+" "),n("ul",{staticClass:"todo-list  "},e._l(e.todos,(function(t){return n("li",{staticClass:"border-2 border-gray-200 rounded-full py-1 px-4 my-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"todo.text"}],staticClass:"px-10 m-3 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 ",attrs:{type:"text",placeholder:"Add new todo"},domProps:{value:t.text},on:{input:function(n){n.target.composing||e.$set(t,"text",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"todo.name"}],staticClass:"px-10 m-3 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 ",attrs:{type:"text",placeholder:"Add new todo"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),e._v(" "+e._s(t.pd_500)+" "),n("el-input-number",{attrs:{placeholder:":中瓶:",min:1,max:10},on:{change:e.handleChange},model:{value:e.v2,callback:function(t){e.v2=t},expression:"v2"}}),n("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day","picker-options":e.pickerOptions},model:{value:t.creatTime,callback:function(n){e.$set(t,"creatTime",n)},expression:" todo.creatTime"}}),n("button",{staticClass:"text-ms font-blod text-red-100 m-1 px-3 py-0.5 ml-4 rounded-full bg-red-400",on:{click:function(n){return e.removeTodo(t.key)}}},[e._v("刪除")]),n("button",{staticClass:"bg-green-500 text-gray-900  text-ms font-blod \n                          m-1 px-3 py-0.5 ml-4 rounded-full \n                          hover:bg-green-700 hover:text-gray-100  ",on:{click:function(n){return e.updateTodo(t.key,t)}}},[e._v("更新")])],1)})),0)],1)]),e._v(" "+e._s(e.value3)+" "),n("hr"),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("Display all tags (default)")]),n("el-cascader",{attrs:{options:e.options,props:e.props,clearable:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("Default")]),n("el-date-picker",{attrs:{multiple:"",type:"date",placeholder:"Pick a day"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1)},a=[],i=(n("a4d3"),n("e01a"),n("4de4"),n("4160"),n("6eba"),n("0d03"),n("b0c0"),n("e25e"),n("159b"),n("8a02")),o=["大瓶","中瓶","Guangzhou","Shenzhen"],l={name:"tutorials-list",components:{},data:function(){return{checkAll:!1,checkedCities:["Shanghai","Beijing"],cities:o,isIndeterminate:!0,showModal:!1,g:"",d:"",v2:"",todos:[],newTodo:{text:"",creatTime:""},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"Today",onClick:function(e){e.$emit("pick",new Date)}},{text:"Yesterday",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"A week ago",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},value1:"",value2:"",value3:"",value33:new Date,props:{multiple:!0},options:[{value:1,label:"Asia",children:[{value:2,label:"China",children:[{value:3,label:"Beijing"},{value:4,label:"Shanghai"},{value:5,label:"Hangzhou"}]},{value:6,label:"Japan",children:[{value:7,label:"Tokyo"},{value:8,label:"Osaka"},{value:9,label:"Kyoto"}]},{value:10,label:"Korea",children:[{value:11,label:"Seoul"},{value:12,label:"Busan"},{value:13,label:"Taegu"}]}]},{value:14,label:"Europe",children:[{value:15,label:"France",children:[{value:16,label:"Paris"},{value:17,label:"Marseille"},{value:18,label:"Lyon"}]},{value:19,label:"UK",children:[{value:20,label:"London"},{value:21,label:"Birmingham"},{value:22,label:"Manchester"}]}]},{value:23,label:"North America",children:[{value:24,label:"US",children:[{value:25,label:"New York"},{value:26,label:"Los Angeles"},{value:27,label:"Washington"}]},{value:28,label:"Canada",children:[{value:29,label:"Toronto"},{value:30,label:"Montreal"},{value:31,label:"Ottawa"}]}]}]}},methods:{handleCheckAllChange:function(e){this.checkedCities=e?o:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.cities.length,this.isIndeterminate=t>0&&t<this.cities.length},getTimeTrans:function(e){if("undefined"!==typeof e){var t=new Date(e),n=t.getFullYear(),r=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],a=t.getDate(),i=t.day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=t.getHours(),l=t.getMinutes();return r[t.getMonth()]+"/"+(parseInt(a,10)<10?"0"+a:a)+"/"+n+"<br> "+o+":"+(parseInt(l,10)<10?"0"+l:l)+"&nbsp;"+i[t.getDay()]}},addTodo:function(){this.newTodo.creatTime="2020-12-02",i["b"].create(this.newTodo)},updateTodo:function(e,t){i["b"].getAll().child(e).update(t),Swal.fire({position:"top",icon:"success",title:"更新成功",showConfirmButton:!1,timer:1500})},removeTodo:function(e){Swal.fire({title:"真的嗎?",text:"請確認是否移除資料!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"執行刪除!",cancelButtonText:"取消"}).then((function(t){t.isConfirmed&&(Swal.fire("刪除成功!","你的資料，已完成刪除.","success"),i["b"].getAll().child(e).remove())}))},updateTutorial:function(){var e=this,t={title:this.currentTutorial.title,description:this.currentTutorial.description};i["b"].update(this.currentTutorial.key,t).then((function(){e.message="更新成功!"}))["catch"]((function(e){console.log(e)}))},onDataChange:function(e){var t=[];e.forEach((function(e){var n=e.key,r=e.val();t.push({key:n,text:r.text,creatTime:r.creatTime,name:r.name,pd_500:r.pd_500})})),this.todos=t},getTime:function(e){var t=new Date,n=t.getDate(),r=t.getMonth()+1,a=t.getFullYear(),i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["日","一","二","三","四","五","六"],l=t.getDay(),c=(o[l],"");return c="En"==e?a+"-"+r+"-"+n+"("+i[l]+")":"Cn"==e?a+"-"+r+"-"+n+"("+o[l]+")":t,c}},watch:{},computed:{famous:function(){return this.stories.filter((function(e){return e.upvotes>30}))},Daychker:function(e,t){return this.todo.filter((function(e){return"2021-12-02"==e.creatTime}))},poschker_1:function(){return this.odrList.filter((function(e){return 1==e.NowPos}))},poschker_2:function(){return this.odrList.filter((function(e){return 2==e.NowPos}))},poschker_3:function(){return this.odrList.filter((function(e){return 3==e.NowPos}))}},mounted:function(){this.g=this.getTime(),i["b"].getAll().on("value",this.onDataChange)},beforeDestroy:function(){i["b"].getAll().off("value",this.onDataChange)}},c=l,u=n("2877"),s=Object(u["a"])(c,r,a,!1,null,"20244e3e",null);t["default"]=s.exports},"8a02":function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n("d4ec"),a=n("bee2"),i=n("dc59"),o=i["c"].database().ref("/todos"),l=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"getAll",value:function(){return o}},{key:"getdb",value:function(){return i["a"].ServerValue.TIMESTAMP}},{key:"create",value:function(e){return o.push(e)}},{key:"update",value:function(e,t){return o.child(e).update(t)}},{key:"delete",value:function(e){return o.child(e).remove()}},{key:"deleteAll",value:function(){return o.remove()}}]),e}(),c=new l},a4d3:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),o=n("c430"),l=n("83ab"),c=n("4930"),u=n("fdbf"),s=n("d039"),d=n("5135"),f=n("e8b5"),p=n("861d"),v=n("825a"),h=n("7b0b"),b=n("fc6a"),g=n("c04e"),m=n("5c6c"),y=n("7c73"),k=n("df75"),w=n("241c"),T=n("057f"),x=n("7418"),S=n("06cf"),C=n("9bf2"),_=n("d1e7"),L=n("9112"),O=n("6eeb"),D=n("5692"),A=n("f772"),P=n("d012"),E=n("90e3"),M=n("b622"),N=n("e538"),j=n("746f"),I=n("d44e"),B=n("69f3"),$=n("b727").forEach,F=A("hidden"),H="Symbol",J="prototype",V=M("toPrimitive"),G=B.set,R=B.getterFor(H),W=Object[J],Y=a.Symbol,z=i("JSON","stringify"),K=S.f,U=C.f,q=T.f,Q=_.f,X=D("symbols"),Z=D("op-symbols"),ee=D("string-to-symbol-registry"),te=D("symbol-to-string-registry"),ne=D("wks"),re=a.QObject,ae=!re||!re[J]||!re[J].findChild,ie=l&&s((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=K(W,t);r&&delete W[t],U(e,t,n),r&&e!==W&&U(W,t,r)}:U,oe=function(e,t){var n=X[e]=y(Y[J]);return G(n,{type:H,tag:e,description:t}),l||(n.description=t),n},le=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof Y},ce=function(e,t,n){e===W&&ce(Z,t,n),v(e);var r=g(t,!0);return v(n),d(X,r)?(n.enumerable?(d(e,F)&&e[F][r]&&(e[F][r]=!1),n=y(n,{enumerable:m(0,!1)})):(d(e,F)||U(e,F,m(1,{})),e[F][r]=!0),ie(e,r,n)):U(e,r,n)},ue=function(e,t){v(e);var n=b(t),r=k(n).concat(ve(n));return $(r,(function(t){l&&!de.call(n,t)||ce(e,t,n[t])})),e},se=function(e,t){return void 0===t?y(e):ue(y(e),t)},de=function(e){var t=g(e,!0),n=Q.call(this,t);return!(this===W&&d(X,t)&&!d(Z,t))&&(!(n||!d(this,t)||!d(X,t)||d(this,F)&&this[F][t])||n)},fe=function(e,t){var n=b(e),r=g(t,!0);if(n!==W||!d(X,r)||d(Z,r)){var a=K(n,r);return!a||!d(X,r)||d(n,F)&&n[F][r]||(a.enumerable=!0),a}},pe=function(e){var t=q(b(e)),n=[];return $(t,(function(e){d(X,e)||d(P,e)||n.push(e)})),n},ve=function(e){var t=e===W,n=q(t?Z:b(e)),r=[];return $(n,(function(e){!d(X,e)||t&&!d(W,e)||r.push(X[e])})),r};if(c||(Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),n=function(e){this===W&&n.call(Z,e),d(this,F)&&d(this[F],t)&&(this[F][t]=!1),ie(this,t,m(1,e))};return l&&ae&&ie(W,t,{configurable:!0,set:n}),oe(t,e)},O(Y[J],"toString",(function(){return R(this).tag})),O(Y,"withoutSetter",(function(e){return oe(E(e),e)})),_.f=de,C.f=ce,S.f=fe,w.f=T.f=pe,x.f=ve,N.f=function(e){return oe(M(e),e)},l&&(U(Y[J],"description",{configurable:!0,get:function(){return R(this).description}}),o||O(W,"propertyIsEnumerable",de,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Y}),$(k(ne),(function(e){j(e)})),r({target:H,stat:!0,forced:!c},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var n=Y(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!le(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!l},{create:se,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:fe}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pe,getOwnPropertySymbols:ve}),r({target:"Object",stat:!0,forced:s((function(){x.f(1)}))},{getOwnPropertySymbols:function(e){return x.f(h(e))}}),z){var he=!c||s((function(){var e=Y();return"[null]"!=z([e])||"{}"!=z({a:e})||"{}"!=z(Object(e))}));r({target:"JSON",stat:!0,forced:he},{stringify:function(e,t,n){var r,a=[e],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=t,(p(t)||void 0!==e)&&!le(e))return f(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!le(t))return t}),a[1]=t,z.apply(null,a)}})}Y[J][V]||L(Y[J],V,Y[J].valueOf),I(Y,H),P[F]=!0},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,o=i.toString,l=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(e){return""}}})},bee2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("7a82");function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},c20d:function(e,t,n){var r=n("da84"),a=n("58a8").trim,i=n("5899"),o=r.parseInt,l=/^[+-]?0[Xx]/,c=8!==o(i+"08")||22!==o(i+"0x16");e.exports=c?function(e,t){var n=a(String(e));return o(n,t>>>0||(l.test(n)?16:10))}:o},d4ec:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},e01a:function(e,t,n){"use strict";var r=n("23e7"),a=n("83ab"),i=n("da84"),o=n("5135"),l=n("861d"),c=n("9bf2").f,u=n("e893"),s=i.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new s(e):void 0===e?s():s(e);return""===e&&(d[t]=!0),t};u(f,s);var p=f.prototype=s.prototype;p.constructor=f;var v=p.toString,h="Symbol(test)"==String(s("test")),b=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=v.call(e);if(o(d,e))return"";var n=h?t.slice(7,-1):t.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e25e:function(e,t,n){var r=n("23e7"),a=n("c20d");r({global:!0,forced:parseInt!=a},{parseInt:a})},e538:function(e,t,n){var r=n("b622");t.f=r},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);