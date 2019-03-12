<template>
  <header >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </a>
      <router-link to="/" class="navbar-brand">水果销售系统</router-link>
      <ul class="navbar-nav mr-auto">
        <li v-for="(item, index) in homeList" :key="index">
          <router-link :to="item.router" class="nav-link">{{item.name}}</router-link>
        </li>

      </ul>
      <ul class="navbar-nav ml-auto">
        <li>
          <router-link :to="{name:'Login'}" class="nav-link">登录</router-link>
        </li>
        <li>
          <router-link to="register" class="nav-link">注册</router-link>
        </li>
      </ul>
    </nav>
  </header><!-- /header -->
</template>
<script>
  export default {
    props: {

    },
    data() {
      return {
        homeList: [{
          router: '/',
          name: '主页'
        }, {
          router: 'menu',
          name: '菜单'
        }, {
          router: {name:'Admin'},
          name: '管理'
        }, {
          router: 'about',
          name: '关于我们'
        }, ]
      }
    },
    created() {

    },

    methods: {

    }
  };
</script>
<style>

</style>
