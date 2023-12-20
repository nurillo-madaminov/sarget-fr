<script>
export default {
  props: ["img"]
}
</script>

<template>
  <div class="card flex justify-center items-center rounded-lg overflow-hidden relative">
    <div>
      <img :src="img" alt="" class="rounded-lg duration-700" />
    </div>
    <div
      class="inner-element w-full h-full opacity-0 absolute duration-500 flex items-center justify-center"
    >
      hello world
    </div>
  </div>
</template>

<style scoped>
.card:hover .inner-element {
  @apply opacity-70 bg-blue-400;
}
.card:hover img {
  @apply scale-110;
}
</style>
