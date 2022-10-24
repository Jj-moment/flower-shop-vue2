import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/route";
import cookies from '@/utils/cookies';
import api from "@/api"
import store from './store'
import rules from '@/utils/validate/index'
import './assets/global.css';
import model from "@/utils/plugs"
import Fragment from 'vue-fragment'
import config from "@/utils/config/index";
import './permission'
import echarts from 'echarts'
import * as filter from '@/utils/filter'

Vue.config.productionTip = false

Vue.use(Fragment.Plugin)
/*element-ui引入*/
Vue.use(ElementUI, {size: 'small'});
Vue.use(model)

/*定义全局过滤器*/
Object.keys(filter.default).forEach(item => {
  Vue.filter(item, filter.default[item])
})

/*表单验证*/
Vue.prototype.$rules = rules
/*全局引入cookie*/
Vue.prototype.$cookies = cookies;
/*接口数据*/
Vue.prototype.$api = api;
Vue.prototype.$config = config
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
