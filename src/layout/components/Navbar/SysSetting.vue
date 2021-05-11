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
        <div class="flex">
          主题色：<el-color-picker v-model="customPrimaryColor"></el-color-picker>
        </div>
        
      </section>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Watch } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'SysSetting',
  components: {
  }
})
export default class SysSetting extends Vue {
  get primaryColor(){ return AppModule.primaryColor }
  get sidebar() { return AppModule.sidebar }
  get device() { return AppModule.device.toString() }
  get avatar() { return UserModule.avatar }
  get theme() { return AppModule.theme }

  customPrimaryColor:string |null = ""
  drawer:boolean = false
  direction:string = 'rtl'
  currentTheme = ''
  @Watch('customPrimaryColor',{immediate: true})
  primaryColorChanged(nv,ov){
    if(nv && ov){
      localStorage.setItem('primaryColor',nv);
      this.$store.dispatch('SetTheme',this.currentTheme)
    }
  }

  handleClose(done:Function) {
    done()
  }
  created() {}
  mounted() {
    this.currentTheme = this.theme;
    if(localStorage.getItem('primaryColor')){
      this.customPrimaryColor = localStorage.getItem('primaryColor');
    }
  }
  themeChanged(theme){
    this.currentTheme = theme;
    if(document.body.hasAttribute('style')){
      document.body.removeAttribute('style');
    }
    if(localStorage.getItem('primaryColor')){
      localStorage.removeItem('primaryColor')
    }
    localStorage.setItem('currentTheme',theme);
    this.$store.dispatch('SetTheme',{theme:theme,handle:true});
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
        color: var(--gray-dark);
        background: #f6f6fc;
        border:1px solid transparent;
        box-shadow: 0 0 6px rgba(0,0,0,.16);
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
          font-family: element-icons!important;
          width: 44px;
          content: "\e6da";
          border-radius: 0 4px 0 0;
          left: 18px;
          z-index: 0;
          bottom: 14px;
          font-size: 16px;
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
        font-weight: bold;
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
