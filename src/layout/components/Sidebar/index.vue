<template>
<div :class="{'hideSidebar':isCollapse}">
  <!-- <el-scrollbar wrap-class="scrollbar-wrapper"></el-scrollbar> -->
    <h1 class="logo">
      <icon-svg className="svg-logo"></icon-svg>
      <span>Admin Kit</span>
    </h1>
    <el-menu
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
        :is-collapse="isCollapse"
      />
    </el-menu>
    <code>
      {{routes}}
    </code>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import SidebarItem from './SidebarItem.vue'
import IconSvg from '@/components/IconSvg/index.vue'
// import variables from '@/assets/styles/_variables.scss'
// import {styleToObject} from '@/utils/tools'
@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
    IconSvg
  }
})
export default class SideBar extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get routes() {
    // console.log(this.$router.options)
    // console.log(this.$router.getRoutes())
    return (this.$router as any).options.routes
  }

  // get variables() {
  //   return styleToObject(variables)
  // }

  get isCollapse() {
    return !this.sidebar.opened
  }
}
</script>

<style lang="scss">
.img-logo{
  height: 24px;
}
.svg-logo{
  width: 30px;
  height: 30px;
  path{
    &:nth-child(2){
      fill:var(--primary)
    }
    fill:var(--primary-hover)
  }
}
.logo{
  font-size: 20px;
  text-align: center;
  color: var(--menu-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  height: 50px;
  margin: 0;
  span{
    padding-left: 5px;
  }
}
.hideSidebar {
  .logo {
    font-size: 18px;
    span{
      display: none;
    }
  }
}
.sidebar-container {
  background-color: var(--sideBarBg);
  box-shadow: 0 1px 8px rgb(0 21 41 / 8%);
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }
  
  .el-menu{
    background-color:transparent;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%
}
.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
