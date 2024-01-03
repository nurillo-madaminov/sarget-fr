<script>
export default {
  props: ['img'],
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/courses/${name}.jpg`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div
    class="card flex justify-center items-center rounded-lg overflow-hidden relative w-[calc(100%/3-10px)] lg:w-[400px]"
  >
    <div>
      <img :src="getImageUrl(img)" alt="image" class="rounded-lg duration-700" />
    </div>
    <div
      class="inner-element w-full h-full opacity-0 absolute duration-500 flex items-center justify-center text-white"
    >
      hello world
    </div>
  </div>
</template>

<style scoped>
.card:hover .inner-element {
  @apply opacity-70 bg-gray-800;
}
.card:hover img {
  @apply scale-110;
}
</style>
