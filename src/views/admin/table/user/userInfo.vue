<template>
  <el-card class="box-card" style="display: flex;justify-content: center;text-align: center">
    <el-avatar :size="100" :src="userInfo.avatar"></el-avatar>
    <el-divider></el-divider>
    <h1>用户信息</h1>
    <el-descriptions
        class="margin-top"
        :column="4"
        size="medium"
        style="width: 1000px"
        border
        direction="vertical">
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户编号
        </template>
        {{ userInfo.userNum }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          用户名
        </template>
        {{ userInfo.username }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          性别
        </template>
        {{ userInfo.gender | genderFilter}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          电话
        </template>
        {{ userInfo.phone }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          邮箱
        </template>
        {{ userInfo.email }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          状态
        </template>
        {{ userInfo.userStatus | statusFilter}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          生日
        </template>
        {{ userInfo.birthday }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          创建时间
        </template>
        {{ userInfo.createTime }}
      </el-descriptions-item>
    </el-descriptions>

    <h1>购物车</h1>
    <el-table
        :data="flowerInfo"
        style="width: 100%"
        class="margin-top"
        size="medium"
        border>
      <el-table-column align="center" prop="flower.flowerNum" label="商品编码"></el-table-column>
      <el-table-column align="center" prop="flower.img" label="图片">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover">
            <el-image :src="scope.row.flower.img" style="width:500px;height:500px;"></el-image>
            <el-image slot="reference" :src="scope.row.flower.img" style="width: 80px;height: 80px"></el-image>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="flower.flowerName" label="商品名称"></el-table-column>
      <el-table-column align="center" prop="flower.flowerPrice" label="商品价格"></el-table-column>
      <el-table-column align="center" prop="quantity" label="商品数量"></el-table-column>
      <el-table-column align="center" label="合计">
        <template slot-scope="scope">
          {{ scope.row.quantity * scope.row.flower.flowerPrice }}
        </template>
      </el-table-column>
      <el-table-column align="center" fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="chickFlower(scope.row.flower.id)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-divider content-position="right">总计
      <span style="color: #f56c6c;font-size: 18px">{{ totalPrice | getPrice }}</span>
    </el-divider>

    <h1>个人订单</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-bottom: 100px">
      <el-tab-pane label="已付款" name="first">
        <el-table
            :data="order"
            style="width: 100%"
            class="margin-top"
            size="medium"
            border>
          <template v-if="order.orderStatus!==5 || order.orderStatus!==6">
            <el-table-column align="center" prop="orderNum" label="订单号"></el-table-column>
            <el-table-column align="center" prop="receiveName" label="收货人"></el-table-column>
            <el-table-column align="center" prop="receivePhone" label="收货人电话"></el-table-column>
            <el-table-column align="center" prop="payMethod" label="支付方式">
              <template slot-scope="scope">
                {{scope.row.payMethod | payMethodFilter}}
              </template>
            </el-table-column>
            <el-table-column align="center" prop="payMoney" label="支付金额"></el-table-column>
            <el-table-column align="center" prop="payTime" label="支付时间"></el-table-column>
            <el-table-column align="center" fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="chickOrder(scope.row.orderNum)" type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未付款" name="second">
        <el-table
            :data="order"
            style="width: 100%"
            class="margin-top"
            size="medium"
            border>
          <template v-if="order.orderStatus===5">
            <el-table-column align="center" prop="orderNum" label="订单号"></el-table-column>
            <el-table-column align="center" prop="receiveName" label="收货人"></el-table-column>
            <el-table-column align="center" prop="receivePhone" label="收货人电话"></el-table-column>
            <el-table-column align="center" prop="createTime" label="创建时间"></el-table-column>
          </template>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已失效" name="third">
        <el-table
            :data="order"
            style="width: 100%"
            class="margin-top"
            size="medium"
            border>
          <template v-if="order.orderStatus===6">
            <el-table-column align="center" prop="orderNum" label="订单号"></el-table-column>
            <el-table-column align="center" prop="receiveName" label="收货人"></el-table-column>
            <el-table-column align="center" prop="receivePhone" label="收货人电话"></el-table-column>
            <el-table-column align="center" prop="createTime" label="创建时间"></el-table-column>
          </template>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import {SUCCESS_CODE} from "@/constant/code";

export default {
  name: "userInfo",
  props: ['id'],
  data() {
    return {
      activeName: 'first',
      userInfo: {},
      order: [],
      flowerInfo: []
    };
  },
  methods: {
    /*跳转到商品详情页面*/
    chickFlower(id) {
      /*跳转页面，将订单信息带入*/
      this.$router.push({
        path: this.redirect || `/flowerInfo/${id}`,
      }).catch(() => {
        this.$modal.msgError("跳转失败");
      });
    },
    /*跳转到订单详情页面*/
    chickOrder(id) {
      // 跳转页面，将订单信息带入
      this.$router.push({
        path: this.redirect || `/orderInfo/${id}`,
      }).catch(() => {
        this.$modal.msgError("跳转失败");
      });
    },
    /*获取用户信息*/
    getUser() {
      this.$api.userApi.queryById(this.id).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.userInfo = res.data;
        } else {
          this.$modal.msgError(res.data);
        }
      })
    },
    getShopping() {
      this.$api.shoppingApi.getFlowerByUserId(this.id)
          .then(res => {
            if (res.code === SUCCESS_CODE) {
              this.flowerInfo = res.data;
            } else {
              this.$modal.msgError(res.data);
            }
          })
    },
    getOrder() {
      this.$api.orderApi
          .queryUserOrder(this.id)
          .then(res => {
            if (res.code === SUCCESS_CODE) {
              this.order = res.data;
            } else {
              this.$modal.msgError(res.data);
            }
          })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  // 过滤器将价格转换为￥20.00的格式
  filters: {
    getPrice(val) {
      return "￥" + val.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.flowerInfo.forEach(item => {
        total += item.flower.flowerPrice * item.quantity
      })
      return total;
    },
  },
  created() {
    this.getUser();
    this.getShopping();
    this.getOrder();
  },
}
</script>

<style scoped>
.margin-top {
  margin-top: 20px;
}
</style>