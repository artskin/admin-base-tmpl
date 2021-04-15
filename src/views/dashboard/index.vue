<template>
  <div class="dashboard-container">
    <p class="gray">Analytics Dashboard</p>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in overview" :key="index">
        <el-card class="box-card total-number">
          <i class="icon-total" :class="item.icon"></i>
          <em>{{item.name}}</em>
          <span class="main-number">{{item.value}}</span>
          <div><span :class="item.style">{{item.percent}}</span> Since last week</div> 
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-card class="box-card">
          <ChartLine />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <ChartBar />
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>最新动态</span>
            <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ o + '. 最新动态 ' }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">more</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ o + '. 待办事项 '}}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="60" status="success"></el-progress>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { getStatistics } from '@/api/statistics'
import ChartLine from '@/components/Chartjs/chartLine.vue'
import ChartBar from '@/components/Chartjs/chartPie.vue'

@Component({
  components:{
    ChartLine,
    ChartBar
  }
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
      this.overview.map((item:any)=>{
        console.log(item.growing,item.growing < 0)
        if(item.growing < 0){
          item.style = 'text--danger'
        }else{
          item.style = 'text--success'
        }
        item.growing += "%"
      })
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
  position: relative;
  .icon-total{
    position: absolute;
    right: 20px;
    top: 20px;
    background: var(--primary-opacity);
    color: var(--primary-hover);
    padding: 10px;
    border-radius: 55%;
  }
  span.main-number{
    font-size: 28px;
    display: block;
    padding: 8px 0;
  }
  em{
    color: var(--gray-dark);
    font-style: normal;
    font-size: 14px;
  }
  div{font-size: 14px;white-space:nowrap;}
}
.el-progress--line{
  margin-bottom: 15px;
}
</style>
