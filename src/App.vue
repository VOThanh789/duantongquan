<template>
  <div id="app">
      <!-- <Trangchu /> -->
       <!-- <Tranglienhe /> -->
      <router-view> </router-view>
  </div>
</template>

<script>
// import CompHeader from './components/CompHeader.vue'
// import Trangchu from './components/Trangchu.vue'
// import Tranglienhe from './components/Tranglienhe.vue'
// import Trangkichhoatpape from './components/Trangkichhoatpape.vue'
export default {
  name: 'app',
  data: function(){
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  // components: {
  //   CompHeader,
  //   Trangchu,
  //   Tranglienhe,
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
