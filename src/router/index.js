import Vue from 'vue';
import Router from 'vue-router';
const Home = r => require(['@/components/common/home'], r);
const DashBoard = r => require(['@/components/pages/dashBoard'], r);
const BaseTable = r => require(['@/components/pages/baseTable'], r);
const BaseForm = r => require(['@/components/pages/baseForm'], r);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: DashBoard,
        },
        {
          path: '/DashBoard',
          component: DashBoard,
        },
        {
          path: '/BaseTable',
          component: BaseTable,
        },
        {
          path: '/BaseForm',
          component: BaseForm,
        },
      ],
    },
  ],
});
