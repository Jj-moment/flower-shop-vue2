<template>
  <!--搜索功能-->
  <el-form :model="search"
           ref="searchForm"
           :label-width="searchConfig.labelWidth"
           :inline="true"
           class="admin-search">
    <el-row type="flex" justify="start" style="flex-wrap: wrap; flex-direction: row">

      <!--搜索框-->
      <div v-for="(info, index) in tableCol" :key="index">
        <div v-if="info.search">
          <el-form-item :label="info.label">
            <el-input v-if="info.type==='input'"
                      v-model="search[info.prop]"
                      :placeholder="info.placeholder"
                      clearable>
            </el-input>

            <el-select v-if="info.type==='select' || info.type==='switch'"
                       v-model="search[info.prop]"
                       :placeholder="info.placeholder">
              <div v-for="(option, key) in info.options" :key="key">
                <el-option :label="option.label" :value="option.value"></el-option>
              </div>
            </el-select>
          </el-form-item>
        </div>
      </div>

      <!--搜索按钮-->
      <el-form-item>
        <el-button v-if="!searchConfig.isDny"
                   :type="searchConfig.searchBtnType"
                   @click="searchForm">搜索
        </el-button>

        <el-button :type="searchConfig.resetBtnType"
                   @click="resetForm">重置
        </el-button>
      </el-form-item>

      <!--拓展功能-->
      <slot></slot>

    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "admin-search",
  props: {
    tableCol: {
      Type: Object
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
      /*表单信息*/
      search: {},
      /*默认配置*/
      searchConfig: {}
    }
  },
  methods: {
    /*初始化搜索框*/
    init() {
      /*初始化默认配置*/
      this.searchConfig = {
        /*是否开启动态搜索*/
        isDny: true,
        /*标签大小*/
        labelWidth: "60",
        /*搜索按钮颜色*/
        searchBtnType: "primary",
        /*重置按钮颜色*/
        resetBtnType: "danger",
      }

      /*所有筛选条件清空*/
      if (this.tableCol) {
        let search = {}
        for (const obj of this.tableCol) {
          search[obj.prop] = "";
        }
        this.search = search;
      }

      /**
       * 自定义配置
       * 功能: 重写父组件的config配置
       * 当父组件传入为空，则使用默认配置
       * 当父组件传入配置和默认配置冲突，则采用父组件参数
       * 当父组件只传入部分配置参数，则采用父组件参数，其他参数使用默认配置
       * */
      if (this.config) {
        for (const item in this.config) {
          this.searchConfig[item] = this.config[item];
        }
      }
    },
    /*将传出的参数过滤并发送*/
    emitData(data) {
      /*过滤对象中空值*/
      const newData = Object.keys(data)
          .filter((key) => data[key] !== null && data[key] !== undefined && data[key] !== '')
          .reduce((acc, key) => ({...acc, [key]: data[key]}), {});
      /*判断过滤对象后是否为空值, 若为空则不发送数据*/
      if (Object.keys(newData).length !== 0) {
        /*发送数据*/
        this.$emit('search', newData);
      }
    },
    /*提交搜索框*/
    searchForm() {
      if (!this.searchConfig.isDny) {
        this.emitData(this.search);
      }
    },
    /*重置搜索框*/
    resetForm() {
      this.init();
      if (this.searchConfig.isDny) {
        this.$emit('search', this.search);
      }
    }
  },
  created() {
    /*初始化表单*/
    this.init();
  },
  watch: {
    /*动态搜索*/
    search: {
      handler(newVal) {
        if (this.searchConfig.isDny) {
          this.emitData(newVal);
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.admin-search {
  margin: 10px 0;
}
</style>
