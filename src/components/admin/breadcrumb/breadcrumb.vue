<template>
  <el-breadcrumb separator="/" style="margin-left: 10px;">
    <el-breadcrumb-item :to="{ path: '/homeTable' }">首页</el-breadcrumb-item>
    <slot></slot>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "admin-breadcrumb"
}
</script>

<style scoped>

</style>