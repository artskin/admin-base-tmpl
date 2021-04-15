import{C as e,V as t,A as s,P as n,n as r,W as a,i as o,U as i}from"./index.6cdb2d7a.js";import"./vendor.294aa3f7.js";var l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,u=(e,t,s,n)=>{for(var r,a=n>1?void 0:n?c(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(a=(n?r(t,s,a):r(a))||a);return n&&a&&l(t,s,a),a};let d=class extends t{constructor(){super(...arguments),this.levelList=[],this.langList=[]}get language(){return s.language}created(){}mounted(){document.documentElement.setAttribute("lang",this.language),this.langList=Object.keys(this.$i18n.messages)}handleSetLanguage(e){document.documentElement.setAttribute("lang",e),this.$i18n.locale=e,s.SetLanguage(e).then((t=>{this.$emit("langChanged",e)})).catch((e=>{})),this.$message({showClose:!0,message:this.$tc("switchLang"),type:"success",duration:800})}};u([n({default:"14px"})],d.prototype,"size",2),d=u([e({})],d);const g={};var p=r(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dropdown",{staticClass:"international",attrs:{trigger:"click"},on:{command:e.handleSetLanguage}},[s("div",{staticClass:"el-dropdown-link"},[e._t("default",[s("i",{ref:"icon",staticClass:"el-icon-setting",style:"font-size:"+e.size})])],2),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.langList,(function(t,n){return s("el-dropdown-item",{key:n,attrs:{disabled:e.language===t,command:t}},[e._v(e._s(e.$t("lang")[t]))])})),1)],1)}),[],!1,(function(e){for(let t in g)this[t]=g[t]}),"7d27a339",null,null).exports,h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,f=(e,t,s,n)=>{for(var r,a=n>1?void 0:n?m(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(a=(n?r(t,s,a):r(a))||a);return n&&a&&h(t,s,a),a};let w=class extends t{constructor(){super(...arguments),this.validateUsername=(e,t,s)=>{o(t)?s():s(new Error("Please enter the correct user name"))},this.validatePassword=(e,t,s)=>{t.length<6?s(new Error("The password can not be less than 6 digits")):s()},this.loginForm={username:"admin",password:"root123"},this.loginRules={username:[{validator:this.validateUsername,trigger:"blur"}],password:[{validator:this.validatePassword,trigger:"blur"}]},this.passwordType="password",this.loading=!1,this.showDialog=!1,this.otherQuery={},this.currentLang=""}onRouteChange(e){const t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))}get language(){return s.language}mounted(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus(),this.changeLanguage(this.language)}changeLanguage(e){this.currentLang=e.toUpperCase()}showPwd(){"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((()=>{this.$refs.password.focus()}))}handleLogin(){console.log("登录"),this.$refs.loginForm.validate((async e=>{if(!e)return!1;this.loading=!0;try{await i.Login(this.loginForm),this.$router.push({path:this.redirect||"/",query:this.otherQuery})}catch(t){console.log(t)}}))}getOtherQuery(e){return Object.keys(e).reduce(((t,s)=>("redirect"!==s&&(t[s]=e[s]),t)),{})}};f([a("$route",{immediate:!0})],w.prototype,"onRouteChange",1),w=f([e({components:{LangSelect:p}})],w);let v={redirect:"xx"};const y={};var _=r(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("login.title"))+"\n      ")])]),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{ref:"username",attrs:{"prefix-icon":"el-icon-user",name:"username",type:"text",autocomplete:"on",placeholder:"username"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"password",name:"password","prefix-icon":"el-icon-postcard",autocomplete:"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[s("i",{staticClass:"el-input__icon",class:"password"===e.passwordType?"el-icon-turn-off":"el-icon-open",attrs:{slot:"suffix"},on:{click:e.showPwd},slot:"suffix"})])],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary",size:"big"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n      "+e._s(e.$t("login.submitText"))+"\n    ")]),e._v(" "),s("div",{staticClass:"tips"},[s("span",[e._v(e._s(e.$t("login.username"))+": admin ")]),e._v(" "),s("span",[e._v(e._s(e.$t("login.password"))+": any ")]),e._v(" "),s("lang-select",{staticClass:"set-language",attrs:{size:"16px"},on:{langChanged:e.changeLanguage}},[e._v(e._s(e.currentLang))])],1)],1)],1)}),[],!1,(function(e){for(let t in y)this[t]=y[t]}),null,null,null).exports;export default _;export{v as route};