// 规则
import val_service from '@/utils/validate/validate-service/validate-form';

const menu = {
    parentId: [{require: true, validator: val_service.validateEmpty, trigger: 'change'}],
    // perms: [{require: true, validator: val_service.validateEmpty, trigger: 'blur'}],
    orderNum: [{require: true, validator: val_service.validateEmpty, trigger: 'change'}],
    status: [{require: true, validator: val_service.validateEmpty, trigger: 'change'}],
    visible: [{require: true, validator: val_service.validateEmpty, trigger: 'change'}],
    remark: [{require: true, validator: val_service.validateEmpty, trigger: 'blur'}],
    name: [{required: true, validator: val_service.validateName, trigger: 'blur'}],
}

const user = {
    username: [{validator: val_service.validateName, trigger: 'blur'}],
    email: [{validator: val_service.validateEmail, trigger: 'blur'}],
    phone: [{validator: val_service.validateTel, trigger: 'blur'}],
}

const login = {
    username: [{validator: val_service.validateName, trigger: 'blur'}],
    password: [{validator: val_service.validatePass, trigger: 'blur'}],
    userStatus: [{validator: val_service.validateEmpty, trigger: 'blur'}],
}

/*重置密码*/
const resetPass = {
    oldPass: [{required: true, validator: val_service.validatePass, trigger: 'blur'}],
    newPass: [{required: true, validator: val_service.validatePass, trigger: 'blur'}],
    checkPass: [{required: true, validator: val_service.checkPass, trigger: 'blur'}],
}

export {
    menu,
    user,
    login,
    resetPass
}
