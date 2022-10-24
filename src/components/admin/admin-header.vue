<template>
  <div class="admin-header">
    <!--收缩功能-->
    <div style="font-size: 22px;display: flex;align-items: center">
      <i :class="collapseBtnClass" style="cursor: pointer;margin-right: 10px" @click="collapse"></i>
      <admin-breadcrumb>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </admin-breadcrumb>
    </div>

    <!--个人信息-->
    <el-dropdown style=" cursor: pointer;" @command="handleCommand">
      <el-avatar :size="40" @error="errorHandler">
        <img :src="avatar" alt="img"/>
      </el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="profile">个人信息</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
import AdminBreadcrumb from "@/components/admin/breadcrumb/breadcrumb";

export default {
  name: "admin-header",
  components: {AdminBreadcrumb},
  props: ['isCollapse', 'avatar'],
  data() {
    return {
      collapseBtnClass: "el-icon-s-fold",
    }
  },
  methods: {
    collapse() {
      if (!this.isCollapse) {
        this.collapseBtnClass = "el-icon-s-unfold";
        this.$emit("sideWidth", 64);
      } else {
        this.collapseBtnClass = "el-icon-s-fold";
        this.$emit("sideWidth", 200);
      }
    },
    handleCommand(command) {
      switch (command) {
        case 'profile':
          /*页面跳转*/
          this.$emit('command', "profile");
          break;
        case 'logout':
          /*页面跳转*/
          this.$emit('command', "logout");
          break;
        default:
          break;
      }
    },
    errorHandler() {
    }
  }
}
</script>

<style scoped>
.admin-header {
  /*font-size: 12px;*/
  margin: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between
}
</style>
