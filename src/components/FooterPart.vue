<script>
import { IMaskComponent } from 'vue-imask'

export default {
  data() {
    return {
      numberModel: ''
    }
  },
  methods: {},
  components: {
    'imask-input': IMaskComponent
  }
}
</script>

<template>
  <footer class="bg-[#17222B] py-24 sm:p-0" id="contact">
    <div class="custom-container mx-auto">
      <div
        class="w-full py-16 px-10 sm:p-10 lg:bg-transparent bg-[#263039] xl:bg-transparent flex justify-between items-center rounded-3xl relative lg:flex-col"
      >
        <div class="lg:w-full w-2/4 flex flex-wrap flex-col lg:text-center">
          <h1 class="text-5xl lg:text-3xl sm:text-[25px] text-white font-semibold">
            Soha tanlashdagi birinchi yordamni beramiz
          </h1>
          <p class="text-gray-400 my-5 sm:text-sm">
            Ma'lumotlaringizni qoldiring va sizga tez fursatda <br />
            aloqaga chiqamiz
          </p>
        </div>
        <div class="w-2/4 flex justify-center absolute lg:relative right-0 sm:scale-75">
          <!-- scale-110 md:scale-[0.80] xl:scale-[0.90] -->
          <div class="bg-gray-800 p-10 rounded-2xl md:bg-transparent w-auto">
            <form>
              <div class="flex flex-col items-start gap-5">
                <div>
                  <label for="name" class="text-white text-lg mb-2 block">Ismingiz</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ismingizni yozing"
                    class="w-96 border bg-gray-800 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-primary h-14 p-4 placeholder-gray-300 rounded-lg text-gray-200 lead-form-name-input"
                  />
                </div>
                <div>
                  <label for="number" class="text-white text-lg mb-2 block"
                    >Telefon raqamingiz</label
                  >
                  <imask-input
                    v-model="numberModel"
                    mask="+{998} (00) 000 00 00"
                    :unmask="true"
                    class="w-96 border bg-gray-800 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-primary h-14 p-4 placeholder-gray-300 rounded-lg text-gray-200 lead-form-name-input"
                    placeholder="+998 (--) --- -- --"
                  />
                </div>
                <div>
                  <label for="name" class="text-white text-lg mb-2 block">Telegram username</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Username"
                    class="w-96 border bg-gray-800 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-primary h-14 p-4 placeholder-gray-300 rounded-lg text-gray-200 lead-form-name-input"
                  />
                </div>
                <input
                  type="submit"
                  value="Jo'natish"
                  class="relative h-14 bg-blue-500 w-full rounded-lg text-white text-lg tracking-wider"
                />
                <p class="text-xs text-white">
                  Tugmani bosib, <a href="#" class="text-blue-500 underline">maxfiylik siyosati</a> va
                  <a href="#" class="text-blue-500 underline">foydalanuvchi <br> shartnomasining</a> shartlarini qabul qilgan bo'lasiz
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr class="border border-gray-400 mt-40 mb-20 sm:mt-0 sm:mb-5">
      <div class="footer-links flex justify-between flex-wrap sm:flex-col sm:pb-8 gap-y-10 gap-x-5 text-gray-400">
        <div class="w-[255px]">
          <img src="../assets/img/logo.png" alt="image" class="mb-4 w-[150px]">
          <h1 class="text-3xl mb-2 text-white custom:text-2xl">+998 12 123 45 67</h1>
          <p>Toshkent shahar, Mirzo <br> Ulug'bek tumani, Muminov <br> ko'chasi, 4A</p>
        </div>
        <div class="w-[85px]">
          <h3 class="text-xl mb-2 bold text-white">Platforma</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="#">Kasblar</a></li>
            <li><a href="#">Kurslar</a></li>
          </ul>
        </div>
        <div class="w-[125px]">
          <h3 class="text-xl mb-2 bold text-white">Kompaniya</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Ommaviy oferta</a></li>
            <li><a href="#">Maxfiylik siyosati</a></li>
          </ul>
        </div>
        <div class="w-[160px]">
          <h3 class="text-xl mb-2 bold text-white">Ma'lumot</h3>
          <ul class="flex flex-col gap-2">
            <li><a href="#">Bog'lanish</a></li>
            <li><a href="#">Bo'lib to'lash</a></li>
            <li><a href="#">Qanday xarid qilinadi?</a></li>
            <li><a href="#">Voucher qollanma</a></li>
            <li><a href="#">Chegirmalar</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Fikrlar</a></li>
          </ul>
        </div>
       
        <div class="documents flex flex-wrap gap-y-5 w-[200px]">
          <div  class="w-[100px]">
            <div class="img w-[60px] h-[69px] bg-gray-400"></div>
            <p class="text-sm">Tasdiqnoma</p>
          </div>
          <div class="w-[100px]">
            <div class="img w-[60px] h-[72px] bg-gray-400"></div>
            <p class="text-sm">Guvohnoma</p>
          </div>
          <div class="w-[100px]">
            <div class="img w-[99px] h-[69px] bg-gray-400"></div>
            <p class="text-sm whitespace-nowrap">IT park rezidenti</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

