(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(t,e,n){},182:function(t,e,n){"use strict";var i=n(3),c=n(74)(!0);i(i.P,"Array",{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(96)("includes")},185:function(t,e,n){"use strict";n(182);var i=n(184),c={name:"z-button",props:{loading:{type:Boolean,default:!1},type:{type:String,default:"default",validator:function(t){var e=["default","primary","danger"],n=e.includes(t);return n||console.error("按钮类型只能选择[".concat(e,"]").concat(e.length,"种类型")),n}},size:{type:String,default:"middle",validator:function(t){var e=["small","middle","large"],n=e.includes(t);return n||console.error("按钮类型只能选择[".concat(e,"]").concat(e.length,"种类型")),n}},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{"z-icon":i.a},methods:{click:function(){this.$emit("click")}}},s=(n(186),n(1)),a=Object(s.a)(c,function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("button",{class:(t={"z-btn":!0},t["z-btn-"+e.type]=!0,t["z-btn-"+e.size]=!0,t["z-btn-ghost"]=e.ghost,t["z-btn-ghost-"+e.type]=e.ghost,t["z-btn-disabled"]=e.disabled,t["z-btn-"+e.type+"-loading"]=e.loading,t),attrs:{disabled:e.disabled||e.loading},on:{click:e.click}},[e.loading?i("z-icon",{staticClass:"z-btn-loading",attrs:{spinning:"",name:"loading_mum"}}):e._e(),e._v(" "),e._t("default")],2)},[],!1,null,"216b5134",null);e.a=a.exports},186:function(t,e,n){"use strict";var i=n(181);n.n(i).a},198:function(t,e,n){},217:function(t,e,n){"use strict";var i=n(198);n.n(i).a},228:function(t,e,n){"use strict";n.r(e);var i={name:"Switch",data:function(){return{isChecked:this.value}},props:{value:{type:Boolean,default:!1}},watch:{value:function(t){this.isChecked=t}},methods:{switchHandle:function(){this.isChecked=!this.isChecked,this.$emit("input",this.isChecked),this.$emit("change",this.isChecked)}}},c=(n(217),n(1)),s={data:function(){return{checked:!1}},components:{"z-switch":Object(c.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"z-switch-swrap"},[this._t("default"),this._v(" "),e("button",{class:{"z-switch":!0,"z-switch-checked-true":this.isChecked,"z-switch-checked-false":!this.isChecked},attrs:{role:"button"},on:{click:this.switchHandle}},[e("span",{staticClass:"circleBtn"})])],2)},[],!1,null,"2b5b2601",null).exports,"z-button":n(185).a},methods:{triggerHandle:function(){this.checked=!this.checked}}},a=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("z-switch",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[n("div",{staticStyle:{"margin-right":".5em"}},[t._v("点击我")])])],1),t._v(" "),n("z-button",{on:{click:t.triggerHandle}},[t._v("通过checked改变")])],1)},[],!1,null,null,null);e.default=a.exports}}]);