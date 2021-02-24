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
      <div class="title-container">
        <h3 class="title">
          {{$t("login.title")}}
        </h3>
      </div>

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
        style="width:100%; margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >
        {{$t("login.submitText")}}
      </el-button>

      <div class="tips">
        <span>{{$t("login.username")}}: admin </span>
        <span>{{$t("login.password")}}: any </span>
        <lang-select class="set-language" @langChanged="changeLanguage" size="16px">{{currentLang}}</lang-select>
      </div>
    </el-form>
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
  private showDialog = false
  private redirect?: string
  private otherQuery: Dictionary<string> = {}
  currentLang=''

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
      (this.$refs.username as Input).focus()
    } else if (this.loginForm.password === '') {
      (this.$refs.password as Input).focus()
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
      (this.$refs.password as Input).focus()
    })
  }

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async(valid: boolean) => {
      if (valid) {
        this.loading = true;
        await UserModule.Login(this.loginForm)

        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })

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
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--loginBg);
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: var(--light);
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input {
    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      color: var(--light);
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
    color: #fff;
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
    color: var(--light);
    display: block;
  }
}

// References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
@supports (-webkit-mask: none) and (not (cater-color: var(--loginCursorColor))) {
  .login-container .el-input {
    input { color: var(--loginCursorColor) }
    input::first-line { color: var(--lightGray); }
  }
}
</style>
