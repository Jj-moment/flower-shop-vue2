<template>
  <div>
    <!--表格操作-->
    <div style="margin: 10px 0;display: flex;justify-content: space-between">
      <div>
        <el-button type="success" v-show="!isHide.insert" @click="insertForm()">
          新增
          <i class="el-icon-circle-plus-outline"></i>
        </el-button>

        <el-button type="danger" v-show="!isHide.deleteBatch" @click="deleteRows()" :disabled="isDisable">
          批量删除
          <i class="el-icon-circle-close"></i>
        </el-button>
        <!--其他组件-->
        <slot name="rightOpt"></slot>
      </div>

      <div v-show="!isHide.leftOpt">
        <el-tooltip class="item" effect="dark" content="隐藏搜索" placement="top">
          <el-button icon="el-icon-search" circle @click="hideSearch"></el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="刷新" placement="top">
          <el-button icon="el-icon-refresh" circle @click="refresh"></el-button>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="隐藏列" placement="top">
          <el-button icon="el-icon-menu" circle></el-button>
        </el-tooltip>
      </div>
    </div>

    <!--表格数据-->
    <el-table :data="tableData"
              row-key="id"
              lazy
              :stripe="tableConfig.title.stripe"
              :border="tableConfig.title.border"
              v-loading="loading"
              v-if="tableConfig.title.refresh"
              :header-cell-style="{ background: '#f4f3f9', fontWeight: 'bolder',fontSize:'14px' }"
              :highlight-current-row="tableConfig.title.highlightCurrentRow"
              :tree-props="tableConfig.title.tree"
              @selection-change="handId"
              class="admin-table">

      <!--表头渲染-->
      <el-table-column
          :type="tableConfig.firstCol.type"
          :width="tableConfig.firstCol.width"
          v-if="tableConfig.firstCol.isShow">
      </el-table-column>

      <el-table-column v-for="(col, index) in tableCol"
                       :key="index"
                       :prop="col.prop"
                       :label="col.label"
                       :width="col.width"
                       :fit="true"
                       align="center"
                       :show-overflow-tooltip="true">
        <template slot-scope="scope">

          <template v-if="!col.render">
            <template v-if="col.type==='input' || col.type==='time'||col.type==='textarea'">
              {{ scope.row[col.prop] }}
            </template>

            <!--图标-->
            <template v-if="col.type === 'icon'">
              <i :class="scope.row[col.prop]"></i>
            </template>

            <!--图片-->
            <template v-if="col.type === 'img'">
              <el-popover placement="right" trigger="hover">
                <el-image :src="scope.row[col.prop]" style="width:500px;height:500px;"></el-image>
                <el-image slot="reference" :src="scope.row[col.prop]" style="width: 80px;height: 80px"></el-image>
              </el-popover>
            </template>

            <!--商品联合开关-->
            <template v-if="col.type === 'switch-third'">
              <slot name="table-column" :table-row="scope.row"></slot>
            </template>

            <template v-if="col.type==='select'">
              <div v-for="(option, index) in col.options" :key="index">
                <div v-if="scope.row[col.prop]+'' === option.value+''">
                  <el-tag :type="option.tag">{{ option.label }}</el-tag>
                </div>
              </div>
            </template>
            <!--开关-->
            <template v-if="col.type==='switch'">
              <!--如果是超级管理员则禁用switch-->
              <div v-if="scope.row.userRole!=='super_admin'">
                <el-switch v-model="scope.row[col.prop]"
                           :active-value="0"
                           :inactive-value="1"
                           active-color="#13ce66"
                           inactive-color="#ff4949"
                           @change="updateStatus(scope.row, col.prop)">
                </el-switch>
              </div>
              <div v-else>
                <el-switch v-model="scope.row[col.prop]"
                           :active-value="0"
                           :inactive-value="1"
                           active-color="#13ce66"
                           inactive-color="#ff4949"
                           disabled>
                </el-switch>
              </div>
            </template>
          </template>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <slot :row="scope.row"></slot>

          <el-button :type="tableConfig.btnOpt.editBtnType"
                     v-show="!isHide.update"
                     style="margin: 5px;"
                     size="mini"
                     @click="editFrom(scope.row)">
            编辑
          </el-button>

          <el-popconfirm
              confirm-button-text='确定'
              cancel-button-text='取消'
              icon="el-icon-info"
              icon-color="red"
              title="确定删除吗？"
              @confirm="deleteFrom(scope.row)">

            <el-button slot="reference"
                       v-show="!isHide.delete"
                       style="margin: 5px"
                       size="mini"
                       :type="tableConfig.btnOpt.deleteBtnType">
              删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>

    </el-table>

    <!--分页组件-->
    <el-pagination
        v-show="!isHide.page"
        :current-page="query.page"
        :page-size="query.limit"
        :total="query.total"
        :layout="'total, sizes, prev, pager, next, jumper'"
        :page-sizes="[5, 10, 30]"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        class="pagination-container"/>
  </div>
</template>

<script>
import {STATUS} from "@/constant/user";
import {SUPER_ADMIN} from "@/constant/code";

export default {
  name: "admin-table",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    /*超级管理员标识*/
    superAdmin: SUPER_ADMIN,
    tableCol: {},
    loading: {
      type: Boolean,
      default: false
    },
    query: {
      type: Object
    },
    config: {
      type: Object
    },
    /*是否隐藏操作*/
    isHide: {
      type: Object,
      default: () => ({
        insert: false,
        deleteBatch: false,
        update: false,
        delete: false,
        page: false,
        table: false,
        leftOpt: false,
      })
    },
  },
  data() {
    return {
      /*表格配置*/
      tableConfig: {},
      /*批量删除id*/
      deleteBatchId: [],
      /*是否禁用*/
      isDisable: true
    }
  },
  methods: {
    /*初始化配置*/
    init() {
      /*表格默认配置*/
      this.tableConfig = {
        /*表格外观*/
        title: {
          /*是否有条纹*/
          stripe: false,
          /*是否有边框*/
          border: false,
          fit: true,
          highlightCurrentRow: true,
          refresh: true,
          /*开启树形组合*/
          tree: {children: 'children', hasChildren: 'hasChildren'}
        },
        /*表头设置*/
        firstCol: {
          /*是否显示*/
          isShow: true,
          /*表头宽度*/
          width: 50,
          /*表头类型*/
          type: 'selection'
        },
        /*表格操作按钮配置*/
        btnOpt: {
          /*编辑按钮主题*/
          editBtnType: 'text',
          /*删除按钮主题*/
          deleteBtnType: 'text'
        }
      }
      /*自定义配置*/
      if (this.config) {
        for (const item in this.config) {
          this.tableConfig[item] = this.config[item];
        }
      }
    },
    handleCommand() {
    },
    /*刷新表格*/
    refresh() {
      this.$emit("handle", 'refresh');
    },
    /*隐藏搜索*/
    hideSearch() {
      this.$emit("handle", 'hideSearch');
    },
    /*获取数据主键id*/
    handId(row) {
      if (row.length > 0) {
        let ids = []
        for (const data of row) {
          ids.push(data.id);
        }
        this.deleteBatchId = ids;
        /*解除批量删除按钮*/
        this.isDisable = false;
      } else {
        this.isDisable = true;
      }
    },
    /*编辑数据*/
    editFrom(row) {
      this.$emit("handle", 'edit', row);
    },
    /*新增数据*/
    insertForm() {
      this.$emit("handle", 'insert');
    },
    /*单个删除*/
    deleteFrom(row) {
      /*将row转化为数组, 获取id*/
      this.$emit("handle", 'deleteBatch', [row.id]);
    },
    /*批量删除*/
    deleteRows() {
      this.$confirm("确认删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$emit("handle", 'deleteBatch', this.deleteBatchId);
      }).catch(() => {
      })
    },
    /*用户状态*/
    updateStatus(row, prop) {
      /*获取启用还是禁用信息*/
      let msg = '';
      // TODO 外部引用
      for (const item of STATUS) {
        if (row[prop] === item.value) {
          msg = item.label;
        }
      }
      this.$confirm(`确认${msg}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$emit("handle", 'status', row);
      }).catch(() => {
        /*取消弹框，刷新表格*/
        this.refresh();
      });
    },
    handleSizeChange(val) {
      this.$emit('pagination', {current: 1, pageSize: val})
    },
    handleCurrentChange(val) {
      this.$emit('pagination', {current: val, pageSize: this.query.limit})
    }
  },
  created() {
    this.init();
  }
}
</script>

<style scoped>
.admin-table {
  font-size: 13px;
}

.pagination-container {
  padding: 32px 16px;
  text-align: center;
}
</style>
