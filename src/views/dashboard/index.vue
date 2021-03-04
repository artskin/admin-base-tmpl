<template>
  <div class="dashboard-container">
    <p class="gray">Welcome! <em>{{ name }}</em></p>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in overview" :key="index">
        <el-card class="box-card total-number">
          <em>{{item.name}}</em>
          <span>{{item.number}}</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { getStatistics } from '@/api/statistics'

@Component({

})
export default class Dashboard extends Vue {
  get name() {
    return UserModule.name
  }
  percentage:number = 40
  colors:string = '#ea4c89'
  overview:Array<Object> = [
    {
      num:123,
      name:'Visitors'
    }
  ]
  created() {
    this.loadStatistics()
  }
  loadStatistics(){
    getStatistics().then((resp)=>{
      this.overview = resp.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
    .el-card{border: none;}
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.gray{
  color: var(--gray);
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.total-number{
  span{
    font-size: 28px;
    display: block;
  }
  em{
    color: var(--gray);
  }
}
.el-progress--line{
  margin-bottom: 15px;
}
</style>
