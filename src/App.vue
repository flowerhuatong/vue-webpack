<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <br/>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"/>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="deilvery"/>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"/>
        </div>
      </div>
    </div>
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
