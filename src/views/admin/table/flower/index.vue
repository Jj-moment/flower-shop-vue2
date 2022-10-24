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
    >

      <template #table-column="row">
        <el-row>
          <el-col :span="12">
            <strong>新品: </strong>
          </el-col>
          <el-col :span="12">
            <el-switch v-model="row.tableRow.newStatus"
                       :active-value="1"
                       :inactive-value="0"
                       active-color="#13ce66"
                       inactive-color="#ff4949">
            </el-switch>
          </el-col>
          <el-col :span="12">
            <strong>推荐: </strong>
          </el-col>
          <el-col :span="12">
            <el-switch v-model="row.tableRow.recommendStatus"
                       :active-value="1"
                       :inactive-value="0"
                       active-color="#13ce66"
                       inactive-color="#ff4949">
            </el-switch>
          </el-col>
          <el-col :span="12">
            <strong>上架: </strong>
          </el-col>
          <el-col :span="12">
            <el-switch v-model="row.tableRow.publishStatus"
                       :active-value="1"
                       :inactive-value="0"
                       active-color="#13ce66"
                       inactive-color="#ff4949">
            </el-switch>
          </el-col>
        </el-row>
      </template>

      <template slot-scope="row">
        <!-- 生成的是ul列表 -->
        <el-button
            @click="chickFlower(row.row.id)"
            type="info"
            style="margin: 5px"
            size="mini">
          详情
        </el-button>
      </template>
    </admin-table>

    <!--dialog对话框-->
    <admin-dialog :dialogData='formData'
                  :tableCol="tableCol"
                  :config="dialogConfig"
                  @cancel="handle"
                  @updateById="update"
                  @insert="insert"
    />

    <el-drawer
        title="新增信息"
        :visible.sync="drawer"
        direction="rtl"
        size="40%">
      <el-form :model="formData"
               :rules="dialogConfig.rules"
               ref="ruleForm"
               label-width="100px"
               style="margin: 0 50px"
               class="demo-ruleForm">
        <el-row :gutter="20">

          <el-col :span="24"><h1>基本信息</h1></el-col>

          <el-col :span="12">
            <el-form-item label="商品名称" prop="flowerName" required>
              <el-input v-model="formData.flowerName"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="商品图片" prop="img">
              <el-image :src="formData.img" style="width: 50px;height: 50px"></el-image>
            </el-form-item>
          </el-col>

          <el-col :span="24"><h1>统计</h1></el-col>

          <el-col :span="12">
            <el-form-item label="商品价格" prop="flowerPrice" required>
              <el-input v-model="formData.flowerPrice"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="市场价格" prop="flowerMarketPrice" required>
              <el-input v-model="formData.flowerMarketPrice"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="库存" prop="stock">
              <el-input v-model="formData.stock"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="重量" prop="weight">
              <el-input v-model="formData.weight"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24"><h1>类别</h1></el-col>

          <el-col :span="12">
            <el-form-item label="用途" prop="flowerUse">
              <el-select v-model="formData.flowerUse" multiple placeholder="请选择">
                <el-option
                    v-for="item in categoryUse"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类型" prop="flowerType">
              <el-select v-model="formData.flowerType" multiple placeholder="请选择">
                <el-option
                    v-for="item in categoryType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="颜色" prop="flowerColor">
              <el-select v-model="formData.flowerColor" multiple placeholder="请选择">
                <el-option
                    v-for="item in categoryColor"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="支数" prop="flowerNumber">
              <el-input v-model="formData.flowerNumber"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24"><h1>推荐</h1></el-col>

          <el-col :span="12">
            <el-form-item label="新品" prop="newStatus">
              <el-switch v-model="formData.newStatus"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         :active-value="1"
                         :inactive-value="0">
              </el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="推荐" prop="recommendStatus">
              <el-switch v-model="formData.recommendStatus"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
                         :active-value="1"
                         :inactive-value="0">
              </el-switch>
            </el-form-item>
          </el-col>

          <h1>描述</h1>

          <el-form-item label="材料" prop="material">
            <el-input type="textarea" v-model="formData.material" autosize></el-input>
          </el-form-item>

          <el-form-item label="包装" prop="packaging">
            <el-input type="textarea" v-model="formData.packaging" autosize></el-input>
          </el-form-item>

          <el-form-item label="花语" prop="wish">
            <el-input type="textarea" v-model="formData.wish" autosize></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="flowerDesc">
            <el-input type="textarea" v-model="formData.flowerDesc" autosize></el-input>
          </el-form-item>
        </el-row>

        <el-form-item style="display: flex;justify-content: flex-end">
          <el-button type="primary" @click="update(formData)">提交</el-button>
          <el-button type="danger" @click="handle('cancel')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>

  </el-card>

</template>

<script>
import AdminSearch from "@/components/admin/main/admin-search";
import AdminTable from "@/components/admin/main/admin-table";
import AdminDialog from "@/components/admin/main/admin-dialog";
import {CATEGORY_COLOR, CATEGORY_TYPE, CATEGORY_USE, SUCCESS_CODE} from "@/constant/code";

export default {
  name: "flower-index",
  components: {AdminDialog, AdminTable, AdminSearch},
  data() {
    return {
      categoryUse: CATEGORY_USE,
      categoryType: CATEGORY_TYPE,
      categoryColor: CATEGORY_COLOR,
      value: [],
      /*dialog表单数据*/
      formData: {},
      /*表格数据*/
      tableData: [],
      /*表格字段*/
      // TODO 需要修改
      tableCol: this.$config.Col.flower,
      // TODO 需要修改
      api: this.$api.flowerApi,
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
      },
      drawer: false
    }
  },
  methods: {
    /*重置表单数据*/
    init() {
      // TODO 需要修改
      this.formData = {
        flowerName: "",
        img: "",
        flowerUse: "",
        flowerType: "",
        flowerColor: "",
        flowerNumber: 1,
        flowerPrice: 0,
        flowerMarketPrice: 0,
        stock: 0,
        weight: 0,
        material: "",
        packaging: "",
        wish: "",
        flowerDesc: "",
        newStatus: 0,
        recommendStatus: 0
      }
    },
    /*详情查看*/
    chickFlower(id) {
      /*跳转页面，将订单信息带入*/
      this.$router.push({
        path: this.redirect || `/flowerInfo/${id}`,
      }).catch(() => {
        this.$modal.msgError("跳转失败");
      });
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
          /*开启drawer*/
          this.drawer = true;
          this.dialogConfig.info = info;
          this.dialogConfig.title = "新增信息";
          break;
        case 'edit':
          /*使用深拷贝*/
          this.queryById(row.id);
          /*开启drawer*/
          this.drawer = true;
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
          this.drawer = false;
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
      data.flowerColor = this.arrayToString(data.flowerColor);
      data.flowerType = this.arrayToString(data.flowerType);
      data.flowerUse = this.arrayToString(data.flowerUse);
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
      data.flowerColor = this.arrayToString(data.flowerColor);
      data.flowerType = this.arrayToString(data.flowerType);
      data.flowerUse = this.arrayToString(data.flowerUse);
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
    },
    /*查询单个*/
    queryById(id) {
      this.api.queryById(id).then(res => {
        if (res.code === SUCCESS_CODE) {
          this.formData = this.filterData(res.data);
        } else {
          this.$modal.msgError(res.data);
        }
      })
    },
    submitForm() {
    },
    resetForm() {
    },
    /*处理商品信息*/
    filterData(data) {
      let flowerColor = [];
      data.flowerColorList.forEach(item => {
        flowerColor.push(item.categoryCode)
      })
      data['flowerColor'] = flowerColor;
      let flowerUse = [];
      data.flowerUseList.forEach(item => {
        flowerUse.push(item.categoryCode)
      })
      data['flowerUse'] = flowerUse;

      let flowerType = [];
      data.flowerTypeList.forEach(item => {
        flowerType.push(item.categoryCode)
      })
      data['flowerType'] = flowerType;
      delete data.flowerColorList
      delete data.flowerUseList
      delete data.flowerTypeList
      return data;
    },
    arrayToString(data) {
      let str = "[";
      data.forEach(item => {
        str += "\"" + item + "\"" + ","
      })
      return str + "]";
    },
  },
  created() {
    /*表格更新*/
    this.queryByPage();
  }
}
</script>

<style scoped>

</style>
