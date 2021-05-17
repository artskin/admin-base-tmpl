<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="['menu-wrapper', isCollapse ? 'simple-mode' : 'full-mode', {'first-level': isFirstLevel}]"
  >
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <sidebar-item-link
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item
          :index="resolvePath(theOnlyOneChild.path)"
          :class="{'submenu-title-noDropdown': isFirstLevel}"
        >
          <i v-if="theOnlyOneChild.meta.icon" :class="theOnlyOneChild.meta.icon"></i>
          <span
            v-if="theOnlyOneChild.meta.title"
            slot="title"
          >{{ theOnlyOneChild.meta.title.includes('.') ? $t(theOnlyOneChild.meta.title) : theOnlyOneChild.meta.title}}</span>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-submenu
      v-else
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
        <span
          v-if="item.meta && item.meta.title"
          slot="title"
        >{{ item.meta.title.includes('.') ? $t(item.meta.title) : item.meta.title}}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path-browserify'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Route, RouteConfig } from 'vue-router'
import { isExternal } from '@/utils/validate'
import SidebarItemLink from './SidebarItemLink.vue'

@Component({
  // Set 'name' here to prevent uglifyjs from causing recursive component not work
  // See https://medium.com/haiiro-io/element-component-name-with-vue-class-component-f3b435656561 for detail
  name: 'SidebarItem',
  components: {
    SidebarItemLink
  }
})
export default class SidebarItem extends Vue {
  @Prop({ required: true }) private item!: RouteConfig
  @Prop({ default: false }) private isCollapse!: boolean
  @Prop({ default: true }) private isFirstLevel!: boolean
  @Prop({ default: '' }) private basePath!: string

  get showingChildNumber() {
    if (this.item.children) {
      const showingChildren = this.item.children.filter((item) => {
        if (item.meta && item.meta.hidden) {
          return false
        } else {
          return true
        }
      })
      return showingChildren.length
    }
    return 0
  }

  get theOnlyOneChild() {
    if (this.showingChildNumber > 1) {
      return null
    }
    if (this.item.children) {
      for (let child of this.item.children) {
        if (!child.meta || !child.meta.hidden) {
          return child
        }
      }
    }
    // If there is no children, return itself with path removed,
    // because this.basePath already conatins item's path information
    return { ...this.item, path: '' }
  }

  private resolvePath(routePath: string) {
    if (isExternal(routePath)) {
      return routePath
    }
    if (isExternal(this.basePath)) {
      return this.basePath
    }
    return path.resolve(this.basePath, routePath)
  }
}
</script>

<style lang="scss">
.el-submenu.is-active > .el-submenu__title {
  //color: #f4f4f5 !important;
}
.submenu-title-noDropdown,
.el-menu-item,
.el-submenu__title{
  display: flex;
  align-items: center;
}
.el-menu-item,.el-submenu{
  
  &,.el-submenu__title{
    color: var(--menu-color);
  }
  i{
    color: var(--menu-color-icon);
  }
  
  &:focus,
  &:hover,
  .el-submenu__title:hover{
    color: var(--primary);
    background-color: var(--sideBarBg-hover) !important;
  }
  &.is-active{
    color: var(--primary);
    //background-color: var(--sideBarBg-hover) !important;
  }
}

.full-mode {
  .el-submenu>.el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: var(--sideBarWidth) !important;
  }
}

.simple-mode {
  background-color: var(--sideBarBg);
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;
      .el-tooltip {
        padding-left: 15px !important;
      }
    }

    .el-submenu {
      overflow: hidden;
      &>.el-submenu__title {
        padding-left: 15px !important;
        .el-submenu__icon-arrow {
          display: none;
        }

        &>span {
          //visibility: hidden;
          display: none;
        }
      }
    }
  }
}
</style>
