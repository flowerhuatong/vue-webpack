import Vue from 'vue';
import Router from 'vue-router';
import articleList from '@/components/articleList';
import text from '@/components/text';
import huadongyanzhengma from '@/components/huadongyanzhengma';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/huadong',
      name: 'huadongyanzhengma',
      component: huadongyanzhengma
    }
  ],
  mode:"history"
});
