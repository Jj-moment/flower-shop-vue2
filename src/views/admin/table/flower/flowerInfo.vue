<template>
  <el-card class="box-card">
    <div class="flex">
      <img style="width: 500px; height: 500px" :src="flowerInfo.img" alt="img">

      <div>
        <el-descriptions :column="2" class="description" size="medium">
          <template slot="title">
            <i class="el-icon-document"></i>
            基本信息
          </template>
          <el-descriptions-item :label="'商品编号'">{{ flowerInfo.flowerNum }}</el-descriptions-item>
          <el-descriptions-item label="鲜花名称">{{ flowerInfo.flowerName }}</el-descriptions-item>
          <el-descriptions-item :label="'售\u3000\u3000价'">{{ flowerInfo.flowerPrice }}</el-descriptions-item>
          <el-descriptions-item label="市场价格">{{ flowerInfo.flowerMarketPrice }}</el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <el-descriptions :column="2" class="description" size="medium">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
            统计
          </template>
          <el-descriptions-item label="库存">{{ flowerInfo.stock }}</el-descriptions-item>
          <el-descriptions-item label="销量">{{ flowerInfo.sale }}</el-descriptions-item>
          <el-descriptions-item label="重量">{{ flowerInfo.weight }}克</el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <el-descriptions :column="2" class="description" size="medium">
          <template slot="title">
            <i class="el-icon-coin"></i>
            类别
          </template>
          <el-descriptions-item label="类型">
            <div v-for="(item, index) in flowerInfo.flowerTypeList" :key="index">
              <el-tag size="small">{{ item.categoryName }}</el-tag>
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="颜色">
            <div v-for="(item, index) in flowerInfo.flowerColorList" :key="index">
              <el-tag size="small">{{ item.categoryName }}</el-tag>
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="用途">
            <div v-for="(item, index) in flowerInfo.flowerUseList" :key="index">
              {{ item.categoryName }}
            </div>
          </el-descriptions-item>
          <el-descriptions-item label="支数">{{ flowerInfo.flowerNumber }}</el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <el-descriptions :column="2" class="description" size="medium">
          <template slot="title">
            <i class="el-icon-time"></i>
            状态
          </template>
          <el-descriptions-item label="是否新品">{{ flowerInfo.newStatus === 0 ? "否" : "是" }}</el-descriptions-item>
          <el-descriptions-item label="是否推荐">{{ flowerInfo.recommendStatus === 0 ? "否" : "是" }}
          </el-descriptions-item>
          <el-descriptions-item label="上架状态">{{ flowerInfo.publishStatus === 0 ? "下架" : "上架" }}
          </el-descriptions-item>
          <el-descriptions-item label="审核状态">{{ flowerInfo.verifyStatus === 0 ? "未审核" : "已审核" }}
          </el-descriptions-item>
        </el-descriptions>
        <el-divider></el-divider>
        <el-descriptions title="描述" :column="1" class="description" size="medium">
          <template slot="title">
            <i class="el-icon-chat-dot-round"></i>
            描述
          </template>
          <el-descriptions-item label="材料">{{ flowerInfo.material }}</el-descriptions-item>
          <el-descriptions-item label="包装">{{ flowerInfo.packaging }}</el-descriptions-item>
          <el-descriptions-item label="花语">{{ flowerInfo.wish }}</el-descriptions-item>
          <el-descriptions-item label="备注">{{ flowerInfo.flowerDesc }}</el-descriptions-item>
        </el-descriptions>
      </div>

    </div>
  </el-card>
</template>

<script>
import {SUCCESS_CODE} from "@/constant/code";

export default {
  name: "flowerInfo",
  props: ['id'],
  data() {
    return {
      flowerInfo: {},
    };
  },
  methods: {
    /*获取商品信息*/
    getFlower() {
      this.$api.flowerApi.queryById(this.id).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.flowerInfo = res.data;
        } else {
          this.$modal.msgError(res.data);
        }
      })
    },
  },
  created() {
    this.getFlower();
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
}

.description {
  width: 500px;
  margin: 20px 0;
}
</style>