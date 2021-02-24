<template>
  <div class="app-container">
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
        label="Task_ID"
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
        label="DeviceName"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.deviceName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="Status"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">
            {{ scope.row.status }}
          </el-tag>
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
          <span>{{ scope.row.timestamp | parseTime }}</span>
        </template>
      </el-table-column>
    </el-table>
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
      return new Date(timestamp).toISOString()
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
    await getTasks(this.listQuery).then((resp:any)=>{
      //console.log(resp)
      if(resp && resp.dataList){
        this.list = resp.dataList
      }
    })
    
    
    
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }
}
</script>
