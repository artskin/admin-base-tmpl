<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  overflow: auto;
  height: calc(100% - 50px);
  position: relative;
  top: 50px;
}
</style>
