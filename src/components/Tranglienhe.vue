<template>
  <div>
      <CompHeader />
        <main class="">
        <div class="grid grid-cols-12 gap-4">
            <MainLeft />
            <Lienhe />
        </div>
     </main>
  </div>
</template>

<script>
import CompHeader from './CompHeader'
import Lienhe from './Lienhe'
import MainLeft from './MainLeft.vue'
export default {
  name: 'tranglienhe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainLeft,
    Lienhe,
    CompHeader
  }
}
</script>