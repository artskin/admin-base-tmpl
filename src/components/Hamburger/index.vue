<template>
  <div
    :class="[{'is-active': isActive}]"
    @click="toggleClick"
  >
    <i class="el-icon-s-unfold"></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Hamburger'
})
export default class Hamburger extends Vue {
  @Prop({ default: false }) private isActive!: boolean

  private toggleClick() {
    this.$emit('toggleClick')
  }
}
</script>

<style lang="scss" scoped>
.is-active {
  transform: rotate(180deg);
}
</style>
