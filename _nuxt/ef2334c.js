(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{477:function(t,e,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3be1264c",content,!0,{sourceMap:!1})},535:function(t,e,n){"use strict";n(477)},536:function(t,e,n){var l=n(19)((function(i){return i[1]}));l.push([t.i,".create-group .item{margin-bottom:15px}.create-group .item p{margin-bottom:8px}",""]),l.locals={},t.exports=l},615:function(t,e,n){"use strict";n.r(e);n(46),n(32),n(39),n(64),n(31),n(65);var l=n(23),r=(n(40),n(9),n(81));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={data:function(){var t;return t={test_lang:1,test_type:"test-1",dialog_test:!1,form_id:null,dialog_add:null,form:{},test_form:{difficult:1},teacher_test_data:[],loading:!1,rows:[],filter:{},groups:[],students:[]},Object(l.a)(t,"filter",{page:1}),Object(l.a)(t,"pickerOptions",{shortcuts:[{text:"Bugun",onClick:function(t){t.$emit("pick",new Date)}},{text:"Ertaga",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}}]}),t},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({active_user:function(){return"independent"!==this.$store.state.auth.user.role.name||this.$store.state.auth.user.active},role:function(){return this.$store.state.auth.user.role.name}},Object(r.b)("dictionary",["dic_language"])),created:function(){this.fetchItems()},methods:{fetchItems:function(){var t=this;this.loading=!0,this.$axios.get("/my_tests/").then((function(e){t.rows=[e.data]})).finally((function(){t.loading=!1}))},getGroups:function(){var t=this;this.loading=!0,this.$axios.get("/group/?limit=400").then((function(e){t.groups=e.data.results})).finally((function(){t.loading=!1}))},getStudent:function(){var t=this;this.loading=!0;var e=this.test_form.group;this.$axios.get("/students/?group=".concat(e,"&limit=400")).then((function(e){t.students=e.data.results})).finally((function(){t.loading=!1}))}}},d=c,f=(n(535),n(14)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-div"},[n("header",{staticClass:"flex justify-between items-center"},[n("h1",{staticClass:"Title"},[t._v("Mashq Testlar")]),t._v(" "),n("div",[n("button",{staticClass:"add-btn px-2 ml-4",on:{click:function(e){t.dialog_test=!0}}},[t._v("\n        Test ishlash\n      ")])])]),t._v(" "),n("div",{staticClass:"parrent-card"},[t._m(0),t._v(" "),[n("el-table",{staticClass:"w-full",attrs:{data:t.rows}},[n("el-table-column",{attrs:{prop:"test_type",label:"Test turi"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ball",label:"Topgan savollar soni"}}),t._v(" "),n("el-table-column",{attrs:{prop:"test_count",label:"Testlar soni"}}),t._v(" "),n("el-table-column",{attrs:{prop:"start_time",label:"Test ishlagan vaqti"}}),t._v(" "),n("el-table-column",{attrs:{width:"80px",prop:"practical_hours"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"flex justify-center",staticStyle:{"text-align":"right",margin:"0"}},t._l(t.dic_language,(function(l,r){return n("el-tag",{key:l.id,class:{"ml-1":0!==r},on:{click:function(n){return t.$router.push("/test/PracticeTest/"+e.row.test_type+"/check/?lang="+l.id)}}},[t._v("\n                  "+t._s(l.name)+"\n                ")])})),1),t._v(" "),n("button",{attrs:{slot:"reference"},slot:"reference"},[n("i",{staticClass:"el-icon-view text-lg"})])])]}}])})],1)]],2),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,visible:t.dialog_test,title:"Test turini tanlang:",width:"min(90%, 1300px)"},on:{"update:visible":function(e){t.dialog_test=e}}},[n("div",{staticClass:"flex w-full items-center flex-col"},[t.active_user?t._e():n("div",{staticClass:"text-center px-12"},[n("el-alert",{attrs:{closable:!1,title:"Siz aktiv foydalanuvchi emassiz, shu sababdan sizga har safar bir xil\n        test savollari beriladi, aktiv foydalanuvchiga aylanish uchun iltimos\n        to’lovni amalga oshiring",type:"warning"}})],1),t._v(" "),t.active_user?n("div",{staticClass:"item mr-2"},[n("el-radio-group",{model:{value:t.test_type,callback:function(e){t.test_type=e},expression:"test_type"}},[n("el-radio-button",{attrs:{label:"test-1"}},[t._v("Test-1")]),t._v(" "),n("el-radio-button",{attrs:{label:"test-2"}},[t._v("Test-2")]),t._v(" "),n("el-radio-button",{attrs:{label:"test-3"}},[t._v("Test-3")]),t._v(" "),n("el-radio-button",{attrs:{label:"final_test"}},[t._v("Final test")])],1)],1):t._e(),t._v(" "),n("div",{staticClass:"item mr-2 mt-4"},[n("el-radio-group",{attrs:{size:"mini"},model:{value:t.test_lang,callback:function(e){t.test_lang=e},expression:"test_lang"}},t._l(t.dic_language,(function(e){return n("el-radio-button",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.slug))])})),1)],1),t._v(" "),n("button",{staticClass:"add-btn px-2 mt-7",on:{click:function(e){return t.$router.push("/test/PracticeTest/"+t.test_type+"?test_lang="+t.test_lang)}}},[t._v("\n        Testni boshlash\n      ")])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex justify-between"},[n("h1",[t._v("Mashq Testlar")])])}],!1,null,null,null);e.default=component.exports}}]);