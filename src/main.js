// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
import Ajax from './libs/ajax';
Vue.use(ElementUI);
Vue.config.productionTip = false;

let qs = require('querystring');
Vue.use(Ajax, {
  baseURL: 'http://192.168.1.22:8111/api',
  // baseURL: 'http://hhb.8jiong.com/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    function(data) {
      data = qs.stringify(data);
      return data;
    },
  ],
  params: {},
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
