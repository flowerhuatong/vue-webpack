<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="backround">
        <h1>欢迎大家品尝水果!</h1>
        <h2>这里有你非常喜欢的水果！</h2>
        <button @click="goToMenu" class="btn btn-success">goToMenu</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        dataList:[]
      }
    },
    created() {
      var vm = this;

      vm.$axios({
        method: 'post',
        url: '/blog/articleQurey',
        data: {}
      }).then(function(res) {
        vm.dataList = res.data.data;
        console.log(res);
      })
    },
    methods: {
      goToMenu:function(){
        // this.$router.go(-1);//跳转到上一次浏览的页面
        // this.$router.replace('/menu');//指定跳转路由
        // this.$router.replace({name:'Menu'});//指定跳转路由的名字
        this.$router.push('/menu');//通过push进行跳转(可以直接指向路由，也可以用{name:'Menu'})
      }
    }
  };
</script>
<style>
#home{
  background:url('../../src/assets/sg.jpg') no-repeat;
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%;
}
.backround{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
