<template>
  <el-card class="box-card">

    <el-steps :active="1" style="margin: 20px 200px">
      <el-step title="提交订单" icon="el-icon-edit"></el-step>
      <el-step title="支付订单" icon="el-icon-edit"></el-step>
      <el-step title="平台发货" icon="el-icon-upload"></el-step>
      <el-step title="确认发货" icon="el-icon-picture"></el-step>
      <el-step title="完成评价" icon="el-icon-picture"></el-step>
    </el-steps>

    <div>
      <el-descriptions class="margin-top"
                       title="基本信息" :column="4"
                       size="medium" border
                       direction="vertical"
                       style="margin: 50px 150px"
      >
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            订单编号
          </template>
          {{ orderInfo.orderNum }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            支付方式
          </template>
          {{ orderInfo.payMethod }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            支付金额
          </template>
          {{ orderInfo.payMoney }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            创建时间
          </template>
          {{ orderInfo.createTime }}
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions class="margin-top"
                       title="收货人信息"
                       :column="4"
                       size="medium" border
                       direction="vertical"
                       style="margin: 50px 150px">

        <template slot="extra">
          <el-button type="primary" size="text" @click="chickUser(orderInfo.userId)">查看用户</el-button>
        </template>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            收货人
          </template>
          {{ orderInfo.receiveName }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ orderInfo.receivePhone }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            邮政编码
          </template>
          {{ orderInfo.postCode }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            收货地址
          </template>
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>
      </el-descriptions>
    </div>

  </el-card>
</template>

<script>
import {SUCCESS_CODE} from "@/constant/code";

export default {
  name: "orderInfo",
  props: ['id'],
  data() {
    return {
      orderInfo: {}
    }
  },
  methods: {
    /*获取订单详情*/
    getOrder() {
      this.$api.orderApi
          .queryByNum(this.id).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.orderInfo = res.data;
        } else {
          this.$modal.msgError(res.data);
        }
      })
    },
    /*查看用户详细信息，跳转到用户详情页面*/
    chickUser(id) {
      /*跳转页面，将订单信息带入*/
      this.$router.push({
        path: this.redirect || `/userInfo/${id}`,
      }).catch(() => {
        this.$modal.msgError("跳转失败");
      });
    }
  },
  created() {
    this.getOrder();
  }
}
</script>

<style scoped>

</style>