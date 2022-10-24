import {GENDER, ROLE, STATUS} from "@/constant/user";
import {ORDER_STATUS, PAYMENT_METHOD} from "@/constant/order";

export const Col = {
    user: [
        {
            label: '用户编号',
            prop: 'userNum',
            type: 'input',
            placeholder: '请输入编号',
            search: true,
        },
        {
            label: '头像',
            prop: 'avatar',
            type: 'img',
            placeholder: '请输入头像',
        },
        {
            label: '用户名',
            prop: 'username',
            type: 'input',
            placeholder: '请输入名称',
            search: true,
        },
        {
            label: '性别',
            prop: 'gender',
            placeholder: '请选择性别',
            search: true,
            type: 'select',
            options: GENDER
        },
        {
            label: '电话',
            prop: 'phone',
            placeholder: '请输入电话',
            search: true,
            type: 'input'
        },
        {
            label: '邮箱',
            prop: 'email',
            placeholder: '请输入邮箱',
            search: true,
            type: 'input'
        },
        {
            label: '状态',
            prop: 'userStatus',
            placeholder: '请选择状态',
            search: true,
            type: 'switch',
            options: STATUS
        },
        {
            label: '生日',
            prop: 'birthday',
            placeholder: '请输入生日',
            type: 'time'
        },
        {
            label: '创建时间',
            prop: 'createTime',
            placeholder: '请输入时间',
            type: 'time'
        }
    ],
    admin: [
        {
            label: '用户名',
            prop: 'username',
            type: 'input',
            placeholder: '请输入名称',
            search: true,
        },
        {
            label: '性别',
            prop: 'gender',
            placeholder: '请选择性别',
            search: true,
            type: 'select',
            options: GENDER
        },
        {
            label: '状态',
            prop: 'userStatus',
            placeholder: '请选择状态',
            search: true,
            type: 'switch',
            options: STATUS
        },
        {
            label: '角色',
            prop: 'userRole',
            placeholder: '请选择角色',
            search: false,
            type: 'select',
            options: ROLE
        },
        {
            label: '创建时间',
            prop: 'createTime',
            placeholder: '请输入时间',
            // editHide: true,
            dialogHide: true,
            // search: false,
            type: 'time'
        }],
    flower: [
        {
            label: '编号',
            prop: 'flowerNum',
            type: 'input',
            placeholder: '请输入编号',
            search: true,
        },
        {
            label: '图片',
            prop: 'img',
            type: 'img',
            placeholder: '请输入鲜花',
        },
        {
            label: '标签',
            prop: 'status',
            type: 'switch-third',
            placeholder: '请输入鲜花',
        },
        {
            label: '鲜花名称',
            prop: 'flowerName',
            type: 'input',
            placeholder: '请输入鲜花',
            search: true,
        },
        // {
        //     label: '鲜花用途',
        //     prop: 'flowerUse',
        //     placeholder: '请选择类型',
        //     search: true,
        //     type: 'input',
        // },
        // {
        //     label: '鲜花类型',
        //     prop: 'flowerType',
        //     placeholder: '请选择类型',
        //     search: true,
        //     type: 'input',
        // },
        // {
        //     label: '鲜花颜色',
        //     prop: 'flowerColor',
        //     placeholder: '请选择颜色',
        //     search: true,
        //     type: 'input',
        // },
        // {
        //     label: '鲜花支数',
        //     prop: 'flowerNumber',
        //     placeholder: '请选择支数',
        //     search: true,
        //     type: 'input',
        // },
        {
            label: '价格',
            prop: 'flowerPrice',
            placeholder: '请选择价格',
            search: true,
            type: 'input',
        },
        {
            label: '库存',
            prop: 'stock',
            placeholder: '请输入库存',
            search: true,
            type: 'input',
        },
        {
            label: '市场价格',
            prop: 'flowerMarketPrice',
            placeholder: '请输入价格',
            search: true,
            type: 'input',
        },
        {
            label: '创建时间',
            prop: 'createTime',
            placeholder: '请输入时间',
            type: 'input'
        },
        // {
        //     label: '花语',
        //     prop: 'wish',
        //     placeholder: '请输入花语',
        //     search: true,
        //     type: 'textarea',
        // },
        // {
        //     label: '材料',
        //     prop: 'material',
        //     placeholder: '请输入材料',
        //     search: true,
        //     type: 'textarea',
        // },
        // {
        //     label: '描述',
        //     prop: 'flowerDesc',
        //     placeholder: '请输入描述',
        //     search: true,
        //     type: 'textarea',
        // },
    ],
    order: [
        {
            label: '订单编号',
            prop: 'orderNum',
            type: 'input',
            placeholder: '请输入编号',
            search: true,
        },
        // {
        //     label: '订单人',
        //     prop: 'orderName',
        //     type: 'input',
        //     placeholder: '请输入名称',
        //     search: true,
        // },
        // {
        //     label: '省',
        //     prop: 'province',
        //     type: 'input',
        //     placeholder: '请输入省',
        //     search: true,
        // },
        // {
        //     label: '城市',
        //     prop: 'city',
        //     type: 'input',
        //     placeholder: '请输入城市',
        //     search: true,
        // },
        // {
        //     label: '县',
        //     prop: 'district',
        //     type: 'input',
        //     placeholder: '请输入县',
        //     search: true,
        // },
        // {
        //     label: '详细地址',
        //     prop: 'address',
        //     type: 'input',
        //     placeholder: '请输入地址',
        //     search: true,
        // },
        {
            label: '支付方式',
            prop: 'payMethod',
            type: 'select',
            placeholder: '请选择支付方式',
            search: true,
            options: PAYMENT_METHOD
        },
        {
            label: '支付金额',
            prop: 'payMoney',
            type: 'input',
            placeholder: '请输入支付金额',
            search: true,
        },
        {
            label: '订单状态',
            prop: 'orderStatus',
            type: 'select',
            placeholder: '请选择订单状态',
            search: true,
            options: ORDER_STATUS
        },
        {
            label: '支付时间',
            prop: 'payTime',
            type: 'time',
            placeholder: '请输入支付时间',
        },
        {
            label: '创建时间',
            prop: 'createTime',
            type: 'time',
            placeholder: '请输入创建时间',
        },
    ],
    menu: [
        {
            label: '组件地址',
            prop: 'component',
            type: 'input',
            placeholder: '请输入组件地址',
            search: true,
        },
        {
            label: '菜单名称',
            prop: 'menuName',
            type: 'input',
            placeholder: '请输入菜单名称',
            search: true,
        },
        {
            label: '权限',
            prop: 'perms',
            type: 'input',
            placeholder: '请输入权限',
            search: true,
        },
        {
            label: '状态',
            prop: 'isVisible',
            placeholder: '请选择状态',
            search: true,
            type: 'switch',
            options: STATUS
        },
        {
            label: '排序',
            prop: 'orderNum',
            type: 'input',
            placeholder: '请输入排序',
        },
        {
            label: '图标',
            prop: 'icon',
            type: 'icon',
            placeholder: '请选择图标',
        },
        {
            label: '备注',
            prop: 'remark',
            type: 'input',
            placeholder: '请输入备注',
            search: true,
        },
        {
            label: '创建时间',
            prop: 'createTime',
            type: 'time',
            placeholder: '请输入组件地址',
            search: true,
        },
    ],
    category: [
        {
            label: '分类编码',
            prop: 'categoryCode',
            type: 'input',
            placeholder: '请输入编码',
            search: true,
        },
        {
            label: '分类名称',
            prop: 'categoryName',
            type: 'input',
            placeholder: '请输入名称',
            search: true,
        },
        {
            label: '分类等级',
            prop: 'categoryLevel',
            type: 'input',
            placeholder: '请输入等级',
            search: true,
        },
        {
            label: '分类状态',
            prop: 'categoryStatus',
            type: 'input',
            placeholder: '请选择状态',
            search: true,
        },
        {
            label: '创建时间',
            prop: 'createTime',
            type: 'time',
            placeholder: '请输入创建时间',
            search: true,
        },
    ],
    shopping: [
        {
            label: '用户名',
            prop: 'username',
            type: 'input',
            placeholder: '请输入用户信息',
        },
        {
            label: '电话',
            prop: 'phone',
            type: 'input',
            placeholder: '请输入电话',
        },
        {
            label: '商品编码',
            prop: 'flowerNum',
            type: 'input',
            placeholder: '请输入商品',
        },
        {
            label: '商品名称',
            prop: 'flowerName',
            type: 'input',
            placeholder: '请输入商品',
        },
        {
            label: '商品价格',
            prop: 'flowerPrice',
            type: 'input',
            placeholder: '请输入价格',
        },
        {
            label: '购买数量',
            prop: 'quantity',
            type: 'input',
            placeholder: '请输入数量',
        },
        {
            label: '创建时间',
            prop: 'createTime',
            type: 'time',
            placeholder: '请输入创建时间',
        },

    ]
}

