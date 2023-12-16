<script>
import InfoCard from './InfoCard.vue'

export default {
  components: { InfoCard }
}
</script>

<template>
  <footer class="bg-[#17222B] py-24" id="contact">
    <div class="max-w-7xl mx-auto">
      <div>
        <InfoCard/>
      </div>
      <div class="w-full p-20 bg-[#263039] flex justify-between rounded-3xl relative">
        <div class="flex flex-wrap flex-col w-2/4">
          <h1 class="text-5xl text-white font-semibold">
            Soha tanlashdagi birinchi yordamni beramiz
          </h1>
          <p class="text- text-gray-400 mt-5">
            Ma'lumotlaringizni qoldiring va sizga tez fursatda <br />
            aloqaga chiqamiz
          </p>
        </div>
        <div class="w-2/4 flex justify-center absolute -top-7 right-0 scale-110">
          <div class="bg-gray-800 p-10 rounded-2xl">
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
                  <input
                    type="tel"
                    id="number"
                    placeholder="+998 ( __ ) ___ __ __"
                    class="w-96 border bg-gray-800 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-primary h-14 p-4 placeholder-gray-300 rounded-lg text-gray-200 lead-form-name-input"
                  />
                </div>
                <input
                  type="submit"
                  value="Jo'natish"
                  class="relative h-14 bg-blue-500 w-full rounded-lg text-white text-lg tracking-wider mt-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
