<template>
  <div class="dashboard-container">
    <p class="gray">Analytics Dashboard</p>
    <el-row :gutter="16" class="valign-items">
      <el-col :span="6" :xs="12" v-for="(item,index) in overview" :key="index">
        <el-card class="box-card total-number">
          <i class="icon-total" :class="item.icon"></i>
          <em>{{item.name}}</em>
          <span class="main-number">{{item.value}}</span>
          <div><span :class="item.style">{{item.percent}}</span> Since last week</div> 
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="valign-items">
      <el-col :span="16" :xs="24">
        <el-card class="box-card">
          <ChartLine />
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24">
        <el-card class="box-card">
          <ChartBar />
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" class="valign-items">
      <el-col :span="12" :xs="24">
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
      <el-col :span="12" :xs="24">
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
    <el-row :gutter="20" class="valign-items">
      <el-col :span="24">
        <el-card class="box-card">
          <el-progress v-for="(item,index) in progress" :key="index" :type="item.type" :status="item.status" :percentage="item.percentage" :color="item.color"></el-progress>
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
  progress = [
    { 
      type:'dashboard',
      percentage:40,
      color:'#ea4c89'
    },
    {
      type:'dashboard',
      percentage:80,
      color:'#51cba8'
    },
    {
      type:'circle',
      percentage:10,
      color:'#4e88f3'
    },
    {
      type:'circle',
      percentage:100,
      color:'#4e88f3',
      status:'success'
    },
    {
      type:'line',
      percentage:10,
      color:'#4e88f3'
    },
  ]
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
        if(item.percent < 0){
          item.style = 'text--danger'
        }else{
          item.style = 'text--success'
        }
        item.percent += "%"
      })
    })
  }
}
</script>

<style lang="scss" scoped>

.dashboard {
  &-container {
    padding:5px 30px;
    
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
.valign-items{
  .el-col{margin-bottom: 20px;}
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
@media only screen and (max-width: 768px){
  .dashboard-container{
    padding:2px 20px
  }
}
</style>
