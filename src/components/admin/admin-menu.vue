<template>
  <el-menu class="admin-menu"
           background-color="#545c64"
           text-color="#fff"
           :collapse-transition="true"
           :collapse="isCollapse"
           default-active="1"
           :unique-opened="true"
           router>

    <div class="admin-logo">
      <img src="../../assets/logo.png" alt="图标" class="admin-img">
      <b style="color: white" v-show="!isCollapse">后台管理系统</b>
    </div>

    <fragment v-for="menu in menus" :key="menu.id">
      <fragment v-if="menu.children && menu.children.length > 0">
        <el-submenu :index="menu.id.toString()">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.menuName }}</span>
          </template>

          <el-menu-item v-for="children in menu.children"
                        :key="children.id"
                        :index="children.component">
            <template slot="title">
              <i :class="children.icon"></i>
              <span slot="title">{{ children.menuName }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </fragment>

      <fragment v-else>
        <el-menu-item :index="menu.component">
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.menuName }}</span>
        </el-menu-item>
      </fragment>
    </fragment>

  </el-menu>
</template>

<script>
export default {
  name: "admin-menu",
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.admin-menu {
  height: 100%;
  overflow-x: hidden;
  transition: all 10ms;
}

.admin-img {
  width: 20px;
  position: relative;
  top: 5px;
  margin-right: 5px;
}

.admin-logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
