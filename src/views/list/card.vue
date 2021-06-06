<template>
  <div class="page-router">
    <h3 class="page-title">人像库：</h3>
    <el-row class="gap-s card-list page-content" v-loading="listLoading">

      <el-col v-for="(item,index) in list" :key="index" :span="8" :xs="24" :sm="12" :md="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img :src="item.avatar" alt="">
            </dd>
            <dt>
              <strong>{{item.device.position}}</strong><br>
              <time datetime="2021-02-14 12:21:22">{{item.time}}</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：{{item.name}}</h5>
            <span class="mini">{{item.uuid}}</span>
            <p>相似度：98.33%</p>
            <p class="card-attrs">
              <em>特征：</em>
              <el-tag size="mini" v-for="(n,i) in item.attr" :key="i">{{n}}</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getRecords } from '@/api/tasks'
import { ITaskItem } from '@/api/types'

@Component({
  name: 'Table',
  filters: {
    statusFilter: (status: string) => {
      const statusMap: { [key: string]: string } = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    parseTime: (timestamp: string) => {
      //return new Date(timestamp).toISOString()
    }
  }
})
export default class Card extends Vue {
  private list: ITaskItem[] = []
  private listLoading = true
  private listQuery = {
    page: 1,
    limit: 12
  }

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    //const { data } = await getTasks(this.listQuery)
    await getRecords(this.listQuery).then((resp:any)=>{
      
      if(resp && resp.data.list){
        this.list = resp.data.list
      }
    })
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }
}
</script>
<style lang="scss">
.page-content{min-height: 800px;}
  .card-item{
    dl,dd{margin: 0;}
    .img-layer{
      max-width: 33%;
      width:33%;
      background: var(--white-gray);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      dd{
        line-height: 0;
      }
      img{
        width: 100%;
        height: 180px;
        object-fit: cover;
      }
      &:hover{
        dt{
          height: auto;
          transition: all .1s ease-in;
          transform: translateY(0);
        }
      }
      dt{
        padding:5px 8px;
        transform: translateY(30px);
        height: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        //background: rgba(255,255,255,.8);
        overflow: hidden;
        &::after{
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          background: rgba(255,255,255,.4);
          backdrop-filter: blur(20px) saturate(180%);
          z-index: -1;
          border-radius:0 0 4px 4px;
        }
        strong{
          font-size: 14px;
        }
        time{
          font-size: 12px;
          white-space:nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          overflow: hidden;
          display: inline-block;
        }
      }
    }
    .content-layer{
      width: 50%;
      flex: 1;
      padding-left: 10px;
      h5{
        margin: 0;
        font-size: 16px;
      }
      span.mini{
        font-size: 12px;
        color: var(--gray);
      }
      em{
        font-style: normal;
      }
      .el-tag{
        border-color: transparent;
      }
    }
    
    .el-card__body{
      display: flex;
      max-height: 220px;
      font-size: 14px;
    }
    .card-attrs{
      .el-tag{
        margin: 0 5px 5px 0;
      }
    }
  }
  .el-card{
    border-width: 1px;
  }
  
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .el-card{
      border-width: 0.5px;
    }
  }
  @media screen and (-webkit-min-device-pixel-ratio: 3) {
    .el-card{
      border-width: 0.333333px;
    }
  }

</style>