<template>
  <div class="page-router">
    <h3 class="page-title">权限展示</h3>
    
    <el-card>
      <h4>一、元素权限</h4>
      <div class="tip">
        原理：通过用户（或登录）接口，拿到当前用户的权限的code码，然后根据code码判断操作按钮是否显示
      </div>
      <p>
        <el-button type="primary" size="small" plain v-permission="2007021">新建用户</el-button>
         &lt;el-button v-permission="2007021" &gt;用户新建 &lt;/el-button&gt;
      </p>
      <p>
        <el-button type="primary" size="small" plain v-if="$permission('2007021')">新建用户</el-button>
         &lt;el-button v-if="$permission('2007021')" &gt;用户新建 &lt;/el-button&gt;
      </p>
      <p>
        <el-button type="primary" size="small" plain v-if="$permission('2009527')">删除用户</el-button>
         editor用户 登录看不到删除按钮
      </p>
      <h4>二、路由权限</h4>

      
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component({
  name: 'PermissionPage'
})
export default class PermissionPage extends Vue {
  private filterText = '';
  private data2 = []
}
</script>
<style lang="scss" scoped>
.tip{
  border-left:4px solid var(--gray) ;
  padding: var(--gap-m);
  background: var(--white-gray);
  color: var(--gray-dark);
}
</style>