import Vue from 'vue';
import Router from 'vue-router';
import Admin from '../admin';
import Income from '../client/income';
import adminIncome from '../client/adminIncome';
Vue.use(Router)
//懒加载路由
const router = new Router({
  mode:'history',//hash
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path: '/income',
      name: 'income',
      component: Income
    },
    {
      path: '/adminIncome',
      name: 'adminIncome',
      component: adminIncome
    }
  ]
})
// router.replace('/income')
export default router;
