<template>      
          <div class="col-span-9 overflow-y-scroll h-screen">
               <div class="mt-10 px-12">
                  <h1 class="text-3xl font-medium">1.2. Kích hoạt fanpage</h1>
                  <p class="mt-3 text-gray-700  border-b pb-10">Sau khi nâng cấp gói cước thành công, bạn cần kích họat fanpage.Số fanpage facebook cần kích hoạt sẽ phụ thuộc vào gói cước GoPage mà bạn đang sử dụng! </p>
                  <div>
                    <p class="mt-3 text-gray-700">Tham khảo hướng dẫn để kích hoạt ngay!</p>
                    <p class="mt-3 text-gray-700">Bước 1: Truy cập mục Tài khoản trên GoPage. Tại đây, sau khi nâng cấp gói cước, Gói cước của bạn sẽ hiện thị là SUB (dùng thử sẽ hiện TRIAL).</p>
                    <p class="mt-3 text-gray-700">Đi kèm đó là thông tin về số lượng page được phép kích hoạt. số page đã kích hoạt và thời gian bắt đầu và kết thúc.</p>
                    <p class="mt-3 text-gray-700">Trường hợp Số lượng page > Số page đã kích hoạt thì bạn có thể chọn Cài đặt fanpage để kích hoạt các fanpage.</p>
                          <img src="/assets/avt/tongquan1.png" alt="" class="mt-5">
                    <p class="mt-3 text-gray-700">Trường hợp Số lượng page > Số page đã kích hoạt thì bạn có thể chọn Cài đặt fanpage để kích hoạt các fanpage.</p>
                          <img src="/assets/avt/tongquan2.png" alt="" class="mt-5">
                     <p class="mt-3 text-gray-700">Kết thúc việc kích hoạt bằng cách chọn <span class="text-gray-900 fold-bold">Lưu</span> .</p>
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
  name: 'kichhoatpape',
   data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 
}
</script>

<style scoped>

</style>
