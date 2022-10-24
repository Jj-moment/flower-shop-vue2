<template>
  <div style="margin: 10px">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="title bg-color-1">
          <div>
            <div class="text font-size-18" style="margin-bottom: 15px">订单总数</div>
            <div class="text font-size-42">150</div>
          </div>
          <i class="el-icon-s-order color-1"></i>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="title bg-color-2">
          <div>
            <div class="text font-size-18" style="margin-bottom: 15px">商品数量</div>
            <div class="text font-size-42">1000</div>
          </div>
          <i class="el-icon-s-flag color-2"></i>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="title bg-color-3">

          <div>
            <div class="text font-size-18" style="margin-bottom: 15px">累计销售</div>
            <div class="text font-size-42">1800</div>
          </div>
          <i class="el-icon-menu color-3"></i>
        </div>

      </el-col>
      <el-col :span="6">
        <div class="title bg-color-4">
          <div>
            <div class="text font-size-18" style="margin-bottom: 15px">用户数量</div>
            <div class="text font-size-42">50</div>
          </div>
          <i class="el-icon-s-custom color-4"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "admin-home",
  data() {
    return {
      info: [
        {
          title: '用户总数',
          count: 10
        },
        {
          title: '新增订单',
          count: 10
        },
        {
          title: '今日销售',
          count: 10
        },
        {
          title: '销售总额',
          count: 10
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  border-radius: 20px;
  width: auto;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title i {
  font-size: 100px;
  float: right;
}

.color-1 {
  color: rgba(173, 207, 255, 1);
}

.color-2 {
  color: rgba(218, 189, 249, 1);
}

.color-3 {
  color: rgba(253, 191, 194, 1);
}

.color-4 {
  color: rgba(237, 174, 237, 1);
}

.bg-color-1 {
  background-color: rgba(153, 195, 255, 1);
}

.bg-color-2 {
  background: rgba(209, 173, 247, 1);
}

.bg-color-3 {
  background: rgba(253, 175, 179, 1);
}

.bg-color-4 {
  background: rgba(232, 154, 232, 1);
}

.font-size-18 {
  font-size: 18px;
}

.font-size-42 {
  font-size: 42px;
}

.margin-top-10 {
  margin-top: 10px;
}

.text {
  opacity: 1;
  width: 100px;
  font-weight: 400;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.65);
}
</style>