<template>
  <div class="page-router">
    <el-alert
      :closable="false"
      title="menu 1-3"
      type="success"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Menu13'
})
export default class Menu13 extends Vue {}
</script>
