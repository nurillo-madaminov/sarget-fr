<script>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  data() {
    return {
      modules: [Pagination, Autoplay]
    }
  },
  components: { Swiper, SwiperSlide }
}
</script>

<template>
  <div class="hero w-full h-screen" id="home">
    <swiper
      :loop="true"
      :pagination="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :modules="modules"
      class="mySwipe"
    >
      <swiper-slide><img src="https://via.placeholder.com/1900x1069" alt="" /></swiper-slide>
      <swiper-slide><img src="https://via.placeholder.com/1900x1069" alt="" /></swiper-slide>
      <swiper-slide><img src="https://via.placeholder.com/1900x1069" alt="" /></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  @apply w-full h-full;
}

.swiper-slide {
  @apply text-center bg-white text-lg flex justify-center items-center;
}

.swiper-slide img {
  @apply block w-full h-full object-cover;
}
</style>
