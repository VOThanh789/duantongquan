<template>
    <div>
    <header class="">
        <section class="px-8 py-4 border-b border-gray-400 shadow-lg">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-2">
              <figure class="flex items-center">
                <div class="w-12">
                  <div class="pb-1x1 relative rounded-full overflow-hidden bg-gray-300">
                    <img
                      alt=""
                      src="assets/avt/avt2.png"
                      class="absolute h-full w-full object-cover"
                    />
                  </div>
                </div>
                <figcaption class="ml-2 font-medium	text-xl">GoPage docs</figcaption>
              </figure>
            </div>
            <div class="col-span-10 border-l ml-16 pl-10">
              <div class="flex items-center justify-between px-4">
                <ul class="flex justify-start">
                  <li>
                    <button
                    type="button"
                    class="h-10 w-24 rounded hover:opacity-75 "
                  >
                      <router-link
                    tag="a"
                    to="/Trangchinh" 
                    class="text-blue-700 font-bold"
                    >Trang chủ</router-link>
                    <!-- <span class="text-blue-700 font-bold">Trang chủ</span> -->
                  </button>
                </li>
                <li>
                  <button
                  type="button"
                  class="h-10 w-24 rounded hover:opacity-75"
                >
                <router-link
                    tag="a"
                    to="/Banggia" 
                    class="text-blue-700 font-bold"
                    >Bảng giá</router-link>
                  <!-- <span class="text-blue-700 font-bold">Bảng giá</span> -->
                </button>
              </li>
              <li>
                
                <button
                type="button"
                class="h-10 w-24 rounded hover:opacity-75 block"
              >
                <router-link
                tag="a"
                to="/Tranglienhe" 
                class="text-blue-700 font-bold"
                >Liên hệ</router-link>
               <!-- <a href="Tranglienhe.vue">
                <span class="text-blue-700 font-bold">Liên hệ</span>
              </a> -->
                
              </button>
            </li>
         
           </ul>
            
              <label class="block pl-12">
              
                <span
                  class="mt-2 block overflow-hidden relative border-l pl-4"
                >
                  <i class="material-icons pl-2 absolute absolute-y text-gray-500"
                    >search</i
                  >
                  <input
                    type="text"
                    class="h-10 w-full pr-3 pl-8 border"
                    placeholder="Search..."
                  />
                </span>
              </label>
            </div>
          </div>
        </div>
        </section>
      </header>
   
    </div>
</template>

<script>

export default {
  name: 'compHeader',
  data:function () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  // components: {
    
  // }
}
</script>

<style >

</style>
