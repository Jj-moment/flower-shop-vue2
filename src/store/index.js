import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/modules/login';
import getters from "@/store/getter";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        login
    },
    getters,
    /*解决vuex强制刷新数据丢失问题*/
    plugins: [createPersistedState()]
})

export default store