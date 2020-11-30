<template>
             <div class="col-span-9 overflow-y-scroll h-screen">
               <div class="mt-10 px-12">
                  <h1 class="text-3xl font-medium">THÔNG TIN LIÊN HỆ</h1>
                  <p class="mt-3 text-gray-700  border-b pb-10">GoPage - Phần mềm quản lý fanpage tốt nhất, hiệu quả nhất. Vui lòng liên hệ với chúng tôi nếu bạn quan tâm đến phần mềm, cần tư vấn chi tiết về các tính năng và hướng dẫn sử dụng.</p>
                  <div>
                    <h2 class="font-bold mt-10 text-gray-700">GoPage - Sản phẩm của Công ty Cổ phần Công nghệ GoStream</h2>
                      <div class=" ml-6 mt-10">
                          <p class="text-black font-medium">Hotline:<span class="text-gray-700"> 1900 277 255</span></p>
                          <p class="text-black font-medium">Trụ sở chính:<span class="text-gray-700"> Tầng 5, số 75A, Nguyễn Thị Minh Khai, Tp Vinh, Nghệ An </span></p>
                          <p class="text-black font-medium">Chi nhánh TP HCM:<span class="text-gray-700"> Lầu 7, Minh Long tower, 17 Bà Huyện Thanh Quan, Quận 3, TP. HCM</span></p>
                          <p class="text-black font-medium">Fanpage:<span class="text-blue-700"> https://www.facebook.com/gopage.me</span></p>
                          <p class="text-black font-medium">Hotline:<span class="text-blue-700"> https://gopage.me/</span></p>
                      </div>
                  </div>
              

                  <button
                  type="button"
                  class="border px-6 py-4 mt-10 mb-10 text-white h-20 hover:border-blue-700 w-full rounded hover:opacity-75 flex items-center justify-between"
                >
                 <div>
                  <span class="text-xs text-gray-700">Next - I/ TỔNG QUAN</span>
                  <p class="text-black">GIỚI THIỆU GOPAGE</p>
                 </div>
                 
                  <i class="material-icons text-black">east</i>
                </button>
                  <div class="pb-10 flex items-center justify-between">
                    <figure class="flex items-center">
                      <div class="w-8">
                        <div class="pb-1x1 relative rounded-full overflow-hidden bg-gray-300">
                          <img
                            alt=""
                            src="assets/avt/avt1.png"
                            class="absolute h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <figcaption class="ml-2 text-xs text-gray-500">Last updated 4 months ago</figcaption>
                    </figure>
                    <div class="flex items-center">
                      <h2 class="text-xs text-gray-600 font-medium">WAS THIS PAGE HELPFUL?</h2>
                      <i class="material-icons hover:text-blue-700 ml-2">tag_faces</i>
                      <i class="material-icons hover:text-yellow-700 ml-2">tag_faces</i>
                      <i class="material-icons hover:text-red-700 ml-2">tag_faces</i>
                    </div>
                  </div>

                </div>
          </div>
</template>

<script>

export default {
  name: 'lienhe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 
}
</script>

<style scoped>

</style>
