import REGEXP_MAVEN from './reg-exp-maven'

/*去除首尾空格*/
const clearStartAndEndEmpty = (str) => {
    return str ? str.trim() : str
}
/*去除字符串中全部空格*/
const clearEmpty = (str) => {
    return str ? str.replace(/\s+/g, '') : ''
}
/*检测特殊字符*/
const checkSpecialStr = (str) => {
    return REGEXP_MAVEN.specialStr.test(str)
}
/*邮件检测*/
const checkEmail = (email) => {
    return REGEXP_MAVEN.email.test(email)
}
/*电话检测*/
const checkTel = (tel) => {
    return REGEXP_MAVEN.phone.test(tel)
}
/*昵称检测*/
const checkName = (name) => {
    return REGEXP_MAVEN.username.test(name)
}

export {
    clearStartAndEndEmpty,
    clearEmpty,
    checkSpecialStr,
    checkEmail,
    checkTel,
    checkName
}
