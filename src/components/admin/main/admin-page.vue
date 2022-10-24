<template>
    <el-pagination
        :current-page="query.page"
        :page-size="query.limit"
        :total="query.total"
        :layout="layout"
        :page-sizes="pageSizes"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        class="pagination-container"/>
</template>

<script>

export default {
  name: 'AdminPage',
  props: {
    query:{
      total: {
        required: true,
        type: Number
      },
      page: {
        type: Number,
        default: 1
      },
      limit: {
        type: Number,
        default: 10
      }
    },
    pageSizes: {
      type: Array,
      default() {
        return [5, 10, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', {current: 1, pageSize: val})
    },
    handleCurrentChange(val) {
      this.$emit('pagination', {current: val, pageSize: this.query.limit})
    }
  }
}
</script>

<style scoped>
.pagination-container {
  padding: 32px 16px;
  text-align: center;
}

</style>
