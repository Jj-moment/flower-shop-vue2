<template>
  <div>
    主页
  </div>
</template>

<script>
export default {
  name: "page-index",
  data() {
    return {
      list: [],
      query: {
        limit: 5,
        page: 1
      }
    }
  },
  methods: {
    queryByPage() {
      this.$api.userApi
          .queryByPage(this.query).then(res => {
        this.list = res.data
      })
    }
  },
  created() {
    this.queryByPage();
  }
}
</script>

<style scoped>

</style>