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
    <!-- 1900/1069 -->
      <swiper-slide><img src="#" alt="image" /></swiper-slide>
      <swiper-slide><img src="#" alt="image" /></swiper-slide>
      <swiper-slide><img src="#" alt="image" /></swiper-slide>
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
