<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import header from './components/Header';
export default {
  components:{
    appHeader:header
    // "app-header":header
  }

}
</script>

<style>

</style>
