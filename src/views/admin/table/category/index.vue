<template>
  <el-card class="box-card">
    <!--搜索功能-->
    <admin-search :tableCol="tableCol"
                  :config="this.$config.tableConfig.SearchConfig"
                  @search="pagination"
                  v-if="dialogConfig.isSearchShow"
    />

    <!--表格数据-->
    <admin-table :tableData="tableData"
                 :query="query"
                 :tableCol="tableCol"
                 :loading="dialogConfig.loading"
                 :config="this.$config.tableConfig.TableConfig"
                 @handle="handle"
                 @pagination="pagination"
    />

    <!--dialog对话框-->
    <admin-dialog :dialogData='formData'
                  :tableCol="tableCol"
                  :config="dialogConfig"
                  @cancel="handle"
                  @updateById="update"
                  @insert="insert"
    />

  </el-card>

</template>

<script>
import AdminSearch from "@/components/admin/main/admin-search";
import AdminTable from "@/components/admin/main/admin-table";
import AdminDialog from "@/components/admin/main/admin-dialog";
import {SUCCESS_CODE} from "@/constant/code";

export default {
  name: "category-index",
  components: {AdminDialog, AdminTable, AdminSearch},
  data() {
    return {
      /*dialog表单数据*/
      formData: {},
      /*表格数据*/
      tableData: [],
      /*表格字段*/
      // TODO 需要修改
      tableCol: this.$config.Col.category,
      // TODO 需要修改
      api: this.$api.categoryApi,
      /*默认配置*/
      dialogConfig: {
        /*dialog标题*/
        title: '提示消息',
        /*表单校验*/
        // TODO 需要修改
        rules: this.$rules.login,
        /*是否显示dialog*/
        visible: false,
        /*表格延迟加载动画*/
        loading: true,
        /*新增还是修改*/
        info: '',
        /*其他配置(dialog外观配置)*/
        other: this.$config.tableConfig.DialogConfig,
        /*是否显示搜索框*/
        isSearchShow: true
      },
      /*分页查询条件*/
      query: {
        current: 1,
        pageSize: 10,
        total: 5
      }
    }
  },
  methods: {
    /*重置表单数据*/
    init() {
      // TODO 需要修改
      this.formData = {
        username: '',
        password: '',
        email: ''
      }
    },
    /*分页获取用户信息*/
    queryByPage() {
      /*开启延迟加载动画*/
      this.dialogConfig.loading = true;
      /*延迟加载*/
      setTimeout(() => {
        this.api.queryByPage(this.query)
            .then(res => {
              /*设置表数据*/
              this.tableData = res.data;
              /*获取数据总数*/
              this.query.total = res.total;
              /*关闭延迟加载动画*/
              this.dialogConfig.loading = false;
            });
      }, 500)
    },
    /*更新分页查询条件*/
    pagination(data) {
      /*动态拼接对象*/
      this.query = Object.assign(this.query, data);
      this.queryByPage();
    },
    /*dialog开关控制*/
    handle(info, row) {
      switch (info) {
        case 'insert':
          this.init();
          this.dialogConfig.visible = true;
          this.dialogConfig.info = info;
          this.dialogConfig.title = "新增信息";
          break;
        case 'edit':
          /*使用深拷贝*/
          this.formData = JSON.parse(JSON.stringify(row));
          /*开启dialog*/
          this.dialogConfig.visible = true;
          this.dialogConfig.info = info;
          this.dialogConfig.title = "修改信息";
          break;
        case 'delete':
          this.deleteBatch(row.id);
          break;
        case 'deleteBatch':
          this.deleteBatch(row);
          break;
        case 'cancel':
          this.init();
          /*关闭dialog*/
          this.dialogConfig.visible = false;
          break;
        case 'refresh':
          /*刷新表格*/
          this.queryByPage();
          break;
        case 'hideSearch':
          /*隐藏搜索框*/
          this.dialogConfig.isSearchShow = !this.dialogConfig.isSearchShow;
          break;
        default:
          break;
      }
    },
    /*批量删除*/
    deleteBatch(ids) {
      if (this.api.delete) {
        this.api.delete(ids)
            .then(res => {
              if (res.code === SUCCESS_CODE) {
                this.queryByPage();
                /*提示消息*/
                this.$modal.msgSuccess(res.data);
              } else {
                this.$modal.msgError(res.data);
              }
            })
      } else {
        this.$modal.msgError("系统错误 提交失败");
      }

    },
    /*更新信息*/
    update(data) {
      if (this.api.update) {
        this.api.update(data)
            .then(res => {
              if (res.code === SUCCESS_CODE) {
                /*提示消息*/
                this.$modal.msgSuccess(res.data);
                /*关闭dialog*/
                this.dialogConfig.visible = false;
                /*表格更新*/
                this.queryByPage();
              } else {
                this.$modal.msgError(res.data);
              }
            })
      } else {
        this.$modal.msgError("系统错误 提交失败");
      }
    },
    /*新增信息*/
    insert(data) {
      if (this.api.insert) {
        this.api.insert(data).then(res => {
          if (res.code === SUCCESS_CODE) {
            /*提示消息*/
            this.$modal.msgSuccess(res.data);
            /*关闭dialog*/
            this.dialogConfig.visible = false;
            /*表格更新*/
            this.queryByPage();
          } else {
            this.$modal.msgError(res.data);
          }
        })
      } else {
        this.$modal.msgError("系统错误 提交失败");
      }
    }
  },
  created() {
    /*表格更新*/
    this.queryByPage();
  }
}
</script>

<style scoped>

</style>
