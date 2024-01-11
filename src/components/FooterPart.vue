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
    <div class="max-w-7xl mx-auto">
      <div
        class="w-full py-20 px-16 sm:p-10 lg:bg-transparent bg-[#263039] xl:bg-transparent flex justify-between items-center rounded-3xl relative lg:flex-col">
        <div class="lg:w-full w-2/4 flex flex-wrap flex-col lg:text-center">
          <h1 class="text-5xl lg:text-3xl sm:text-[25px] text-white font-semibold">
            Soha tanlashdagi birinchi yordamni beramiz
          </h1>
          <p class="text-gray-400 mt-5 sm:text-sm">
            Ma'lumotlaringizni qoldiring va sizga tez fursatda <br />
            aloqaga chiqamiz
          </p>
        </div>
        <div class="w-2/4 flex justify-center absolute lg:relative right-0 sm:scale-75">
          <!-- scale-110 md:scale-[0.80] xl:scale-[0.90] -->
          <div class="bg-gray-800 p-10 rounded-2xl md:bg-transparent">
            <form>
              <div class="flex flex-col items-start gap-5">
                <div>
                  <label for="name" class="text-white text-lg mb-2 block">Ismingiz</label>
                  <input type="text" id="name" placeholder="Ismingizni yozing"
                    class="w-96 border bg-gray-800 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-primary h-14 p-4 placeholder-gray-300 rounded-lg text-gray-200 lead-form-name-input" />
                </div>
                <div>
                  <label for="number" class="text-white text-lg mb-2 block">Telefon raqamingiz</label>
                  <imask-input v-model="numberModel" mask="+{998} (00) 000 00 00" :unmask="true"
                    class="w-96 border bg-gray-800 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-primary h-14 p-4 placeholder-gray-300 rounded-lg text-gray-200 lead-form-name-input"
                    placeholder="+998 (--) --- -- --" />
                </div>
                <input type="submit" value="Jo'natish"
                  class="relative h-14 bg-blue-500 w-full rounded-lg text-white text-lg tracking-wider mt-5" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
