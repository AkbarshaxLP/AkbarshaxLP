(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{446:function(t,e,o){"use strict";var n=o(34);o(280),o(9),o(31);e.a=function t(e){if(!e)return e;var o;if([Number,String,Boolean].forEach((function(t){e instanceof t&&(o=t(e))})),void 0===o)if("[object Array]"===Object.prototype.toString.call(e))o=[],e.forEach((function(e,n,r){o[n]=t(e)}));else if("object"==Object(n.a)(e))if(e.nodeType&&"function"==typeof e.cloneNode)o=e.cloneNode(!0);else if(e.prototype)o=e;else if(e instanceof Date)o=new Date(e);else for(var i in o={},e)o[i]=t(e[i]);else o=e;return o}},470:function(t,e,o){var content=o(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("09e53d4a",content,!0,{sourceMap:!1})},509:function(t,e,o){t.exports=o.p+"img/back_map.82f4b1a.png"},510:function(t,e,o){"use strict";o(470)},511:function(t,e,o){var n=o(19)((function(i){return i[1]}));n.push([t.i,'.school_reg .info[data-v-9fc27b84]{font-family:"Inter";font-style:normal;font-size:15px;text-align:center;line-height:20px;margin:0 auto 20px;color:#eb5757;display:block;max-width:430px}.school_reg .item[data-v-9fc27b84]{margin-bottom:1rem}.school_reg .item input[data-v-9fc27b84]{border-radius:10px}.school_reg .item p[data-v-9fc27b84]{font-weight:600;font-size:15px;line-height:20px;margin-bottom:10px;color:#4f4f4f}.perosn-btn[data-v-9fc27b84]{margin-left:0!important}.login-page header[data-v-9fc27b84]{padding-top:20px;padding-bottom:20px;margin-bottom:100px}.back_map[data-v-9fc27b84]{position:absolute;left:0;width:min(80%,800px)}.login-form[data-v-9fc27b84]{background-image:url();max-width:500px}.login-form h1[data-v-9fc27b84]{font-weight:600;font-size:24px;line-height:33px;margin-bottom:40px;color:#333}.login-form .form-item[data-v-9fc27b84]{margin-bottom:1rem}.login-form input[data-v-9fc27b84]{position:relative;z-index:3;border:.5px solid #bdbdbd;box-sizing:border-box;padding-left:25px;border-radius:17px;background:#fff;width:100%;height:55px;font-weight:600;font-size:16px;line-height:19px;color:#111}.singin[data-v-9fc27b84]{background:#2ba579;border-radius:15px;border:none;color:#fff;margin-right:10px}.singin[data-v-9fc27b84],.singup[data-v-9fc27b84]{box-shadow:0 2px 4px rgba(16,77,41,.25);font-weight:700;font-size:14px;line-height:19px;padding:15px 60px}.singup[data-v-9fc27b84]{background:transparent;border-radius:15px;border:1px solid grey;color:#2ba579;width:100%}.dots0[data-v-9fc27b84],.dots1[data-v-9fc27b84]{position:absolute;max-width:70px}.dots0[data-v-9fc27b84]{right:0;top:10%}.dots1[data-v-9fc27b84]{left:0;bottom:10%}@media(max-width:768px){.login-form h1[data-v-9fc27b84],.login-page header[data-v-9fc27b84]{margin-bottom:20px}}',""]),n.locals={},t.exports=n},604:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"container mx-auto"},[e("img",{attrs:{src:o(193)}})])}],r=o(3),l=(o(33),o(40),o(9),o(46),o(446)),c={data:function(){return{reg_dialog:!1,school_dialog:!1,person_dialog:!1,pass_recovery_dialog:!1,form1:{},form2:{},form3:{},login_form:{},loading:!1}},computed:{role:function(){return this.$store.state.auth.user?this.$store.state.auth.user.role.name:""}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.login.validate().then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=12;break}return e.prev=1,t.loading=!0,e.next=5,t.$auth.loginWith("local",{data:t.login_form}).then((function(e){t.$notify({title:"Qoniqarli!",type:"success"}),t.$router.push("/")})).catch((function(e){var o=e.response.data,n=o[Object.keys(o)[0]];t.$notify.error({message:n||"Произошла ошибка"})})).finally((function(){t.loading=!1,t.closeAllDialog()}));case 5:e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.$message({type:"error",message:"Login yoki Parol xato kiritilgan!"}),t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},pass_recovery:function(){var t=this;this.$refs.person_form.validate().then((function(e){if(e){t.loading=!0;var data=Object(l.a)(t.form3);t.$axios.post("/phone_recovery/",data).then((function(e){t.$notify({title:"Qoniqarli!",message:"Yangi Parol sms qilib jo`natildi",type:"success"})})).catch((function(e){var o=e.response.data,n=o[Object.keys(o)[0]];t.$notify.error({message:n||"Произошла ошибка"})})).finally((function(){t.loading=!1,t.closeAllDialog()}))}}))},save_school:function(){var t=this;this.$refs.school_form.validate().then((function(e){if(e){t.loading=!0;var data=Object(l.a)(t.form1);t.$axios.post("",data).then((function(t){})).catch((function(e){var o=e.response.data,n=o[Object.keys(o)[0]];t.$notify.error({message:n||"Произошла ошибка"})})).finally((function(){t.loading=!1,t.closeAllDialog()}))}}))},save_person:function(){var t=this;this.$refs.person_form.validate().then((function(e){if(e){t.loading=!0;var data=Object(l.a)(t.form2);t.$axios.post("/validate_phone/",data).then((function(e){t.$notify({title:"Qoniqarli!",message:"Login va Parol sms qilib jo`natildi",type:"success"})})).catch((function(e){var o=e.response.data,n=o[Object.keys(o)[0]];t.$notify.error({message:n||"Произошла ошибка"})})).finally((function(){t.loading=!1,t.closeAllDialog()}))}}))},closeAllDialog:function(){this.reg_dialog=!1,this.school_dialog=!1,this.person_dialog=!1,this.pass_recovery_dialog=!1}}},d=c,f=(o(510),o(14)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.lock.fullscreen",value:t.loading,expression:"loading",modifiers:{lock:!0,fullscreen:!0}}],staticClass:"login-page py-4"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("img",{staticClass:"back_map",attrs:{src:o(509)}}),t._v(" "),n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{md:10}},[n("ValidationObserver",{ref:"login"},[n("div",{staticClass:"login-form"},[n("h1",{staticClass:"text-center"},[t._v("Tizimga kirish")]),t._v(" "),n("div",{staticClass:"form-item"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login_form.username,expression:"login_form.username"}],class:{invalid:o[0]},attrs:{type:"text",placeholder:"Login"},domProps:{value:t.login_form.username},on:{input:function(e){e.target.composing||t.$set(t.login_form,"username",e.target.value)}}})]}}])})],1),t._v(" "),n("div",{staticClass:"form-item"},[n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login_form.password,expression:"login_form.password"}],class:{invalid:o[0]},attrs:{type:"password",placeholder:"Parol"},domProps:{value:t.login_form.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()},input:function(e){e.target.composing||t.$set(t.login_form,"password",e.target.value)}}})]}}])})],1),t._v(" "),n("div",{staticClass:"form-item actions"},[n("button",{staticClass:"singin",on:{click:function(e){return t.submit()}}},[t._v("Kirish")]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){t.pass_recovery_dialog=!0}}},[t._v("Parolni unutdingizmi?")])]),t._v(" "),n("div",{staticClass:"form-item"},[n("button",{staticClass:"singup",on:{click:function(e){t.person_dialog=!0}}},[t._v("\n                Ro`yhatdan o`tish\n              ")])])])])],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"Tizimdan foydalanish turini tanlang",visible:t.reg_dialog,width:"min(90% , 538px)",center:""},on:{"update:visible":function(e){t.reg_dialog=e}}},[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"my-2"},[n("el-button",{staticClass:"w-full perosn-btn",attrs:{type:"primary"},on:{click:function(e){t.person_dialog=!0}}},[t._v("Oddiy fuqaro sifatida")])],1)])]),t._v(" "),n("el-dialog",{attrs:{title:"Avtomaktab sifatida ro'yxatdan o'tish",visible:t.school_dialog,width:"min(90% , 538px)",center:""},on:{"update:visible":function(e){t.school_dialog=e}}},[n("ValidationObserver",{ref:"school_form"},[n("div",{staticClass:"school_reg"},[n("p",{staticClass:"info"},[t._v("\n          So'ralgan ma`lumotlarni to'ldiring va bizning mutaxasislar siz bilan\n          bog'lanishadi\n        ")]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("Viloyatni tanlang")]),t._v(" "),n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-select",{staticClass:"w-full",class:{invalid:o[0]},model:{value:t.form1.region,callback:function(e){t.$set(t.form1,"region",e)},expression:"form1.region"}},t._l(12,(function(e){return n("el-option",{key:e},[t._v(t._s(e))])})),1)]}}])})],1),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("Avtomaktab nomi")]),t._v(" "),n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-input",{class:{invalid:o[0]},attrs:{placeholder:"Avtomaktab nomi"},model:{value:t.form1.name,callback:function(e){t.$set(t.form1,"name",e)},expression:"form1.name"}})]}}])})],1),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("Telefon raqam")]),t._v(" "),n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"+998 (##) ###-##-##",expression:"`+998 (##) ###-##-##`"}],class:{invalid:o[0]},attrs:{placeholder:"Telefon raqam"},model:{value:t.form1.phone,callback:function(e){t.$set(t.form1,"phone",e)},expression:"form1.phone"}})]}}])})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.school_dialog=!1}}},[t._v("Bekor qilish")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save_school()}}},[t._v("Saqlash")])],1)])])],1),t._v(" "),n("el-dialog",{attrs:{title:"Oddiy fuqaro sifatida ro'yxatdan o'tish",visible:t.person_dialog,width:"min(90% , 538px)",center:""},on:{"update:visible":function(e){t.person_dialog=e}}},[n("ValidationObserver",{ref:"person_form"},[n("div",{staticClass:"school_reg person_reg"},[n("div",{staticClass:"item"},[n("p",[t._v("Telefon raqam")]),t._v(" "),n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"+998 (##) ###-##-##",expression:"`+998 (##) ###-##-##`"}],class:{invalid:o[0]},attrs:{placeholder:"Telefon raqam"},model:{value:t.form2.phone,callback:function(e){t.$set(t.form2,"phone",e)},expression:"form2.phone"}})]}}])})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.person_dialog=!1}}},[t._v("Bekor qilish")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save_person()}}},[t._v("Saqlash")])],1)])])],1),t._v(" "),n("el-dialog",{attrs:{title:"Parolni tiklash",visible:t.pass_recovery_dialog,width:"min(90% , 538px)",center:""},on:{"update:visible":function(e){t.pass_recovery_dialog=e}}},[n("ValidationObserver",{ref:"person_form"},[n("div",{staticClass:"school_reg person_reg"},[n("p",{staticClass:"info"},[t._v("\n          Oldin ro`yhatdan o`tgan telefon raqamingizni kiriting\n        ")]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("Telefon raqam")]),t._v(" "),n("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"+998 (##) ###-##-##",expression:"`+998 (##) ###-##-##`"}],class:{invalid:o[0]},attrs:{placeholder:"Telefon raqam"},model:{value:t.form3.phone,callback:function(e){t.$set(t.form3,"phone",e)},expression:"form3.phone"}})]}}])})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.pass_recovery_dialog=!1}}},[t._v("Bekor qilish")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.pass_recovery()}}},[t._v("Saqlash")])],1)])])],1)],1)}),n,!1,null,"9fc27b84",null);e.default=component.exports}}]);