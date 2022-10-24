<template>
  <el-dialog :title="config.title"
             :visible="config.visible"
             :width="dialogConfig.width+'%'"
             :before-close="cancel"
             destroy-on-close>
    <el-row :gutter="18">

      <el-form ref="formData"
               :model="formData"
               :rules="config.rules"
               :size="dialogConfig.size"
               :label-width="dialogConfig.labelWidth+'px'">

        <el-col>
          <el-row :gutter="20">
            <div :span="dialogConfig.colSpan" v-for="(info, index) in tableCol" :key="index">

              <div v-if="!info.dialogHide&&(!info.editHide && config.info === 'edit' || config.info === 'insert')">
                <!--选择框-->
                <el-col :span="12" v-if="info.type === 'select'">
                  <el-form-item :label="info.label" :prop="info.prop">
                    <div v-if="info.prop === 'userRole'">
                      <el-select v-model="formData[info.prop]" disabled :placeholder="info.placeholder">
                        <div v-for="(option, index) in info.options" :key="index">
                          <el-option
                              :label="option.label"
                              :value="option.value"
                              :disabled="option.disabled">
                          </el-option>
                        </div>
                      </el-select>
                    </div>
                    <div v-else>
                      <el-select v-model="formData[info.prop]" :placeholder="info.placeholder">
                        <div v-for="(option, index) in info.options" :key="index">
                          <el-option
                              :label="option.label"
                              :value="option.value"
                              :disabled="option.disabled">
                          </el-option>
                        </div>
                      </el-select>
                    </div>

                  </el-form-item>
                </el-col>
                <!--输入框-->
                <el-col :span="12" v-else-if="info.type === 'input'">
                  <el-form-item :label="info.label" :prop="info.prop">
                    <el-input v-model="formData[info.prop]" :placeholder="info.placeholder" clearable></el-input>
                  </el-form-item>
                </el-col>
                <!--开关-->
                <el-col :span="12" v-else-if="info.type === 'switch'">
                  <el-form-item :label="info.label" :prop="info.prop">
                    <el-switch
                        v-model="formData[info.prop]"
                        active-text="启用"
                        inactive-text="禁用"
                        :active-value="0"
                        :inactive-value="1">
                    </el-switch>
                  </el-form-item>
                </el-col>
                <el-col :span="20" v-if="info.type === 'textarea'">
                  <el-form-item :label="info.label" :prop="info.prop">
                    <el-input v-model="formData[info.prop]"
                              :type="info.type"
                              :placeholder="info.placeholder"
                              :autosize="{minRows: 4, maxRows: 4}">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" v-else-if="info.type === 'time'">
                  <el-form-item :label="info.label" :prop="info.prop">
                    <div class="block">
                      <el-date-picker
                          v-model="formData[info.prop]"
                          type="datetime"
                          placeholder="选择日期时间">
                      </el-date-picker>
                    </div>
                  </el-form-item>
                </el-col>
              </div>

            </div>
          </el-row>
        </el-col>

        <!--提交按钮-->
        <el-col :span="24" style="text-align: end;">
          <el-button :type="dialogConfig.formBtn.submitBtnType" @click="submitForm">
            提交
          </el-button>
          <el-button :type="dialogConfig.formBtn.cancelBtnType" @click="cancel">
            取 消
          </el-button>
        </el-col>
      </el-form>

    </el-row>
  </el-dialog>
</template>

<script>
export default {
  name: "admin-dialog",
  props: {
    /*表单回显数据*/
    dialogData: {
      type: Object
    },
    /*加载需要显示的表单*/
    tableCol: {
      type: Array
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
      formData: {},
      dialogConfig: {}
    }
  },
  methods: {
    /*初始化配置*/
    init() {
      this.dialogConfig = {
        /*标签大小*/
        labelWidth: '82',
        /*表单间距*/
        colSpan: 24,
        /*弹框宽度*/
        width: '40',
        /*按钮配置*/
        formBtn: {
          /*提交按钮颜色*/
          submitBtnType: "primary",
          /*取消按钮颜色*/
          cancelBtnType: "danger",
        }
      }
      /*自定义配置*/
      if (this.config && this.config.other) {
        let configs = this.config.other;
        for (const item in configs) {
          // eslint-disable-next-line no-prototype-builtins
          if (configs.hasOwnProperty(item)) {
            this.dialogConfig[item] = configs[item];
          }
        }
      }
    },
    cancel() {
      this.$emit('cancel', 'cancel');
      // this.$ref.formData.resetForm();
    },
    /*刷新表格*/
    refresh() {
      this.$emit("handle", 'refresh');
    },
    /*提交数据*/
    submitForm() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          if (this.config.info === 'edit') {
            this.$confirm('你确定修改一条数据吗？', '系统提示', {type: 'warning'})
                .then(() => {
                  /*发送修改请求*/
                  this.$emit('updateById', this.formData);
                })
          } else if (this.config.info === 'insert') {
            this.$confirm('你确定新增一条数据吗？', '系统提示', {type: 'warning'})
                .then(() => {
                  /*发送修改请求*/
                  this.$emit('insert', this.formData);
                });
          }
        } else {
          this.$message({
            message: '验证失败, 请重新填写！',
            type: 'warning'
          });
        }
      });
    }
  },
  watch: {
    /*监听表单数据，实时更新*/
    dialogData: {
      handler(val) {
        this.formData = val;
      }
    }
  },
  created() {
    /*初始化*/
    this.init();
  }
}
</script>

<style scoped>

</style>
