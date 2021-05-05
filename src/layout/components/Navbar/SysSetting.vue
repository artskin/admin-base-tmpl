<template>
  <div class="setting-layer flex-center">
    <el-button class="btn-setting" @click="drawer = true" icon="el-icon-setting" size="mini" circle></el-button>
    <el-drawer
      title="Settings"
      :size="250"
      :append-to-body="true"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <section class="drawer-ctx">
        <h5>主题选择</h5>
        <el-radio-group class="color-cards" v-model="currentTheme" @change="themeChanged">
          <el-radio class="theme-default" label="themeDefault">default</el-radio>
          <el-radio class="theme-blue" label="themeBlue">Blue</el-radio>
          <el-radio class="theme-cyan" label="themeLight">Cyan</el-radio>
          <el-radio class="theme-orange" label="themeOrange">Orange</el-radio>
          <el-radio class="theme-dark" label="themeDark">Dark</el-radio>
          <el-radio class="theme-darkblue" label="themeDarkBlue">DarkBlue</el-radio>
        </el-radio-group>
        <h5>自定义主题</h5>
        <el-color-picker v-model="color2"></el-color-picker>
      </section>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'SysSetting',
  components: {
  }
})
export default class SysSetting extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get device() {
    return AppModule.device.toString()
  }

  get avatar() {
    return UserModule.avatar
  }
  color2:string = "#cc000"
  drawer:boolean = false
  direction:string = 'rtl'
  currentTheme:string = 'default'

  handleClose(done) {
    done()
    //console.log()
  }
  created() {
    this.themeInit()
  }
  mounted() {
    
  }
  themeInit(){
    let localTheme = localStorage.getItem('currentTheme')
    if(localTheme && !document.body.classList.length){
      document.body.classList.add(localTheme)
      this.currentTheme = localTheme;
      AppModule.SetTheme(localTheme)
    }
  }
  themeChanged(theme){
    this.currentTheme = theme
    localStorage.setItem('currentTheme',theme);
    AppModule.SetTheme(theme)
    if(!document.body.classList.length){
      document.body.classList.add(theme)
    }else{
      document.body.classList.replace(document.body.classList[0],theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-drawer__header{
  padding: 15px;
}
.setting-layer{
  padding-left:12px;
  padding-right: 18px;
  .btn-setting{
    vertical-align: middle;
    background: var(--white);
    color: var(--menu-color);
    border-color: var(--white-gray);
  }
}
::v-deep{
    .el-drawer__body,
    .el-drawer__header{
      padding:12.5px 15px;
      margin-bottom: 0;
    }
    .drawer-ctx{
      h5{
        margin: 0.8em 0;
        color: var(--info);
      }
    }
    .color-cards{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .el-radio{
        width: 30%;
        margin-right: 3%;
        margin-bottom: 30px;
        height: 58px;
        position: relative;
        border-radius: 5px;
        background: #f6f6fc;
        border:1px solid transparent;
        box-shadow:inset 0 0 1px rgba(0,0,0,.1);
        &::before,&::after{
          content: ' ';
          display: inline-block;
          position: absolute;
          left: 0;
          height: 100%;
        }
        &::before{   
          border: none;
          width: 18px;
          border-radius: 4px 0 0 4px;
          z-index: 1;
        }
        &::after{
          width: 44px;
          content: '文字';
          border-radius: 0 4px 0 0;
          left: 18px;
          z-index: 0;
          bottom: 14px;
          font-size: 12px;
          text-align: center;
          height: 14px;
        }
        .el-radio__input{
          display: none;
        }
        .el-radio__label{
          position: absolute;
          bottom: -20px;
          padding-left: 4px;
        }
      }
      .is-checked{
        border-color: var(--success);
        // &::before{
          
        // }
      }
      .theme-default{
        &::before{background: #292e40;}
        &::after{color: #4E88F3;}
      }
      .theme-blue{
        &::before{background:#112958;}
        &::after{color: #3546ab;}
      }
      .theme-cyan{
        &::before{background: #018786;}
        &::after{color: #018786;}
      }
      .theme-orange{
        &::before{background: #ff650e;}
        &::after{color: #ff650e;}
      }
      .theme-dark{
        &::before{background: #0a0a45;}
        &::after{color: #4E88F3;}
      }
      .theme-darkblue{
        &::before{background:#112958;}
        &::after{color: #3546ab;}
      }
    }
  }
</style>
