import axios from 'axios';
import router from '../router';
// import {
//   loadFromLocal
// } from 'common/js/store';
export default {
  install(Vue, option = {}) {
    const http = axios.create(option);

    //// http request 拦截器
    http.interceptors.request.use(
      function(config) {
        // 在发送请求之前做些什么
        if (localStorage.token) {
          config.headers['Access-Token'] = `${store.state.token}`;
        }
        return config;
      },
      function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // http response 拦截器
    http.interceptors.response.use(
      response => {
        if (response.data) {
          switch (response.data.code) {
            case 403:
              // 403 清除token信息并跳转到登录页面
              localStorage.removeItem('token');
              if (router.currentRoute.name != 'login') {
                router.replace({
                  path: '/login',
                  query: {
                    redirect: router.currentRoute.fullPath,
                  },
                });
              }
          }
        }
        return response;
      },
      error => {
        if (error.response) {
          switch (error.response.status) {
            case 403:
              // 403 清除token信息并跳转到登录页面
              store.commit(types.LOGOUT);
              if (router.currentRoute.name != 'login') {
                router.replace({
                  path: '/login',
                  query: {
                    redirect: router.currentRoute.fullPath,
                  },
                });
              }
          }
        }
        return Promise.reject(err.response.data);
      }
    );

    Vue.http = http;
    Vue.prototype.$http = http;
  },
};
