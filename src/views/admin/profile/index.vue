<template>
  <div style="display: flex">
    <el-card class="box-card" style="width: 500px;margin: 20px 10px">

      <div slot="header" class="clearfix">
        <span><i class="el-icon-user" style="margin-right: 5px"></i>个人信息</span>
      </div>

      <div style="text-align: center">
        <el-skeleton :loading="loading" animated>
          <template slot="template">
            <el-skeleton-item variant="image" class="skeleton-img"></el-skeleton-item>
            <!--分割线-->
            <el-divider style="margin: 20px 0;"></el-divider>
            <div v-for="i in 6" :key="i">
              <el-skeleton-item variant="h3" style="margin: 5px 0"></el-skeleton-item>
            </div>
          </template>
          <template>
            <!--头像-->
            <el-avatar :size="100" :src="user.avatar"></el-avatar>
            <!--分割线-->
            <el-divider style="margin: 20px 0"></el-divider>
            <!--基本信息-->
            <el-descriptions class="margin-top" :column="1" size="15">
              <el-descriptions-item :label="'用户名'">{{ user.username }}</el-descriptions-item>
              <el-descriptions-item :label="'性\u3000别'">{{ user.gender | genderFilter }}</el-descriptions-item>
              <el-descriptions-item :label="'角\u3000色'">{{
                  user.userRole === superAdmin? '超级管理员' : '普通管理员'
                }}
              </el-descriptions-item>
              <el-descriptions-item :label="'状\u3000态'">{{ user.userStatus | statusFilter }}</el-descriptions-item>
              <el-descriptions-item label="注册时间">{{ user.createTime }}</el-descriptions-item>
            </el-descriptions>
          </template>
        </el-skeleton>
      </div>

    </el-card>

    <el-card class="box-card" style="margin: 20px 10px;width: 100%">
      <div slot="header" class="clearfix">
        <span> <i class="el-icon-document" style="margin-right: 5px"></i>基本信息</span>
      </div>
      <el-tabs v-model="activeName">

        <el-tab-pane label="信息修改" name="first">

          <el-skeleton :loading="loading" animated>
            <template slot="template">
              <div v-for="i in 5" :key="i">
                <el-skeleton-item variant="h1" style="margin: 10px 0"></el-skeleton-item>
              </div>
            </template>

            <template>
              <el-form :model="user" :rules="userRule" status-icon ref="user" label-width="80px" class="edit-info">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="user.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="checkPass">
                  <template>
                    <el-radio v-model="user.gender" :label="0">男</el-radio>
                    <el-radio v-model="user.gender" :label="1">女</el-radio>
                  </template>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('info')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </template>
          </el-skeleton>

        </el-tab-pane>

        <el-tab-pane label="密码修改" name="second">
          <el-form :model="resetPassword"
                   :rules="passRule"
                   status-icon
                   ref="passForm"
                   label-width="80px"
                   class="demo-ruleForm">
            <el-form-item label="旧密码" prop="oldPass">
              <el-input type="password" v-model="resetPassword.oldPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="newPass">
              <el-input type="password" v-model="resetPassword.newPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="resetPassword.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('pass')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

      </el-tabs>
    </el-card>

  </div>
</template>

<script>
import {SUCCESS_CODE, SUPER_ADMIN} from "@/constant/code";

export default {
  name: "admin-profile",
  data() {
    return {
      user: {
        username: "",
        gender: 0
      },
      superAdmin: SUPER_ADMIN,
      resetPassword: {},
      activeName: 'first',
      loading: true,
      userRule: this.$rules.user,
      passRule: this.$rules.resetPass
    }
  },
  methods: {
    init() {
      this.resetPassword = {
        oldPass: "",
        newPass: "",
        chickPass: ""
      }
      this.loading = true;
      setTimeout(() => {
        /*获取当前用户信息*/
        this.$store.dispatch("GetInfo").then(res => {
          if (res.code === SUCCESS_CODE) {
            this.user = res.data;
          } else {
            this.$modal.alert(res.msg);
          }
          this.loading = false;
        })
      }, 1000);
    },
    submitForm(info) {
      switch (info) {
        case 'info':
          this.updateInfo();
          break;
        case 'pass':
          this.updatePassword()
          break;
        default:
          break;
      }
    },
    /*修改个人信息*/
    updateInfo() {
      this.$api.adminApi
          .updateCurrent(this.user).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.$modal.msgSuccess(res.data);
          this.init();
        } else {
          this.$modal.msgError(res.data);
        }
      });
    },
    /*修改密码*/
    updatePassword() {
      this.$refs.passForm.validate((valid) => {
        if (valid) {
          this.$api.adminApi
              .editPassword(this.resetPassword).then(res => {
            if (res.code === SUCCESS_CODE) {
              this.$modal.msgSuccess(res.data);
              this.init();
            } else {
              this.$modal.msgError(res.data);
            }
          });
        }
      })
    },
    resetForm() {
      this.init();
    }
  },
  created() {
    this.init();
  }
}
</script>

<style scoped>
.skeleton-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto;
}

.edit-info {
  margin-top: 10px;
}
</style>