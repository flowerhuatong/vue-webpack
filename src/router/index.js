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

Vue.use(Router);

export default new Router({
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
      component: About
    },{
      path: '*',  //除了以上已经定义好的路由（路由输入错误的时候）
      redirect:'/'//让它跳转的路由
    }
  ],
  mode:"history"
});
