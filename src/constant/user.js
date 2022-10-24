/*管理员账户*/
export const User = {
    username: '小美',
    password: '123456'
}
/*性别*/
export const GENDER = [
    {
        label: '未知',
        value: 0,
        tag: 'success'
    },
    {
        label: '男',
        value: 1,
        tag: 'success'
    },
    {
        label: '女',
        value: 2,
        tag: 'warning'
    }
]
/*状态*/
export const STATUS = [
    {
        label: '启用',
        value: 0,
    },
    {
        label: '禁用',
        value: 1,
    }
]
/*角色*/
export const ROLE = [
    {
        label: '超级管理员',
        value: "super_admin",
        tag: 'danger'
    },
    {
        label: '普通管理员',
        value: "admin",
        tag: 'info',
        disable: true,
    }
]
/*上架状态*/
export const PUBLISH_STATUS = [
    {
        label: '下架',
        value: 0,
    },
    {
        label: '上架',
        value: 1,
    }
]
/*是否新品*/
export const NEW_STATUS = [
    {
        label: '否',
        value: 0,
    },
    {
        label: '是',
        value: 1,
    }
]
/*是否推荐*/
export const RECOMMEND_STATUS = [
    {
        label: '否',
        value: 0,
    },
    {
        label: '是',
        value: 1,
    }
]
/*审核状态*/
export const VERIFY_STATUS = [
    {
        label: '未审核',
        value: 0,
    },
    {
        label: '已审核',
        value: 1,
    }
]
