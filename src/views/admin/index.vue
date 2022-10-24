<template>
  <el-container style="height: 100%;">
    <el-aside :width="isCollapse ? '64px' : '200px'" class="admin-aside">
      <admin-menu :isCollapse="isCollapse" :menus="menus"></admin-menu>
    </el-aside>

    <el-container>

      <el-header>
        <admin-header :isCollapse="isCollapse" :avatar="avatar"
                      @sideWidth="changeWidth"
                      @command="command"></admin-header>
      </el-header>

      <el-main style="padding: 0;height: auto;background-color: #f1f1f1;">
          <router-view/>
      </el-main>

    </el-container>

  </el-container>

</template>

<script>
import AdminMenu from "@/components/admin/admin-menu";
import AdminHeader from "@/components/admin/admin-header";
import {SUCCESS_CODE} from "@/constant/code";

export default {
  name: "admin-index",
  components: {AdminHeader, AdminMenu},
  data() {
    return {
      isCollapse: false,
      avatar: '',
      menus: []
    }
  },
  methods: {
    changeWidth() {
      this.isCollapse = !this.isCollapse;
    },
    command(info) {
      switch (info) {
        case 'profile':
          this.$router.push({path: this.redirect || "/adminProfile"});
          break;
        case 'logout':
          this.$store.dispatch("Logout").then(() => {
            this.$router.push({path: this.redirect || "/"})
          });
          break;
      }
    }
  },
  created() {
    /*加载用户信息和头像*/
    this.$store.dispatch("GetInfo");
    this.avatar = this.$store.getters.avatar;
    /*获取菜单信息*/
    this.$api.menuApi.list()
        .then(res => {
          if (res.code === SUCCESS_CODE) {
            this.menus = res.data;
          }
        })
  }
}
</script>

<style lang="less" scoped>

.admin-aside {
  background-color: rgb(238, 241, 246);
  overflow-x: hidden;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -o-transition: width 0.25s;
}

.box-card {
  height: auto;
  margin: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>