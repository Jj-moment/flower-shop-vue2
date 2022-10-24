// const mini = 'mini';
// const small = 'small';
// const medium = 'medium';
const size = 'small';

export const tableConfig = {
    /*表格搜索框配置*/
    SearchConfig: {
        /*是否开启动态搜索*/
        isDny: true,
        /*标签大小*/
        labelWidth: "60",
        /*搜索按钮颜色*/
        searchBtnType: "primary",
        /*重置按钮颜色*/
        resetBtnType: "danger",
    },
    /*对话框配置*/
    DialogConfig: {
        /*标签宽度*/
        labelWidth: '80',
        /*表单间距*/
        colSpan: 24,
        /*弹框宽度【百分值】*/
        width: '43',
        /*按钮配置*/
        formBtn: {
            /*提交按钮颜色*/
            submitBtnType: "primary",
            /*取消按钮颜色*/
            cancelBtnType: "danger",
        }
    },
    /*表格配置*/
    TableConfig: {
        /*表格外观*/
        title: {
            /*是否有条纹*/
            stripe: false,
            /*是否有边框*/
            border: true,
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
            /*大小*/
            size: size,
            /*编辑按钮主题*/
            editBtnType: '',
            /*删除按钮主题*/
            deleteBtnType: 'danger'
        }
    }
}
