(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{182:function(t,e,n){},183:function(t,e,n){"use strict";var a=n(3),o=n(74)(!0);a(a.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(96)("includes")},184:function(t,e,n){"use strict";n(183);var a=n(185),o={name:"z-button",props:{loading:{type:Boolean,default:!1},type:{type:String,default:"default",validator:function(t){var e=["default","primary","danger"],n=e.includes(t);return n||console.error("按钮类型只能选择[".concat(e,"]").concat(e.length,"种类型")),n}},size:{type:String,default:"middle",validator:function(t){var e=["small","middle","large"],n=e.includes(t);return n||console.error("按钮类型只能选择[".concat(e,"]").concat(e.length,"种类型")),n}},ghost:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{"z-icon":a.a},methods:{click:function(){this.$emit("click")}}},i=(n(186),n(1)),l=Object(i.a)(o,function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("button",{class:(t={"z-btn":!0},t["z-btn-"+e.type]=!0,t["z-btn-"+e.size]=!0,t["z-btn-ghost"]=e.ghost,t["z-btn-ghost-"+e.type]=e.ghost,t["z-btn-disabled"]=e.disabled,t["z-btn-"+e.type+"-loading"]=e.loading,t),attrs:{disabled:e.disabled||e.loading},on:{click:e.click}},[e.loading?a("z-icon",{staticClass:"z-btn-loading",attrs:{spinning:"",name:"loading_mum"}}):e._e(),e._v(" "),e._t("default")],2)},[],!1,null,"216b5134",null);e.a=l.exports},186:function(t,e,n){"use strict";var a=n(182);n.n(a).a},238:function(t,e,n){"use strict";n.r(e);n(25);var a=n(184),o={data:function(){return{files:[]}},props:{multiple:{type:Boolean,default:!0},method:{type:String,default:"POST"},url:{type:String,default:""},async:{type:Boolean,default:!0}},components:{"z-button":a.a},mounted:function(){var t=this.createXMLHttpRequest();console.log(t)},methods:{click:function(){this.$refs.file.click()},change:function(t){var e=this,n=t.target.files;this.files=Array.prototype.slice.call(n);var a=this.createFormData(this.files);this.createXMLHttpRequest(a).then(function(t){e.uploadAfter&&e.uploadAfter(t)})},createFormData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=new FormData;return t.map(function(t){e.append("file",t)}),e},createXMLHttpRequest:function(t){var e=this,n=new XMLHttpRequest;return new Promise(function(a,o){var i=e||{},l=i.url,r=i.method,s=i.async;e.uploadBefore&&(t=e.uploadBefore(fileDatas,n)),n.open(r,l,s),n.send(t),n.onreadystatechange=function(t){var e=t.target,n=t.readyState;4===n&&resoleve(e)}})}}},i=n(1),l={components:{"z-upload":Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",multiple:t.multiple},on:{change:t.change}}),t._v(" "),n("z-button",{attrs:{type:"primary"},on:{click:t.click}},[t._v("点击上传")]),t._v(" "),n("div",t._l(t.files,function(e,a){return n("div",{key:a},[t._v(t._s(e.name)+" / "+t._s(e.type)+" / "+t._s(e.size))])}),0)],1)},[],!1,null,"66bf1044",null).exports,"z-button":a.a},methods:{}},r=Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[e("z-upload")],1)])},[],!1,null,"30f6e3fc",null);e.default=r.exports}}]);