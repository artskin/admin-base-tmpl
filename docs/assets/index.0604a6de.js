var e,t,r,n=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,a=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&a(e,r,t[r]);return e};import{V as c,C as d,i as p,j as u,A as m,M as h,g,a as _,b as v,c as b,e as f,W as y,d as E,P as O,p as C,m as T,f as w,n as S,h as L,E as P}from"./vendor.d6aee48f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const n=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,o)=>{const s=new URL(e,n);if(self[t].moduleMap[s])return r(self[t].moduleMap[s]);const a=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){o(new Error(`Failed to import: ${e}`)),i(l)},onload(){r(self[t].moduleMap[s]),i(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");var x=Object.defineProperty,k=Object.getOwnPropertyDescriptor;let D=class extends c{};D=((e,t,r,n)=>{for(var i,o=n>1?void 0:n?k(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&x(t,r,o),o})([d],D);function j(e,t,r,n,i,o,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}const R={};var A=j(D,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),[],!1,(function(e){for(let t in R)this[t]=R[t]}),null,null,null).exports;c.use(p);var I=new p.Store({});let $;const M={},B=function(e,t){if(!t)return e();if(void 0===$){const e=document.createElement("link").relList;$=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in M)return;M[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":$,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},N=e=>u.set("sidebar_status",e),U="admin_access_token",V=()=>u.remove(U);var G=Object.defineProperty,z=Object.getOwnPropertyDescriptor,H=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?z(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&G(t,r,o),o};const F=(null==(e=window.appConf)?void 0:e.lang)||"en";var K,q;(q=K||(K={}))[q.Mobile=0]="Mobile",q[q.Desktop=1]="Desktop",q[q.language=2]="language";let W=class extends v{constructor(){super(...arguments),this.sidebar={opened:"closed"!==u.get("sidebar_status"),withoutAnimation:!1},this.device=1,this.language=u.get("language")||F,this.theme="themeDefault",this.primaryColor=getComputedStyle(document.body).getPropertyValue("--primary")||"blue"}TOGGLE_SIDEBAR(e){this.sidebar.opened=!this.sidebar.opened,this.sidebar.withoutAnimation=e,this.sidebar.opened?N("opened"):N("closed")}CLOSE_SIDEBAR(e){this.sidebar.opened=!1,this.sidebar.withoutAnimation=e,N("closed")}TOGGLE_DEVICE(e){this.device=e}SET_THEME(e){this.theme=e,function(e){document.body.classList.length?document.body.classList.replace(document.body.classList[0],e):document.body.classList.add(e)}(e),this.primaryColor=getComputedStyle(document.body).getPropertyValue("--primary")}SET_LANGUAGE(e){this.language=e,u.set("language",e)}ToggleSideBar(e){this.TOGGLE_SIDEBAR(e)}CloseSideBar(e){this.CLOSE_SIDEBAR(e)}ToggleDevice(e){this.TOGGLE_DEVICE(e)}async SetLanguage(e){return e}async SetTheme(e){return e}};H([_],W.prototype,"TOGGLE_SIDEBAR",1),H([_],W.prototype,"CLOSE_SIDEBAR",1),H([_],W.prototype,"TOGGLE_DEVICE",1),H([_],W.prototype,"SET_THEME",1),H([_],W.prototype,"SET_LANGUAGE",1),H([m],W.prototype,"ToggleSideBar",1),H([m],W.prototype,"CloseSideBar",1),H([m],W.prototype,"ToggleDevice",1),H([m({commit:"SET_LANGUAGE"})],W.prototype,"SetLanguage",1),H([m({commit:"SET_THEME"})],W.prototype,"SetTheme",1),W=H([h({dynamic:!0,store:I,name:"app"})],W);const X=g(W);var Y=Object.defineProperty,J=Object.getOwnPropertyDescriptor;let Q=class extends c{};Q=((e,t,r,n)=>{for(var i,o=n>1?void 0:n?J(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Y(t,r,o),o})([d({name:"AppMain"})],Q);const Z={};var ee=j(Q,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"app-main"},[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t("router-view")],1)],1)}),[],!1,(function(e){for(let t in Z)this[t]=Z[t]}),"5d7d7d2d",null,null).exports;const te=b.create({baseURL:"",timeout:5e3});te.interceptors.request.use((e=>(le.token&&(e.headers["X-Access-Token"]=le.token),e)),(e=>{Promise.reject(e)})),te.interceptors.response.use((e=>{const t=e.data;return 2e3!=t.code?(f.Message({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||f.MessageBox.confirm("You have been logged out, try to login again.","Log out",{confirmButtonText:"Relogin",cancelButtonText:"Cancel",type:"warning"}).then((()=>{le.ResetToken(),location.reload()})),Promise.reject(new Error(t.message||"Error"))):e.data}),(e=>(f.Message({message:e.message,type:"error",duration:5e3}),Promise.reject(e))));const re=null==(t=window.appConf)?void 0:t.api,ne=()=>te({url:re.logout,method:"post"});var ie=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,se=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?oe(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&ie(t,r,o),o};let ae=class extends v{constructor(){super(...arguments),this.token=u.get(U)||"",this.name="",this.uid="",this.avatar="",this.introduction="",this.roles=[]}SET_TOKEN(e){this.token=e,(e=>{u.set(U,e)})(e)}SET_UID(e){this.uid=e,(e=>{u.set("uid",e)})(e)}SET_NAME(e){this.name=e}SET_AVATAR(e){this.avatar=e}SET_INTRODUCTION(e){this.introduction=e}SET_ROLES(e){this.roles=e}async Login(e){let{username:t,password:r}=e;t=t.trim();const{data:n}=await(e=>te({url:re.login,method:"post",data:e}))({username:t,password:r});this.SET_TOKEN(n.accessToken),this.SET_UID(n.uid)}ResetToken(){V(),this.SET_TOKEN(""),this.SET_ROLES([])}async GetUserInfo(){if(""===this.token)throw Error("GetUserInfo: token is undefined!");const{data:e}=await(e=>te({url:re.userInfo,method:"get",params:e}))({uid:this.uid||(t="uid",u.get(t))});var t;if(!e)throw Error("Verification failed, please Login again.");const{roles:r,name:n,avatar:i,introduction:o,username:s}=e;if(!r||r.length<=0)throw Error("GetUserInfo: roles must be a non-null array!");this.SET_ROLES(r),this.SET_NAME(s),this.SET_AVATAR(i),this.SET_INTRODUCTION(o)}async LogOut(){if(console.log(this.token),""===this.token)throw Error("LogOut: token is undefined!");console.log(await ne()),await ne(),V(),this.SET_TOKEN(""),this.SET_ROLES([])}};se([_],ae.prototype,"SET_TOKEN",1),se([_],ae.prototype,"SET_UID",1),se([_],ae.prototype,"SET_NAME",1),se([_],ae.prototype,"SET_AVATAR",1),se([_],ae.prototype,"SET_INTRODUCTION",1),se([_],ae.prototype,"SET_ROLES",1),se([m],ae.prototype,"Login",1),se([m],ae.prototype,"ResetToken",1),se([m({rawError:!0})],ae.prototype,"GetUserInfo",1),se([m],ae.prototype,"LogOut",1),ae=se([h({dynamic:!0,store:I,name:"user"})],ae);const le=g(ae);var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,pe=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?de(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&ce(t,r,o),o};let ue=class extends c{constructor(){super(...arguments),this.breadcrumbs=[]}onRouteChange(e){e.path.startsWith("/redirect/")||this.getBreadcrumb()}created(){this.getBreadcrumb()}getBreadcrumb(){let e=this.$route.matched.filter((e=>e.meta&&e.meta.title));const t=e[0];this.isDashboard(t)||(e=[{path:"/dashboard",meta:{title:"Dashboard"}}].concat(e)),this.breadcrumbs=e.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))}isDashboard(e){return"Dashboard"===(e&&e.meta&&e.meta.title)}pathCompile(e){const{params:t}=this.$route;return E(e)(t)}handleLink(e){const{redirect:t,path:r}=e;t?this.$router.push(t):this.$router.push(this.pathCompile(r))}};pe([y("$route")],ue.prototype,"onRouteChange",1),ue=pe([d({name:"Breadcrumb"})],ue);const me={};var he=j(ue,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[r("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.breadcrumbs,(function(t,n){return r("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||n===e.breadcrumbs.length-1?r("span",{staticClass:"no-redirect"},[e._v(e._s(t.meta.title))]):r("a",{on:{click:function(r){return r.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)],1)}),[],!1,(function(e){for(let t in me)this[t]=me[t]}),"730bc39a",null,null).exports,ge=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,ve=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?_e(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&ge(t,r,o),o};let be=class extends c{toggleClick(){this.$emit("toggleClick")}};ve([O({default:!1})],be.prototype,"isActive",2),be=ve([d({name:"Hamburger"})],be);const fe={};var ye=j(be,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:[{"is-active":e.isActive}],on:{click:e.toggleClick}},[r("i",{staticClass:"el-icon-s-unfold"})])}),[],!1,(function(e){for(let t in fe)this[t]=fe[t]}),"65f830d5",null,null).exports,Ee=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor;let Ce=class extends c{constructor(){super(...arguments),this.customPrimaryColor="#cc000",this.drawer=!1,this.direction="rtl",this.currentTheme=""}get primaryColor(){return X.primaryColor}get sidebar(){return X.sidebar}get device(){return X.device.toString()}get avatar(){return le.avatar}get theme(){return X.theme}handleClose(e){e()}created(){}mounted(){this.currentTheme=this.theme,this.customPrimaryColor=this.primaryColor}themeChanged(e){this.currentTheme=e,localStorage.setItem("currentTheme",e),this.$store.dispatch("SetTheme",e)}};Ce=((e,t,r,n)=>{for(var i,o=n>1?void 0:n?Oe(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Ee(t,r,o),o})([d({name:"SysSetting",components:{}})],Ce);const Te={};var we=j(Ce,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"setting-layer flex-center"},[r("el-button",{staticClass:"btn-setting",attrs:{icon:"el-icon-setting",size:"mini",circle:""},on:{click:function(t){e.drawer=!0}}}),e._v(" "),r("el-drawer",{attrs:{title:"Settings",size:250,"append-to-body":!0,visible:e.drawer,direction:e.direction,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[r("section",{staticClass:"drawer-ctx"},[r("h5",[e._v("主题选择")]),e._v(" "),r("el-radio-group",{staticClass:"color-cards",on:{change:e.themeChanged},model:{value:e.currentTheme,callback:function(t){e.currentTheme=t},expression:"currentTheme"}},[r("el-radio",{staticClass:"theme-default",attrs:{label:"themeDefault"}},[e._v("default")]),e._v(" "),r("el-radio",{staticClass:"theme-blue",attrs:{label:"themeBlue"}},[e._v("Blue")]),e._v(" "),r("el-radio",{staticClass:"theme-cyan",attrs:{label:"themeLight"}},[e._v("Cyan")]),e._v(" "),r("el-radio",{staticClass:"theme-orange",attrs:{label:"themeOrange"}},[e._v("Orange")]),e._v(" "),r("el-radio",{staticClass:"theme-dark",attrs:{label:"themeDark"}},[e._v("Dark")]),e._v(" "),r("el-radio",{staticClass:"theme-darkblue",attrs:{label:"themeDarkBlue"}},[e._v("DarkBlue")])],1),e._v(" "),r("h5",[e._v("自定义主题")]),e._v(" "),r("el-color-picker",{model:{value:e.customPrimaryColor,callback:function(t){e.customPrimaryColor=t},expression:"customPrimaryColor"}})],1)])],1)}),[],!1,(function(e){for(let t in Te)this[t]=Te[t]}),"29aa3db0",null,null).exports,Se=Object.defineProperty,Le=Object.getOwnPropertyDescriptor;let Pe=class extends c{get sidebar(){return X.sidebar}get device(){return X.device.toString()}get avatar(){return le.avatar}get username(){return le.name}toggleSideBar(){X.ToggleSideBar(!1)}async logout(){await le.LogOut(),this.$router.push(`/login?redirect=${this.$route.fullPath}`)}};Pe=((e,t,r,n)=>{for(var i,o=n>1?void 0:n?Le(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Se(t,r,o),o})([d({name:"Navbar",components:{Breadcrumb:he,Hamburger:ye,SysSetting:we}})],Pe);const xe={};var ke=j(Pe,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("hamburger",{staticClass:"hamburger-container",attrs:{id:"hamburger-container","is-active":e.sidebar.opened},on:{toggleClick:e.toggleSideBar}}),e._v(" "),r("breadcrumb",{staticClass:"breadcrumb-container",attrs:{id:"breadcrumb-container"}}),e._v(" "),r("div",{staticClass:"right-menu"},[r("el-dropdown",{staticClass:"avatar-container right-menu-item hover-effect",attrs:{trigger:"click"}},[r("div",{staticClass:"avatar-wrapper flex-center"},[r("i",{staticClass:"el-icon-user"}),e._v(" "),r("span",{staticClass:"uname"},[e._v(e._s(e.username))]),e._v(" "),r("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("router-link",{attrs:{to:"/"}},[r("el-dropdown-item",[e._v("\n            Home\n          ")])],1),e._v(" "),r("a",{attrs:{target:"_blank",href:"https://github.com/artskin/base-admin"}},[r("el-dropdown-item",[e._v("\n            Github\n          ")])],1),e._v(" "),r("el-dropdown-item",{attrs:{divided:""}},[r("span",{staticStyle:{display:"block"},on:{click:e.logout}},[e._v("LogOut")])])],1)],1),e._v(" "),r("SysSetting")],1)],1)}),[],!1,(function(e){for(let t in xe)this[t]=xe[t]}),"528a45d4",null,null).exports;const De=e=>["admin","editor"].indexOf(e.trim())>=0,je=e=>!!e&&/^(https?:|mailto:|tel:)/.test(e);var Re=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Ie=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?Ae(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Re(t,r,o),o};let $e=class extends c{constructor(){super(...arguments),this.isExternal=je}};Ie([O({required:!0})],$e.prototype,"to",2),$e=Ie([d({name:"SidebarItemLink"})],$e);const Me={};var Be=j($e,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isExternal(e.to)?r("a",{attrs:{href:e.to,target:"_blank",rel:"noopener"}},[e._t("default")],2):r("router-link",{attrs:{to:e.to}},[e._t("default")],2)}),[],!1,(function(e){for(let t in Me)this[t]=Me[t]}),null,null,null).exports,Ne=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Ve=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?Ue(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Ne(t,r,o),o};let Ge=class extends c{get showingChildNumber(){if(this.item.children){return this.item.children.filter((e=>!e.meta||!e.meta.hidden)).length}return 0}get theOnlyOneChild(){if(this.showingChildNumber>1)return null;if(this.item.children)for(let e of this.item.children)if(!e.meta||!e.meta.hidden)return e;return l(l({},this.item),{path:""})}resolvePath(e){return je(e)?e:je(this.basePath)?this.basePath:C.resolve(this.basePath,e)}};Ve([O({required:!0})],Ge.prototype,"item",2),Ve([O({default:!1})],Ge.prototype,"isCollapse",2),Ve([O({default:!0})],Ge.prototype,"isFirstLevel",2),Ve([O({default:""})],Ge.prototype,"basePath",2),Ge=Ve([d({name:"SidebarItem",components:{SidebarItemLink:Be}})],Ge);const ze={};var He=j(Ge,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.item.meta&&e.item.meta.hidden?e._e():r("div",{class:["menu-wrapper",e.isCollapse?"simple-mode":"full-mode",{"first-level":e.isFirstLevel}]},[e.theOnlyOneChild&&!e.theOnlyOneChild.children?[e.theOnlyOneChild.meta?r("sidebar-item-link",{attrs:{to:e.resolvePath(e.theOnlyOneChild.path)}},[r("el-menu-item",{class:{"submenu-title-noDropdown":e.isFirstLevel},attrs:{index:e.resolvePath(e.theOnlyOneChild.path)}},[e.theOnlyOneChild.meta.icon?r("i",{class:e.theOnlyOneChild.meta.icon}):e._e(),e._v(" "),e.theOnlyOneChild.meta.title?r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.theOnlyOneChild.meta.title))]):e._e()])],1):e._e()]:r("el-submenu",{attrs:{index:e.resolvePath(e.item.path),"popper-append-to-body":""}},[r("template",{slot:"title"},[e.item.meta&&e.item.meta.icon?r("i",{class:e.item.meta.icon}):e._e(),e._v(" "),e.item.meta&&e.item.meta.title?r("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.meta.title))]):e._e()]),e._v(" "),e.item.children?e._l(e.item.children,(function(t){return r("sidebar-item",{key:t.path,staticClass:"nest-menu",attrs:{item:t,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":e.resolvePath(t.path)}})})):e._e()],2)],2)}),[],!1,(function(e){for(let t in ze)this[t]=ze[t]}),null,null,null).exports,Fe=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,qe=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?Ke(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Fe(t,r,o),o};let We=class extends c{mounted(){}};qe([O({default:""})],We.prototype,"className",2),We=qe([d],We);const Xe={};var Ye=j(We,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"icon",class:e.className,attrs:{t:"1614422789908",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"771",width:"64",height:"64","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("defs"),e._v(" "),r("path",{attrs:{d:"M736.32426667 130.75555521a45.32906667 45.32906667 0 0 0-39.27608854 22.57351147l-330.41066666 566.43128852 66.9923552 114.77902295a90.9312 90.9312 0 0 0 157.24088853 0l370.4604448-635.33511148A45.51111147 45.51111147 0 0 0 922.05511147 130.75555521l-185.7308448 0z","p-id":"772"}}),e._v(" "),r("path",{attrs:{d:"M102.4 130.75555521a45.51111147 45.51111147 0 0 0-39.3216 68.44871146l370.5059552 635.33511148a91.06773333 91.06773333 0 0 0 157.2408896-1e-8l111.8208-191.73831147L417.24586667 153.32906668A45.42008853 45.42008853 0 0 0 377.92426667 130.75555521L102.4 130.75555521z","p-id":"773"}})])}),[],!1,(function(e){for(let t in Xe)this[t]=Xe[t]}),"307e9ceb",null,null).exports,Je=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor;let Ze=class extends c{get sidebar(){return X.sidebar}get routes(){return this.$router.options.routes}get isCollapse(){return!this.sidebar.opened}};Ze=((e,t,r,n)=>{for(var i,o=n>1?void 0:n?Qe(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&Je(t,r,o),o})([d({name:"SideBar",components:{SidebarItem:He,IconSvg:Ye}})],Ze);const et={};var tt=j(Ze,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{hideSidebar:e.isCollapse}},[r("h1",{staticClass:"logo"},[r("icon-svg",{attrs:{className:"svg-logo"}}),e._v(" "),r("span",[e._v("Admin Kit")])],1),e._v(" "),r("el-menu",{attrs:{collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1,mode:"vertical"}},e._l(e.routes,(function(t){return r("sidebar-item",{key:t.path,attrs:{item:t,"base-path":t.path,"is-collapse":e.isCollapse}})})),1)],1)}),[],!1,(function(e){for(let t in et)this[t]=et[t]}),"6d825dfc",null,null).exports,rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,it=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?nt(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&rt(t,r,o),o};const ot=null==(r=window.appConf)?void 0:r.mWidth;let st=class extends c{get device(){return X.device}get sidebar(){return X.sidebar}onRouteChange(){this.device===K.Mobile&&this.sidebar.opened&&X.CloseSideBar(!1)}beforeMount(){window.addEventListener("resize",this.resizeHandler)}mounted(){this.isMobile()&&(X.ToggleDevice(K.Mobile),X.CloseSideBar(!0))}beforeDestroy(){window.removeEventListener("resize",this.resizeHandler)}isMobile(){return document.body.getBoundingClientRect().width-1<ot}resizeHandler(){if(!document.hidden){const e=this.isMobile();X.ToggleDevice(e?K.Mobile:K.Desktop),e&&X.CloseSideBar(!0)}}};it([y("$route")],st.prototype,"onRouteChange",1),st=it([d({name:"ResizeMixin"})],st);var at=st,lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor;let dt=class extends(T(at)){get classObj(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:this.device===K.Mobile}}handleClickOutside(){X.CloseSideBar(!1)}};dt=((e,t,r,n)=>{for(var i,o=n>1?void 0:n?ct(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&lt(t,r,o),o})([d({components:{AppMain:ee,Navbar:ke,Sidebar:tt}})],dt);const pt={};var ut=j(dt,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-wrapper",class:e.classObj},[e.classObj.mobile&&e.sidebar.opened?r("div",{staticClass:"drawer-bg",on:{click:e.handleClickOutside}}):e._e(),e._v(" "),r("sidebar",{staticClass:"sidebar-container"}),e._v(" "),r("div",{staticClass:"main-container"},[r("navbar"),e._v(" "),r("app-main")],1)],1)}),[],!1,(function(e){for(let t in pt)this[t]=pt[t]}),"afccc1a0",null,null).exports;c.use(w);var mt=new w({scrollBehavior:(e,t,r)=>r||{x:0,y:0},base:"",routes:[{path:"/login",component:()=>B((()=>__import__("./index.8c396966.js")),["/assets/index.8c396966.js","/assets/index.9f19b47e.css","/assets/vendor.d6aee48f.js"]),meta:{hidden:!0,title:"Login"}},{path:"/404",component:()=>B((()=>__import__("./404.f3bd1f7f.js")),["/assets/404.f3bd1f7f.js","/assets/404.debd99c3.css","/assets/vendor.d6aee48f.js"]),meta:{hidden:!0}},{path:"/",component:ut,redirect:"/dashboard",children:[{path:"dashboard",component:()=>B((()=>__import__("./index.c9f37b3d.js")),["/assets/index.c9f37b3d.js","/assets/index.85260991.css","/assets/vendor.d6aee48f.js"]),meta:{title:"Dashboard",icon:"el-icon-data-analysis"}}]},{path:"/example",component:ut,redirect:"/example/tree",meta:{title:"Pages",icon:"el-icon-document-copy"},children:[{path:"cards",component:()=>B((()=>__import__("./card.aa53efa3.js")),["/assets/card.aa53efa3.js","/assets/card.63a3568f.css","/assets/vendor.d6aee48f.js","/assets/tasks.1dba268f.js"]),meta:{title:"Card list",icon:"el-icon-files"}},{path:"task",component:()=>B((()=>__import__("./index.c041e001.js")),["/assets/index.c041e001.js","/assets/vendor.d6aee48f.js","/assets/tasks.1dba268f.js"]),meta:{title:"Task List",icon:"el-icon-s-grid"}},{path:"tree",component:()=>B((()=>__import__("./index.ee4952e0.js")),["/assets/index.ee4952e0.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Tree",icon:"el-icon-finished"}}]},{path:"/ui",component:ut,redirect:"/elements",children:[{path:"elements",component:()=>B((()=>__import__("./index.43944ab9.js")),["/assets/index.43944ab9.js","/assets/index.648f0124.css","/assets/vendor.d6aee48f.js"]),meta:{title:"Element UI",icon:"el-icon-eleme"}}]},{path:"/form",component:ut,children:[{path:"index",component:()=>B((()=>__import__("./index.45ee0186.js")),["/assets/index.45ee0186.js","/assets/index.4c569282.css","/assets/vendor.d6aee48f.js"]),meta:{title:"Form",icon:"el-icon-edit"}}]},{path:"/nested",component:ut,redirect:"/nested/menu1",meta:{title:"Nested",icon:"el-icon-finished"},children:[{path:"menu1",component:()=>B((()=>__import__("./index.53317552.js")),["/assets/index.53317552.js","/assets/vendor.d6aee48f.js"]),redirect:"/nested/menu1/menu1-1",meta:{title:"Menu1"},children:[{path:"menu1-1",component:()=>B((()=>__import__("./index.15b960f3.js")),["/assets/index.15b960f3.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu1-01"}},{path:"menu1-2",component:()=>B((()=>__import__("./index.69b3a616.js")),["/assets/index.69b3a616.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu1-02"}},{path:"menu1-3",component:()=>B((()=>__import__("./index.ab616f0c.js")),["/assets/index.ab616f0c.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu1-03"}}]},{path:"menu2",component:()=>B((()=>__import__("./index.601aa271.js")),["/assets/index.601aa271.js","/assets/vendor.d6aee48f.js"]),meta:{title:"Menu2"}}]},{path:"/senseui",component:ut,children:[{path:"https://senseui.im",meta:{title:"Sense UI",icon:"el-icon-menu"}}]},{path:"/gudong",component:ut,children:[{path:"https://gudong.im",meta:{title:"FE Notes",icon:"el-icon-notebook-1"}}]},{path:"*",redirect:"/404",meta:{hidden:!0}}]});S.configure({showSpinner:!1});const ht=["/login"];mt.beforeEach((async(e,t,r)=>{if(S.start(),le.token)if("/login"===e.path)r({path:"/"}),S.done();else if(0===le.roles.length)try{await le.GetUserInfo(),r()}catch(n){le.ResetToken(),r(`/login?redirect=${e.path}`),S.done()}else r();else-1!==ht.indexOf(e.path)?r():(r(`/login?redirect=${e.path}`),S.done())})),mt.afterEach((e=>{S.done(),document.title=e.meta.title}));c.use(L);const gt={en:l({},{lang:{zh:"中文",en:"English"},switchLang:"Language switch",login:{title:"Login",sys_name:"admin kit",username:"UserName",password:"Password",submitText:"Sign in"}}),zh:l({},{lang:{zh:"中文",en:"English"},switchLang:"语言切换",login:{title:"登录",sys_name:"admin kit",username:"用户名",password:"密码",submitText:"登录"}})},_t=new L({locale:u.get("language")||X.language,messages:gt});c.use(P);let vt=localStorage.getItem("currentTheme");vt&&I.dispatch("SetTheme",vt),c.config.productionTip=!1,new c({router:mt,store:I,i18n:_t,render:e=>e(A)}).$mount("#app");export{X as A,le as U,De as i,j as n,te as s};
