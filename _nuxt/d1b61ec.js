(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{474:function(t,n,o){var content=o(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("2187caf2",content,!0,{sourceMap:!1})},529:function(t,n,o){"use strict";o(474)},530:function(t,n,o){var e=o(19)((function(i){return i[1]}));e.push([t.i,".topic-list .item[data-v-3c553de1]{background:#fff;box-shadow:0 4px 10px hsla(0,0%,91.8%,.3);border-radius:15px;margin-bottom:10px;padding:15px}.topic-list .item p[data-v-3c553de1]{font-weight:400;font-size:16px}.topic-list .item h1[data-v-3c553de1],.topic-list .item p[data-v-3c553de1]{margin:5px 0;font-style:normal;line-height:150%}.topic-list .item h1[data-v-3c553de1]{font-weight:600;font-size:18px;color:#333}",""]),e.locals={},t.exports=e},613:function(t,n,o){"use strict";o.r(n);o(9);var e={data:function(){return{loading:!1,topicList:[]}},created:function(){this.__GET()},methods:{__GET:function(){var t=this;this.loading=!0;var n=this.$route.query.lesson;this.$axios.get("/topic/?lesson=".concat(n)).then((function(n){t.topicList=n.data})).finally((function(){t.loading=!1}))}}},c=(o(529),o(14)),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-div"},[o("ul",{staticClass:"topic-list"},t._l(t.topicList,(function(n,e){return o("li",{key:n.id,staticClass:"item",on:{click:function(o){return t.$router.push("/Lessons/topic/"+n.id)}}},[o("p",[t._v(t._s(e+1)+"-mavzu")]),t._v(" "),o("h1",[t._v("\n        "+t._s(n.name_uz)+"\n      ")])])})),0)])}),[],!1,null,"3c553de1",null);n.default=component.exports}}]);