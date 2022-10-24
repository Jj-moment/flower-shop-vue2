import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const cookies = {
    setData(key, data) {
        Cookies.set(key, data);
    },
    getData(data) {
        return Cookies.get(data);
    },
    getToken() {
        return Cookies.get(TokenKey)
    },
    setToken(token) {
        return Cookies.set(TokenKey, token)
    },
    removeToken() {
        return Cookies.remove(TokenKey)
    }
}

export default cookies;
