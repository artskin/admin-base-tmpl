<template>
  <div class="page-router">
    <el-alert
      :closable="false"
      title="menu 1"
    >
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <router-view />
      </transition>
    </el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Menu1'
})
export default class Menu1 extends Vue {}
</script>
