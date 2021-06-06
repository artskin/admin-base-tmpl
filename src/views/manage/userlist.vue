<template>
  <div class="page-router">
    <h3 class="page-title">用户列表：</h3>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="TaskId"
        width="295"
      >
        <template slot-scope="scope">
          {{ scope.row.task_id }}
        </template>
      </el-table-column>
      <el-table-column label="TaskName">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Status"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <!-- <el-tag :type="scope.row.status | statusFilter">
            
          </el-tag> -->
          <el-switch v-model="scope.row.status"></el-switch>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="Created at"
        width="250"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.timestamp }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="DeviceName"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.deviceName }}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getUserList } from '@/api/users'
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
export default class Table extends Vue {
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
    await getUserList(this.listQuery).then((resp:any)=>{
      if(resp && resp.data.list){
        this.list = resp.data.list
      }
    }).finally(()=>{
      this.listLoading = false
    })
    // Just to simulate the time of the request
    
  }
}
</script>
<style lang="scss" scoped>
.page-router{
  .el-table{
    min-height: 530px;
  }
}
</style>