(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f70dc36"],{"06b9":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-body"},[t._t("body",[t._v(" "+t._s(t.text)+" ")])],2),o("div",{staticClass:"modal-footer"},[t._t("footer",[o("span",{staticClass:"cancel-btn button",on:{click:t.cancel}},[t._v("Cancel")]),o("span",{staticClass:"confirm-btn button",on:{click:t.confirm}},[t._v("Ok")])])],2)])])])])},i=[],a=(o("4de4"),o("b0c0"),{name:"ModalComponent",data:function(){return{text:"",action:"",note:{}}},methods:{deleteNoteOpenModal:function(t){this.note=t,this.action="deleteNote",this.text="Delete ".concat(t.title," ?")},cancelEditNoteOpenModal:function(t){this.note=t,this.action="cancelEditNote",this.text="Cancel ?"},confirm:function(){var t=this;if("deleteNote"===this.action){var e=JSON.parse(localStorage.getItem("notes")),o=e.filter((function(e){return e.id!==t.note.id}));this.$store.dispatch("setNotes",o).then((function(t){localStorage.setItem("notes",JSON.stringify(t))})),console.log("route",this.$route),"dashboard"!==this.$route.name&&this.$router.push("/")}"cancelEditNote"===this.action&&this.$router.push("/")},cancel:function(){this.$emit("closeModal")}}}),s=a,r=(o("c2b9"),o("2877")),c=Object(r["a"])(s,n,i,!1,null,"8861c7be",null);e["a"]=c.exports},"0993":function(t,e){t.exports="data:image/png;base64,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"},"13db":function(t,e,o){},"1a10":function(t,e,o){"use strict";var n=o("555b"),i=o.n(n);i.a},"1dde":function(t,e,o){var n=o("d039"),i=o("b622"),a=o("2d00"),s=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],o=e.constructor={};return o[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1e4b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"wrapper_content"},[o("h1",[t._v("Notes")]),o("div",[o("router-link",{staticClass:"add-note",attrs:{to:"/note/create"}},[o("div",{staticClass:"add-note-btn"},[t._v(" add note ")])])],1),t._l(t.notes,(function(t){return o("div",{key:t.id,staticClass:"note_wrapper"},[o("Note",{attrs:{note:t}})],1)}))],2)])},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note"},[o("div",{staticClass:"note__header"},[o("h4",{staticClass:"note__header_title"},[t._v(t._s(t.note.title))]),o("div",{staticClass:"note__header_actions"},[o("router-link",{staticClass:"edit-btn button",attrs:{to:"/note/"+t.note.id}},[t._v(" edit ")]),o("span",{staticClass:"delete-btn button",on:{click:function(e){return t.deleteNote(t.note)}}},[t._v("delete")])],1)]),t._l(t.note.todos.slice(0,3),(function(t){return o("Todo",{key:t.id,attrs:{todo:t}})})),t.note.todos.length>3?o("div",{staticClass:"dots"},[t._v(" ... ")]):t._e(),o("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],ref:"modalComponent",on:{closeModal:t.closeModal}})],2)},s=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("div",{staticClass:"todo__checkbox"},[t.todo.checked?o("img",{staticClass:"todo__checkbox_img",attrs:{src:t.checkedIcon,alt:"checked"}}):t._e()]),o("div",{staticClass:"todo__text"},[t._v(" "+t._s(t.todo.text)+" ")])])},c=[],l=o("0993"),d={name:"Todo",props:{todo:{type:Object,required:!0}},data:function(){return{checkedIcon:l}}},u=d,f=(o("1a10"),o("2877")),h=Object(f["a"])(u,r,c,!1,null,"fa99c70a",null),v=h.exports,C=o("06b9"),m={name:"Note",components:{Todo:v,ModalComponent:C["a"]},props:{note:{type:Object,required:!0}},data:function(){return{showModal:!1}},methods:{deleteNote:function(t){this.$refs.modalComponent.deleteNoteOpenModal(t),this.showModal=!0},closeModal:function(){this.showModal=!1,this.$refs.modalComponent.action="",this.$refs.modalComponent.note={}}}},g=m,p=(o("6111"),Object(f["a"])(g,a,s,!1,null,"6d2782bb",null)),b=p.exports,I={name:"Dashboard",components:{Note:b},computed:{notes:function(){return this.$store.getters.setDefaultNotes}},data:function(){return{}}},E=I,w=(o("7a7a"),Object(f["a"])(E,n,i,!1,null,"3505874b",null));e["default"]=w.exports},"4de4":function(t,e,o){"use strict";var n=o("23e7"),i=o("b727").filter,a=o("1dde"),s=o("ae40"),r=a("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"555b":function(t,e,o){},"5e7e":function(t,e,o){},6111:function(t,e,o){"use strict";var n=o("13db"),i=o.n(n);i.a},"65f0":function(t,e,o){var n=o("861d"),i=o("e8b5"),a=o("b622"),s=a("species");t.exports=function(t,e){var o;return i(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!i(o.prototype)?n(o)&&(o=o[s],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},"7a7a":function(t,e,o){"use strict";var n=o("95f5"),i=o.n(n);i.a},"95f5":function(t,e,o){},ae40:function(t,e,o){var n=o("83ab"),i=o("d039"),a=o("5135"),s=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,e){if(a(r,t))return r[t];e||(e={});var o=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,d=a(e,0)?e[0]:c,u=a(e,1)?e[1]:void 0;return r[t]=!!o&&!i((function(){if(l&&!n)return!0;var t={length:-1};l?s(t,1,{enumerable:!0,get:c}):t[1]=1,o.call(t,d,u)}))}},b0c0:function(t,e,o){var n=o("83ab"),i=o("9bf2").f,a=Function.prototype,s=a.toString,r=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&i(a,c,{configurable:!0,get:function(){try{return s.call(this).match(r)[1]}catch(t){return""}}})},b727:function(t,e,o){var n=o("0366"),i=o("44ad"),a=o("7b0b"),s=o("50c4"),r=o("65f0"),c=[].push,l=function(t){var e=1==t,o=2==t,l=3==t,d=4==t,u=6==t,f=5==t||u;return function(h,v,C,m){for(var g,p,b=a(h),I=i(b),E=n(v,C,3),w=s(I.length),A=0,x=m||r,j=e?x(h,w):o?x(h,0):void 0;w>A;A++)if((f||A in I)&&(g=I[A],p=E(g,A,b),t))if(e)j[A]=p;else if(p)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:c.call(j,g)}else if(d)return!1;return u?-1:l||d?d:j}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c2b9:function(t,e,o){"use strict";var n=o("5e7e"),i=o.n(n);i.a},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);