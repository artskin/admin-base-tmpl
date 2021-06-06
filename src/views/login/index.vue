<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container" :class="animateClassTitle">
        <h3 class="title">
          {{$t("login.title")}}
          <span>{{$t("login.sys_name")}}</span>
        </h3>
      </div>
      <div class="form-layer" :class="animateClass">
        <el-form-item prop="username">
          <el-input
            ref="username"
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
            name="username"
            type="text"
            autocomplete="on"
            placeholder="username"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="password"
            name="password"
            prefix-icon="el-icon-postcard"
            autocomplete="on"
            @keyup.enter.native="handleLogin"
          >
            <i slot="suffix" @click="showPwd" class="el-input__icon" :class="passwordType === 'password' ? 'el-icon-turn-off' : 'el-icon-open'"></i>
          </el-input>
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          size="big"
          style="width:100%; margin-bottom:30px;"
          @click.native.prevent="handleLogin"
        >
          {{$t("login.submitText")}}
        </el-button>
        <div class="tips">
          <span>{{$t("login.username")}}: admin/editor </span>
          <span>{{$t("login.password")}}: root123 </span>
        </div>
      </div>
      
    </el-form>
    <lang-select class="set-language" @langChanged="changeLanguage" size="16px">{{currentLang}}</lang-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Dictionary } from 'vue-router/types/router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import Cookies from 'js-cookie';
import { AppModule } from '@/store/modules/app';
import LangSelect from '@/components/LangSelect/index.vue';

@Component({
  components: {
    LangSelect
  }
})
export default class Login extends Vue {
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!isValidUsername(value)) {
      callback(new Error('Please enter the correct user name'))
    } else {
      callback()
    }
  }
  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }
  private loginForm = {
    username: 'admin',
    password: 'root123'
  }
  private loginRules = {
    username: [{ validator: this.validateUsername, trigger: 'blur' }],
    password: [{ validator: this.validatePassword, trigger: 'blur' }]
  }
  private passwordType = 'password'
  private loading = false
  private redirect?: string
  private otherQuery: Dictionary<string> = {}
  currentLang=''
  animateClass = ''
  animateClassTitle = ''
  $refs!:{
    loginForm:ElForm,
    username:HTMLInputElement,
    password:HTMLInputElement
  }

  @Watch('$route', { immediate: true })
  private onRouteChange(route: Route) {
    // TODO: remove the "as Dictionary<string>" hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    const query = route.query as Dictionary<string>
    if (query) {
      this.redirect = query.redirect
      this.otherQuery = this.getOtherQuery(query)
    }
  }
  get language() {
    return AppModule.language;
  }

  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    this.changeLanguage(this.language)
  }

  changeLanguage(e:string){
    this.currentLang = e.toUpperCase()
  }

  private showPwd() {
    if (this.passwordType === 'password') {
      this.passwordType = ''
    } else {
      this.passwordType = 'password'
    }
    this.$nextTick(() => {
      this.$refs.password.focus()
    })
  }

  private handleLogin() {
    this.$refs.loginForm.validate(async(valid: boolean) => {
      if (valid) {
        this.loading = true;
        this.animateClass = 'animate__animated animate__zoomOut'
        this.animateClassTitle = 'animate__animated animate__delay-1s animate__slideInDown'
        try{
          await UserModule.Login(this.loginForm)
          this.$router.push({
            path: this.redirect || '/',
            query: this.otherQuery
          })
        }catch(err){
          this.animateClass = ''
          this.animateClassTitle = ''
          this.loading = false
          console.log(err)
        }
      } else {
        return false
      }
    })
  }

  private getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {} as Dictionary<string>)
  }
}
export let route = {
  redirect: "xx"
}
</script>

<style lang="scss">

.login-container {
  --animate-delay:0.1s;
  --white-gray:#fff;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: var(--gray-light);
  //background: radial-gradient(ellipse at 5% 5%, #fec833 0%, rgba(254,200,51,0) 75%),radial-gradient(ellipse at 95% 5%, #fdc1a7 0%, rgba(253,193,167,0) 75%),radial-gradient(ellipse at 95% 95%, #e4699a 15%, rgba(228,105,154,0) 75%),radial-gradient(ellipse at 5% 95%, #eb5551 30%, rgba(235,85,81,0) 75%);
  
  display: flex;
  color: var(--dark);
  justify-content: center;
  align-items: center;

  &::after{
    content: ' ';
    position: absolute;
    left: 0;
    top:0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: rgba(5,5,5,.02);
    backdrop-filter: blur(20px) saturate(180%);
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 6% 30px 12%;
    overflow: hidden;
    z-index: 1;
  }
  .el-form-item {
    border: 1px solid var(--gray);
    border-radius: 5px;
    color: #454545;
  }
  .is-error{
    border-color: var(--danger);
  }
  .is-success{
    border-color: var(--success);
  }
  .el-input {
    input {
      border: 0px;
      border-radius: 4px;
      caret-color: var(--loginCursorColor);
      -webkit-appearance: none;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px var(--loginBg) inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
    .el-input__suffix{
      cursor: pointer;
    }
  }
  .tips {
    position:relative;
    font-size: 14px;
    color: var(--dark2);
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    span:not(:first-of-type) {
      width: 30%;
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .set-language{
    display: block;
    position: absolute;
    right: 25px;
    top: 20px;
    z-index: 1;
  }
  @keyframes slideInDown2{
    0%{
      transform:translateY(0);
      visibility:visible
    }to{
      transform:translateY(130px)
    }
  }
  .animate__slideInDown{
    animation-name:slideInDown2;
    h3{
      span{
        display: none;
      }
      &:after{
        content: "";
        display: inline-block;
        width: 1em;
        text-align: left;
        animation:dotAnimate 1s infinite;
      }
    }
  }
  @keyframes dotAnimate{
      0%,100%{content: "";}
      25%{content: ".";}
      50%{content: "..";}
      75%{content: "...";}
  }
}

:root{
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
.animate__animated{
  -webkit-animation-duration:1s;
  animation-duration:1s;
  -webkit-animation-duration:var(--animate-duration);
  animation-duration:var(--animate-duration);
  -webkit-animation-fill-mode:both;
  animation-fill-mode:both;
}
.animate__animated.animate__delay-1s{
  -webkit-animation-delay:1s;
  animation-delay:1s;
  -webkit-animation-delay:var(--animate-delay);
  animation-delay:var(--animate-delay)
}
.animate__zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}
@-webkit-keyframes zoomOut{
  0%{opacity:1}
  50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}
  to{opacity:0}
}
@keyframes zoomOut{
  0%{opacity:1}
  50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}
  to{opacity:0}
}

// References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
@supports (-webkit-mask: none) and (not (cater-color: var(--loginCursorColor))) {
  .login-container .el-input {
    input::first-line { color: var(--lightGray); }
  }
}
</style>
