<template>
  
          <div class="col-span-3 text-sm  font-medium overflow-y-scroll h-screen bg-gray-100">
                <div class="w-full"> 
                  <button
                  type="button"
                  class="border-b px-4 h-16 w-64 ml-8  hover:opacity-75 hover:bg-gray-200 flex items-center justify-between"
                >
                <div class="flex item-center">
                  <i class="material-icons">search</i>
                  <span class="ml-2">Tiếng Việt</span>
                </div>
               
                  <i class="material-icons">chevron_right</i>
                </button>
                </div>
                <button
                type="button"
                class="border-b py-4 mt-10 border pl-2 h-12 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
              >
                 <router-link
                tag="a"
                to="/" 
                class="text-blue-700"
                >Hướng dẫn sử dụng phần mềm GoPage</router-link>
                <!-- <span class="text-blue-700">Hướng dẫn sử dụng phần mềm GoPage</span> -->
              </button>
              <p class="text-gray-600 mt-6 ml-8">I/ TỔNG QUAN</p>
              <button
              type="button"
              class="py-4 px-4 mt-2 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
            >
           
              <span class="">GIỚI THIỆU GOPAGE</span>
            </button>
            <button
            type="button"
            class="py-4 px-4 h-10 w-64 ml-4 hover:opacity-75 hover:bg-gray-200 flex items-center"
          >
         
            <span class="">1.1.  Đăng ký và thanh toán gói cước</span>
          </button>
            <button
            type="button"
            class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
          >
          <router-link
                tag="a"
                to="/Trangkichhoatpape" 
                class="hover:text-blue-700"
                >1.2. Kích hoạt fanpage</router-link>
          <!-- <a href="kich-hoat-fanpage.html">
            <span class="hover:text-blue-700">1.2. Kích hoạt fanpage</span>
          </a>
           -->
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
        >
      
          <span class="">1.3. Cài đặt Extension Get Token</span>
        </button>
        <button
        type="button"
        class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
         >
    
        <span class="">1.4. Thêm fanpage mới</span>
        </button>
          <p class="text-gray-600 mt-6 ml-8">II/ QUẢN LÝ FANPAGE</p>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">2.1. Hướng dẫn Cài đặt chung</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">2.2. Cài đặt "Nhãn hội thoại"</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">2.3. Cài đặt Tin nhắn nhanh</span>
          </button>
          <p class="text-gray-600 mt-6 ml-8">III/ CÁC TÍNH NĂNG KHÁC</p>
          <button
          type="button"
          class="py-4 px-2 h-12 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.1. Quản lý bình luận - Tự động gắn nhãn</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.2. Ẩn - Bỏ qua bình luận</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.3. Trả lời tự động</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.4. Kịch bản chốt đơn tự động</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.5. Nhắn tin hàng loạt</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.6. Spam tin nhắn hàng loạt</span>
          </button>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.7. Quay số may mắn</span>
          </button>
          <button
          type="button"
          class="py-4 px-2 h-12 w-64 ml-6 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">3.8. Thu thập số điện thoại khách hàng</span>
          </button>
          <p class="text-gray-600 mt-6 ml-8">IV/ KIẾM TIỀN CÙNG GOPAGE</p>
          <button
          type="button"
          class="py-4 px-4 h-10 w-64 ml-8 hover:opacity-75 hover:bg-gray-200 flex items-center"
           >
      
          <span class="">Tham gia kiếm tiền Affiliate</span>
          </button>
          <div class="w-full mb-10"> 
            <button
            type="button"
            class="border px-4 h-16 hover:text-blue-700 w-64 ml-8  hover:opacity-75 hover:bg-gray-200 flex items-center justify-between"
          >
          <div class="flex item-center">
            <i class="material-icons hover:text-blue-700">call_to_action</i>
            <p class="ml-2 hover:text-blue-700">Powered by <span class="font-bold  hover:text-blue-700">GitBook</span> </p>
          </div>
         
         
          </button>
          </div>




          </div>
   
</template>

<script>

export default {
  name: 'mainleft',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 
}
</script>

<style scoped>

</style>
