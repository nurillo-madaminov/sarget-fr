<script>
export default {}
</script>

<template>
  <footer class="bg-[#17222B] py-10">
    <div class="max-w-7xl mx-auto">
      <div class="w-full p-20 bg-[#263039] flex justify-between rounded-3xl">
        <div class="flex flex-wrap flex-col w-2/4">
          <h1 class="text-5xl text-white font-semibold">Soha tanlashdagi birinchi yordamni beramiz</h1>
          <p class="text- text-gray-400 mt-5">
            Ma'lumotlaringizni qoldiring va sizga tez fursatda <br> aloqaga chiqamiz
          </p>
        </div>
        <div class="w-2/4">
          <form>
            <div>
              <label for="name">Ismingiz</label>
              <input type="text" />
            </div>
            <div>
              <label for="number">Telefon raqamingiz</label>
              <input type="tel" />
            </div>
            <input type="submit" value="Jo'natish" />
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>
