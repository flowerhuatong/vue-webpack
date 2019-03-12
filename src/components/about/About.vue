<template>
  <div>
    <h1>关于我们</h1>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link tag="li" :to="{name:'History'}" class="nav-link">
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="li" :to="{name:'Contact'}" class="nav-link">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" :to="{name:'OrderingGuide'}" class="nav-link">
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="li" :to="{name:'Deilvery'}" class="nav-link">
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <!-- 导航对应的内容 -->
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  };
</script>
<style>

</style>
