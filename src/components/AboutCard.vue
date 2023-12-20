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
  <div class="card">
    <div class="flex gap-4 row">
      <div class="w-[200px] h-[200px] overflow-hidden shrink-0 rounded-2xl">
        <img :src="getImageUrl(img)" alt="" class="w-full rounded-3xl border border-gray-400" />
      </div>
      <div class="flex flex-col gap-3 col">
        <h1 class="text-2xl tracking-widest uppercase">{{ name }}</h1>
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
