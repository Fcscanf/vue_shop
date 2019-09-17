// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import axios from 'axios'
import Qs from 'qs'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import moment from 'moment'

import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(moment)
Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(ElementUI);

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.http.options.root = 'http://www.fcant.com:8080'

// 配置全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
// 全局设置post请求的数据格式
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
