(function(){"use strict";var e={6677:function(e,t,n){var o=n(9242),a=n(3396);function l(e,t,n,o,l,i){const s=(0,a.up)("BlueprintUpdater");return(0,a.wg)(),(0,a.j4)(s)}var i=n(7139);const s={class:"page"},r={class:"header"},d=(0,a._)("div",{class:"logo"}," Blueprint Updater ",-1),u={class:"github"},c={class:"link",href:"https://github.com/Mefgalm/bpu",target:"_blank"},p={class:"main-block"},f={class:"code-json-block"},b={class:"error-message"},v={class:"update-block"},h={class:"update-center-block"},m={class:"code-json-block"},g={class:"updates-modal-block"},U=(0,a._)("h3",null,"Updates",-1),_={class:"update-buttons"},k={class:"update-rules"},y=["onChange","value"],C=(0,a._)("div",{class:"update-symbol"}," >> ",-1),w=["onChange","value"];function J(e,t,n,o,l,J){const V=(0,a.up)("font-awesome-icon"),x=(0,a.up)("copy-textarea"),O=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[(0,a._)("div",r,[d,(0,a._)("div",u,[(0,a._)("a",c,[(0,a.Wm)(V,{icon:"fa-brands fa-github"}),(0,a.Uk)(" Code ")])])]),(0,a._)("div",p,[(0,a._)("div",f,[(0,a.Wm)(x,{class:"code-block",title:"Blueprint",canEdit:!0,modelValue:l.blueprintCode,"onUpdate:modelValue":t[0]||(t[0]=e=>l.blueprintCode=e)},null,8,["modelValue"]),(0,a._)("div",b,(0,i.zw)(l.errorMessage),1),(0,a.Wm)(x,{class:"json-block",title:"Blueprint Json",canEdit:!1,modelValue:l.blueprintJsonText,"onUpdate:modelValue":t[1]||(t[1]=e=>l.blueprintJsonText=e)},null,8,["modelValue"])]),(0,a._)("div",v,[(0,a._)("div",h,[(0,a._)("div",{class:"updates-link",onClick:t[2]||(t[2]=e=>l.isUpdatesModalVisible=!0)},"Updates"),(0,a._)("button",{onClick:t[3]||(t[3]=(...e)=>J.update&&J.update(...e))},"Update")]),(0,a._)("button",{class:"clear-button",onClick:t[4]||(t[4]=(...e)=>J.clear&&J.clear(...e))},"Clear")]),(0,a._)("div",m,[(0,a.Wm)(x,{class:"code-block",title:"Result",canEdit:!1,modelValue:l.blueprintUpdatedCode,"onUpdate:modelValue":t[5]||(t[5]=e=>l.blueprintUpdatedCode=e)},null,8,["modelValue"]),(0,a.Wm)(x,{class:"json-block",canEdit:!1,title:"Result Json",modelValue:l.blueprintUpdatedJsonText,"onUpdate:modelValue":t[6]||(t[6]=e=>l.blueprintUpdatedJsonText=e)},null,8,["modelValue"])])])]),(0,a.Wm)(O,{visible:l.isUpdatesModalVisible,"onUpdate:visible":t[9]||(t[9]=e=>l.isUpdatesModalVisible=e),type:"clean",width:"40%"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[U,(0,a._)("div",null,[(0,a._)("div",_,[(0,a._)("button",{onClick:t[7]||(t[7]=(...e)=>J.addUpdate&&J.addUpdate(...e))},"New"),(0,a._)("button",{onClick:t[8]||(t[8]=(...e)=>J.clearUpdates&&J.clearUpdates(...e))},"Remove All")]),(0,a._)("div",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.updates,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"update-rule",key:t},[(0,a._)("input",{onChange:e=>J.fromUpdateChanged(e.target.value,t),value:e.from},null,40,y),C,(0,a._)("input",{onChange:e=>J.toUpdateChanged(e.target.value,t),value:e.to},null,40,w),(0,a.Wm)(V,{class:"remove-icon",onClick:e=>J.removeUpdate(t),icon:"fa-solid fa-trash"},null,8,["onClick"])])))),128))])])])])),_:1},8,["visible"])],64)}n(7658);var V=n(6813);const x=n(5361).lW;function O(e){const t=new x(e.slice(1),"base64");return JSON.parse(V.ZP.inflate(t,{to:"string"}))}function M(e){return"0"+x.from(V.ZP.deflate(JSON.stringify(e))).toString("base64")}const T=e=>e&&"object"===typeof e&&!Array.isArray(e);function j(e,t){if(T(e)){for(const n in e)j(e[n],t);t(e)}else if(Array.isArray(e))for(const n of e)j(n,t)}function W(e,t){function n(e){const n=e["name"];if(!n)return;const o=t.get(n);o&&(e["name"]=o)}const o=JSON.parse(JSON.stringify(e));return j(o,n),o}var N=n(270);const E={class:"area-block"},S={class:"title-copy-block"},A={class:"title"},B={key:0},D={key:1},Z=["value","disabled"];function I(e,t,n,o,l,s){const r=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",S,[(0,a._)("div",A,(0,i.zw)(n.title),1),(0,a._)("button",{class:"copy",onClick:t[0]||(t[0]=(...e)=>s.copy&&s.copy(...e))},[(0,a.Wm)(r,{class:"copy-icon",icon:"fa-solid fa-copy"}),l.copied?((0,a.wg)(),(0,a.iD)("span",B,"Copied")):((0,a.wg)(),(0,a.iD)("span",D,"Copy"))])]),(0,a._)("textarea",{value:n.modelValue,disabled:!n.canEdit,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},null,40,Z)])}var P={props:["modelValue","title","canEdit"],emits:["update:modelValue"],data(){return{copied:!1}},methods:{copy(){this.copied=!0,navigator.clipboard.writeText(this.modelValue).then((()=>setTimeout((()=>this.copied=!1),300)))}}},z=n(89);const R=(0,z.Z)(P,[["render",I]]);var H=R,Y={data(){return{blueprintCode:"",blueprintJson:null,blueprintJsonText:"",blueprintUpdatedJson:null,blueprintUpdatedJsonText:"",blueprintUpdatedCode:"",updates:[],isUpdatesModalVisible:!1,errorMessage:""}},components:{Modal:N.u,CopyTextarea:H},watch:{blueprintCode(e){if(this.errorMessage="",e)try{this.blueprintJson=O(e)}catch{this.blueprintJson=null,this.blueprintUpdatedJson=null,this.errorMessage="Invalid Blueprint code"}},blueprintJson(e){this.blueprintJsonText=e?JSON.stringify(e,null,2):""},blueprintUpdatedJson(e){e?(this.blueprintUpdatedCode=M(e),this.blueprintUpdatedJsonText=JSON.stringify(e,null,2)):(this.blueprintUpdatedCode="",this.blueprintUpdatedJsonText="")}},methods:{fromUpdateChanged(e,t){this.updates[t].from=e},toUpdateChanged(e,t){this.updates[t].to=e},addUpdate(){this.updates.push({from:"",to:""}),this.isUpdatesModalVisible=!0},removeUpdate(e){this.updates.splice(e,1)},clearUpdates(){this.updates=[]},clear(){this.blueprintCode="",this.blueprintJson=null,this.blueprintUpdatedJson=null,this.updates=[]},update(){const e=new Map;for(const t of this.updates)e.set(t.from,t.to);this.blueprintUpdatedJson=W(this.blueprintJson,e)}}};const $=(0,z.Z)(Y,[["render",J]]);var F=$,G={name:"App",components:{BlueprintUpdater:F}};const K=(0,z.Z)(G,[["render",l]]);var q=K,L=n(3494),Q=n(7749),X=n(8539),ee=n(4551);L.vI.add(X.kZ_),L.vI.add(X.$aW),L.vI.add(ee.zhw);const te=(0,o.ri)(q);te.component("font-awesome-icon",Q.GN),te.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],l=e[u][2];for(var s=!0,r=0;r<o.length;r++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,i=o[0],s=o[1],r=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var u=r(n)}for(t&&t(o);d<i.length;d++)l=i[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self["webpackChunkfactorio_upgrader"]=self["webpackChunkfactorio_upgrader"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6677)}));o=n.O(o)})();
//# sourceMappingURL=index.d46e6bee.js.map