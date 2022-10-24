import validate from '@/utils/validate/validate-base';
import ERROR from '@/utils/validate/error/error-message';

/*空状态检测*/
const validateEmpty = (key, value, callback) => {
    if (!validate.clearEmpty(value.toString())) {
        console.log(value)
        callback(new Error(ERROR.Empty));
        return;
    }
    callback();
}

/*验证输入框*/
const validateElInput = (key, trigger = 'click', message = '') => {
    let rs = {}
    if (typeof key === 'string') {
        rs = {
            [key]: [
                {required: true, message, trigger}
            ]
        }
    }
    if (key.constructor === Array) {
        for (let item of key) {
            rs[item] = [{required: true, message, trigger}]
        }
    }
    return rs
}

/*邮件检测*/
const validateEmail = (rule, value, callback) => {
    if (!validate.clearEmpty(value)) {
        callback(new Error(ERROR.Email.empty))
        return
    }
    if (!validate.checkEmail(value)) {
        callback(new Error(ERROR.Email.error))
        return
    }
    callback()
}

/*电话检测*/
const validateTel = (rule, value, callback) => {
    if (!validate.clearEmpty(value)) {
        callback(new Error(ERROR.Phone.empty))
        return
    }
    if (!validate.checkTel(value)) {
        callback(new Error(ERROR.Phone.error))
        return
    }
    callback()
}

/*名称检测*/
const validateName = (rule, value, callback) => {
    if (!validate.clearEmpty(value)) {
        callback(new Error(ERROR.Name.empty))
        return
    } else if (!validate.checkName(value)) {
        callback(new Error(ERROR.Name.error))
    }
    callback()
}

let values = 0;

/*密码检测*/
const validatePass = (rule, value, callback) => {
    if (!validate.clearEmpty(value)) {
        callback(new Error(ERROR.Password.empty))
        return;
    } else if (!validate.checkName(value)) {
        callback(new Error(ERROR.Password.error))
    }
    values = value;
    callback()
}

const checkPass = (rule, value, callback) => {
    console.log(value)
    if (!validate.clearEmpty(value)) {
        callback(new Error(ERROR.Password.empty))
        return;
    } else if (value !== values) {
        callback(new Error("二次输入密码不一致"));
    }
    callback();
}

export default {
    validateEmpty,
    validateElInput,
    validateEmail,
    validateTel,
    validateName,
    validatePass,
    checkPass
}
