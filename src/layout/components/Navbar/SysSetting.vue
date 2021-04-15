<template>
  <div class="setting_layer">
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
          <el-radio label="themeDefault"><br>default</el-radio>
          <el-radio label="themeDarkBlue"><br>DarkBlue</el-radio>
          <el-radio label="themeLight"><br>Light</el-radio>
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
      this.currentTheme = localTheme
    }
  }
  themeChanged(theme){
    this.currentTheme = theme
    localStorage.setItem('currentTheme',theme);
    if(!document.body.classList.length){
      document.body.classList.add(theme)
    }else{
      document.body.classList.replace(document.body.classList[0],theme)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-setting{
  margin-right: 10px;
  vertical-align: middle;
}

.el-drawer__header{
  padding: 15px;
}
.setting_layer{
  
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
      width: 100%;
      .el-radio{
        width: 30%;
        margin-right: 10px;
        &::before{
          content: ' ';
          display: inline-block;
          border: 2px solid transparent;
          border-radius: 6px;
          display: inline-block;
          height: 60px;
          width: 100%;
          margin-bottom: 5px;
        }
        .el-radio__input{
          display: none;
        }
      }
      .is-checked{
        &::before{
          border-color: var(--success);
        }
      }
      .el-radio:nth-child(1)::before{
        background: #292e40;
      }
      .el-radio:nth-child(3)::before{
        background: #ece5e0;
      }
      .el-radio:nth-child(2)::before{
        background:#0b2559;
      }
    }
  }
</style>
