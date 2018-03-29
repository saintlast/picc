import Vue from 'vue';
import Router from 'vue-router';
const Home = r => require(['@/components/common/home'], r);
const Login = r => require(['@/components/pages/Login'], r);
const DashBoard = r => require(['@/components/pages/dashBoard'], r);
const Reserve = r => require(['@/components/pages/reserve'], r);
const Order = r => require(['@/components/pages/order'], r);
const Comment = r => require(['@/components/pages/comment'], r);
const Complaint = r => require(['@/components/pages/complaint'], r);
const Member = r => require(['@/components/pages/member'], r);
const Store = r => require(['@/components/pages/store'], r);
const Employee = r => require(['@/components/pages/employee'], r);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Login',
      component: Login,
    },
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
          path: '/Reserve',
          component: Reserve,
        },
        {
          path: '/Order',
          component: Order,
        },
        {
          path: '/Comment',
          component: Comment,
        },
        {
          path: '/Complaint',
          component: Complaint,
        },
        {
          path: '/Member',
          component: Member,
        },
        {
          path: '/Store',
          component: Store,
        },
        {
          path: '/Employee',
          component: Employee,
        },
      ],
    },
  ],
});
