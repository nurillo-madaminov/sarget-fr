<script>
export default {
  props: ['img', 'name', 'work', 'about'],
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}.jpg`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div>
    <div class="flex gap-4 sm:flex-col">
      <div
        class="w-[200px] sm:w-[150px] h-[200px] sm:h-[150px] overflow-hidden shrink-0 rounded-2xl"
      >
        <img :src="getImageUrl(img)" alt="image" class="w-full border border-gray-400 rounded-3xl" />
      </div>
      <div class="flex flex-col gap-3 col">
        <h1 class="text-2xl tracking-wid text-gray-700 uppercase font-[Getvoip]">{{ name }}</h1>
        <h3 class="text-xl font-bold text-blue-800">{{ work }}</h3>
        <p class="text-lg text-neutral-600">{{ about }}</p>
        <div class="flex gap-2">
          <a href="#"><i class="text-3xl fa-brands fa-facebook"></i></a>
          <a href="#"><i class="text-3xl fa-brands fa-twitter"></i></a>
          <a href="#"><i class="text-3xl fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
