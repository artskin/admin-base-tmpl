<template>
  <svg :class="className" t="1614422789908" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="771" width="64" height="64" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs></defs>
    <path d="M736.32426667 130.75555521a45.32906667 45.32906667 0 0 0-39.27608854 22.57351147l-330.41066666 566.43128852 66.9923552 114.77902295a90.9312 90.9312 0 0 0 157.24088853 0l370.4604448-635.33511148A45.51111147 45.51111147 0 0 0 922.05511147 130.75555521l-185.7308448 0z" p-id="772"></path>
    <path d="M102.4 130.75555521a45.51111147 45.51111147 0 0 0-39.3216 68.44871146l370.5059552 635.33511148a91.06773333 91.06773333 0 0 0 157.2408896-1e-8l111.8208-191.73831147L417.24586667 153.32906668A45.42008853 45.42008853 0 0 0 377.92426667 130.75555521L102.4 130.75555521z" p-id="773"></path>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class IconSvg extends Vue {
  @Prop({default:''}) className!:string
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>
