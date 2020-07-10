<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div class="el-dropdown-link">
      <slot>
        <i ref="icon" class="el-icon-setting" :style="'font-size:'+size"></i>
      </slot>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item,index) in langList" :key="index" :disabled="language===item" :command="item">{{$t('lang')[item]}}</el-dropdown-item>
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
  langList:Array<string> =[]
  get language() {
    return AppModule.language;
  }
  created() {

  }
  mounted(){
    document.documentElement.setAttribute('lang',this.language);
    this.langList = Object.keys(this.$i18n.messages)
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
