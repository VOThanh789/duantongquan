<template>
  <div>
      <CompHeader />
        <main class="">
        <div class="grid grid-cols-12 gap-4">
            <MainLeft />
            <Kichhoatpape />
        </div>
     </main>
  </div>
</template>

<script>
import CompHeader from './CompHeader'
import Kichhoatpape from './Kichhoatpape'
import MainLeft from './MainLeft.vue'
export default {
  name: 'trangkichhoatpape',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainLeft,
    Kichhoatpape,
    CompHeader
  }
}
</script>