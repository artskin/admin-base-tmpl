<template>
<div :class="{'hideSidebar':isCollapse}">
  <!-- <el-scrollbar wrap-class="scrollbar-wrapper"></el-scrollbar> -->
    <h1 class="logo">
      <img class="img-logo" src="/img/logo.svg" alt="">
      <span>Admin Base</span>
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
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/_variables.scss'

function getCaption(str){
	let index=str.lastIndexOf("\{");
	str=str.substring(index+1,str.length-1);
	return str;
}
@Component({
  name: 'SideBar',
  components: {
    SidebarItem
  }
})
export default class SideBar extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get routes() {
    return (this.$router as any).options.routes
  }

  get variables() {
    let cssVar = getCaption(variables).split(';')
    let cssMap = {}
    cssVar.forEach((element:String) => {
      let cssArr = element.split(':')
      cssMap[cssArr[0].trim()] = cssArr[1]
    });
    return cssMap
  }

  get isCollapse() {
    return !this.sidebar.opened
  }
}
</script>

<style lang="scss">
.img-logo{
  height: 24px;
}
.logo{
  font-size: 20px;
  text-align: center;
  color: rgba(255,255,255,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
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
  background-color: var(--primary);
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }
  .el-menu{
    background-color: var(--primary) !important;
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
