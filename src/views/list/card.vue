<template>
  <div class="page-router">
    <el-row :gutter="16" class="card-list">

      <el-col :span="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img src="/img/human.jpg" alt="">
            </dd>
            <dt>
              <strong>位置：一楼大厅</strong><br>
              <time datetime="2021-02-14 12:21:22">2021-02-14 12:21:22</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：陌生人sdada</h5>
            <span>MSS20120321</span>
            <p>相似度：98.33%</p>
            <p>
              <em>特征：</em>
              <el-tag>口罩</el-tag>
              <el-tag type="warning">违章</el-tag>
              <el-tag type="info">男性</el-tag>
              <el-tag type="info">中年</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img src="/img/human.jpg" alt="">
            </dd>
            <dt>
              <strong>位置：一楼大厅</strong><br>
              <time datetime="2021-02-14 12:21:22">2021-02-14 12:21:22</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：陌生人sdada</h5>
            <span>MSS20120321</span>
            <p>相似度：98.33%</p>
            <p>
              <em>特征：</em>
              <el-tag>口罩</el-tag>
              <el-tag type="warning">违章</el-tag>
              <el-tag type="info">男性</el-tag>
              <el-tag type="info">中年</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img src="/img/human.jpg" alt="">
            </dd>
            <dt>
              <strong>位置：一楼大厅</strong><br>
              <time datetime="2021-02-14 12:21:22">2021-02-14 12:21:22</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：陌生人sdada</h5>
            <span>MSS20120321</span>
            <p>相似度：98.33%</p>
            <p>
              <em>特征：</em>
              <el-tag>口罩</el-tag>
              <el-tag type="warning">违章</el-tag>
              <el-tag type="info">男性</el-tag>
              <el-tag type="info">中年</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img src="/img/human.jpg" alt="">
            </dd>
            <dt>
              <strong>位置：一楼大厅</strong><br>
              <time datetime="2021-02-14 12:21:22">2021-02-14 12:21:22</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：陌生人sdada</h5>
            <span>MSS20120321</span>
            <p>相似度：98.33%</p>
            <p>
              <em>特征：</em>
              <el-tag>口罩</el-tag>
              <el-tag type="warning">违章</el-tag>
              <el-tag type="info">男性</el-tag>
              <el-tag type="info">中年</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img src="/img/human.jpg" alt="">
            </dd>
            <dt>
              <strong>位置：一楼大厅</strong><br>
              <time datetime="2021-02-14 12:21:22">2021-02-14 12:21:22</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：陌生人sdada</h5>
            <span>MSS20120321</span>
            <p>相似度：98.33%</p>
            <p>
              <em>特征：</em>
              <el-tag>口罩</el-tag>
              <el-tag type="warning">违章</el-tag>
              <el-tag type="info">男性</el-tag>
              <el-tag type="info">中年</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card card-item">
          <dl class="img-layer">
            <dd>
              <img src="/img/human.jpg" alt="">
            </dd>
            <dt>
              <strong>位置：一楼大厅</strong><br>
              <time datetime="2021-02-14 12:21:22">2021-02-14 12:21:22</time>
            </dt>
          </dl>
          <div class="content-layer">
            <h5>姓名：陌生人sdada</h5>
            <span>MSS20120321</span>
            <p>相似度：98.33%</p>
            <p>
              <em>特征：</em>
              <el-tag>口罩</el-tag>
              <el-tag type="warning">违章</el-tag>
              <el-tag type="info">男性</el-tag>
              <el-tag type="info">中年</el-tag>
            </p>
          </div>
        </el-card>
      </el-col>

      
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getTasks } from '@/api/tasks'
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
    limit: 20
  }

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    //const { data } = await getTasks(this.listQuery)
    await getTasks(this.listQuery).then((resp:any)=>{
      
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
.card-list{
  .el-col{
    margin-bottom: 16px;
  }
}
  .card-item{
    dl,dd{margin: 0;}
    .img-layer{
      max-width: 30%;
      background: #f3f6f9;
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
          transform: translateY(0px);
          
        }
      }
      
      dt{
        padding:5px 10px 10px;
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
            top: 0;
            background: rgba(255,255,255,.7);
            filter:blur(3px);
            z-index: -1;
        }
        strong{
          font-size: 14px;
        }
        time{
          font-size: 12px;
        }
      }
    }
    .content-layer{
      width: 50%;
      flex: 1;
      padding-left: 10px;
      h5{
        margin: 0;
      }
    }
    .el-card__body{
      display: flex;
    }
    
  }
</style>