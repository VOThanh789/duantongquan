<template>
  <div>
      <CompHeader />
        <main class="">
        <div class="grid grid-cols-12 gap-4">
            <MainLeft />
            <MainRight />
        </div>
     </main>
  </div>
</template>

<script>
import CompHeader from './CompHeader'
import MainRight from './MainRight'
import MainLeft from './MainLeft.vue'
export default {
  name: 'trangchu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainLeft,
    MainRight,
    CompHeader
  }
}
</script>