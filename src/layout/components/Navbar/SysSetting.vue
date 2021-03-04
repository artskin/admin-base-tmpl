<template>
  <div class="setting_layer">
    <el-button class="btn-setting" @click="drawer = true" icon="el-icon-setting" size="mini" circle></el-button>
    <el-drawer
      title="Setting"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <el-radio-group class="color-cards" v-model="currentTheme" @change="themeChanged">
        <el-radio label="themeDefault"><br>default</el-radio>
        <el-radio label="themeDarkBlue"><br>DarkBlue</el-radio>
        <el-radio label="themeOrange"><br>Orange</el-radio>
      </el-radio-group>
      <el-color-picker v-model="color2"></el-color-picker>
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
    console.log(done())
  }
  themeChanged(theme){
    // if(this.currentTheme != theme){
      this.currentTheme = theme
      console.log(document.body.classList.item(0),document.body.classList)
      if(!document.body.classList.length){
        document.body.classList.add(theme)
      }else{
        document.body.classList.replace(document.body.classList.value,theme)
      }
    //}
    
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
  ::v-deep{
    .color-cards{
      .el-radio{
        &::before{
          content: ' ';
          display: inline-block;
          border: 1px solid var(--primary);
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
      .el-radio:nth-child(2){
        &::before{
          background:#0b2559;
        }
      }
    }
  }
}

</style>
