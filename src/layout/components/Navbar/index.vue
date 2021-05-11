<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb
      id="breadcrumb-container"
      class="breadcrumb-container"
    />
    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper flex-center">
          <i class="el-icon-user"></i>
          <span class="uname">{{username}}</span>
          
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a
            target="_blank"
            href="https://github.com/artskin/base-admin"
          >
            <el-dropdown-item>
              Github
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span
              style="display:block;"
              @click="logout"
            >LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <SysSetting></SysSetting>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { UserModule } from '@/store/modules/user'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import SysSetting from './SysSetting.vue'
@Component({
  name: 'Navbar',
  components: {
    Breadcrumb,
    Hamburger,
    SysSetting
  }
})
export default class Navbar extends Vue {
  get sidebar() {
    return AppModule.sidebar
  }

  get device() {
    return AppModule.device.toString()
  }

  get avatar() {
    return UserModule.avatar
  }
  get username(){
    return UserModule.name
  }

  private toggleSideBar() {
    AppModule.ToggleSideBar(false)
  }

  private async logout() {
    await UserModule.LogOut()
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  background: var(--white);
  box-shadow: 0 1px 8px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    ::v-deep i{color: var(--gray-dark);}
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    .uname{
      font-size: 12px;
      padding: 0 4px;
    }
    &:focus {
      outline: none;
    }
    .right-menu-item {
      height: 100%;
      font-size: 18px;
      color: var(--menu-color);
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      .avatar-wrapper {
        position: relative;
        padding: 0 8px;
        .user-avatar {
          cursor: pointer;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
::v-deep{
  .el-color-picker__trigger{
    padding: 9px;
    border: none;
  }
}
</style>
