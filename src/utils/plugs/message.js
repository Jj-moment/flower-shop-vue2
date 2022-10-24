import {Message, MessageBox, Notification} from "element-ui";

export default {
    msg(content) {
        Message.info(content)
    },
    msgSuccess(content){
        Message.success(content)
    },
    msgError(content){
        Message.error(content)
    },
    msgWarning(content){
        Message.warning(content)
    },
    alert(content) {
        MessageBox.alert(content, "系统提示").then()
    },
    alertSuccess(content) {
        MessageBox.alert(content, "系统提示", {type: 'success'}).then()
    },
    alertError(content) {
        MessageBox.alert(content, "系统提示", {type: 'error'}).then()
    },
    alertWarning(content) {
        MessageBox.alert(content, "系统提示", {type: 'warning'}).then()
    },
    /*通知提示*/
    notify(content) {
        Notification.info(content)
    },
    /*错误通知*/
    notifyError(content) {
        Notification.error(content);
    },
    /*成功通知*/
    notifySuccess(content) {
        Notification.success(content)
    },
    /*警告通知*/
    notifyWarning(content) {
        Notification.warning(content)
    },
    /*确认窗体*/
    confirm(content) {
        return MessageBox.confirm(content, "系统提示", {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: "warning",
        })
    },
    /*提交内容*/
    prompt(content) {
        return MessageBox.prompt(content, "系统提示", {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: "warning",
        })
    }
}
