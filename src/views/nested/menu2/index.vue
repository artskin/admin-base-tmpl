<template>
  <div class="page-router">
    <el-alert
      :closable="false"
      title="menu 2"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Menu2'
})
export default class Menu2 extends Vue {}
</script>
