import Vue from 'vue';
import Router from 'vue-router';
// import articleList from '@/components/articleList';
// import text from '@/components/text';
// import huadongyanzhengma from '@/components/huadongyanzhengma';
import Home from '@/components/Home';
import Menu from '@/components/Menu';
import Admin from '@/components/Admin';
import Login from '@/components/Login';
import Register from '@/components/Register';
import About from '@/components/about/About';
//二级路由
import Contact from '@/components/about/Contact';
import Deilvery from '@/components/about/Deilvery';
import History from '@/components/about/History';
import OrderingGuide from '@/components/about/OrderingGuide';
//三级路由
import Phone from '@/components/about/contact/Phone';
import Personname from '@/components/about/contact/personname';

Vue.use(Router);

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect:'/about/contact',
      children:[
        {
          path: '/about/contact',
          name: 'Contact',
          component: Contact,
          redirect:'/about/contact/personname',
          children:[
            {
              path: '/about/contact/phone',
              name: 'Phone',
              component: Phone
            },
            {
              path: '/about/contact/personname',
              name: 'Personname',
              component: Personname
            }
          ]
        },
        {
          path: '/about/deilvery',
          name: 'Deilvery',
          component: Deilvery,
        },
        {
          path: '/about/history',
          name: 'History',
          component: History,
        },
        {
          path: '/about/orderingGuide',
          name: 'OrderingGuide',
          component: OrderingGuide,
        }
      ]
    },
    {
      path: '*',  //除了以上已经定义好的路由（路由输入错误的时候）
      redirect:'/'//让它跳转的路由
    }
  ],
  mode:"history"
})
//全局守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'||to.path=='/register'){
    next();
  }else{
    alert('还没有登录，请先登录!');
    next('/login');
  }
})
export default router
