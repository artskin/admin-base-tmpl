<template>
  <div class="page-router">
    <el-alert
      :closable="false"
      title="menu 1-1"
      type="success"
    >
      <router-view />
    </el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Menu11'
})
export default class Menu11 extends Vue {}
</script>
