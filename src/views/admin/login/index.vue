<template>
  <div class="login">
    <el-card class="">
      <el-form :model="ruleForm"
              status-icon
              :size="loginConfig.size"
              :rules="rules"
              ref="ruleForm"
              class="login-form">
        <div class="title">
          <h2>后台登录</h2>
        </div>

        <el-form-item prop="username">
          <el-input type="text"
                    v-model="ruleForm.username"
                    autocomplete="off"
                    placeholder="请输入用户名">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    placeholder="请输入密码"
                    show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>

        <el-checkbox v-model="ruleForm.rememberMe" style="margin:0 0 25px 0;">
          记住密码
        </el-checkbox>

        <el-form-item>
          <el-button :type="loginConfig.submitBtn.type"
                    @click.native.prevent="submitForm()"
                    class="login-btn">
            <div v-if="loading">
              <i class="el-icon-loading"></i>
              <span>登录中...</span>
            </div>
            <div v-else>登录</div>
          </el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
import {SUCCESS_CODE} from "@/constant/code";
import {User} from "@/constant/user";

export default {
  name: "admin-login",
  data() {
    return {
      ruleForm: {
        username: User.username,
        password: User.password,
        rememberMe: false
      },
      /*登录配置*/
      loginConfig: {
        /*组件大小*/
        size: 'large',
        submitBtn: {
          type: 'primary',
        },
        /*验证成功消息*/
        validSuccess: "登录成功！",
      },
      /*表单校验*/
      rules: this.$rules.login,
      loading: false
    }
  },
  methods: {
    submitForm() {
      this.loading = false;
      // TODO 提交登录
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$cookies.setData("rememberMe", this.ruleForm.username);
          /*登录功能*/
          this.$store.dispatch("Login", this.ruleForm).then(res => {
            if (res.code === SUCCESS_CODE) {
              /*开启加载动画*/
              this.loading = true;
              /*延迟跳转页面*/
              setTimeout(() => {
                /*页面跳转*/
                this.$router.push({path: this.redirect || "/homeTable"}).catch(() =>{});
                /*验证成功消息*/
                this.$modal.msgSuccess(this.loginConfig.validSuccess);
              }, 2000);
            } else {
              /*错误提示*/
              this.$modal.notifyWarning(res.data);
            }
          })
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: -webkit-linear-gradient(135deg, rgb(221, 194, 255), rgb(236, 255, 204));
  background-size: cover;
}

.title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 10px;
  background: #ffffff;
  width: 400px;

  .el-input {
    height: 38px;

    input {
      height: 38px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }

  .el-input__icon {
    margin: 0;
  }

  .login-btn {
    width: 100%;
    //padding: 1.3em 3em;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    background-color: #23c483;
    border: none;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    color: #fff;
  }

}
</style>
