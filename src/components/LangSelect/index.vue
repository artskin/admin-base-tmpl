<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div class="el-dropdown-link">
      <slot>
        <i ref="icon" class="el-icon-setting" :style="'font-size:'+size"></i>
      </slot>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Vue,Prop, Watch } from 'vue-property-decorator';
import { RouteRecord } from 'vue-router';
import { AppModule } from '@/store/modules/app';

@Component({})
export default class LangSelect extends Vue {
  @Prop({default:"14px"}) size!:string
  levelList: RouteRecord[] = [];
  get language() {
    return AppModule.language;
  }
  created() {

  }
  mounted(){
    document.documentElement.setAttribute('lang',this.language);
  }

  handleSetLanguage(lang:string) {
    document.documentElement.setAttribute('lang',lang);
    this.$i18n.locale = lang;
    AppModule.SetLanguage(lang).then((result) => {
      this.$emit("langChanged",lang)
    }).catch((err) => {

    });
    this.$message({
      showClose: true,
      message: this.$tc('switchLang'),
      type: 'success',
      duration:800
    })
  }
}

</script>

<style lang="scss" scoped>

</style>
