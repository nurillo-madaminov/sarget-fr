<template>
  <Swiper
    :modules="modules"
    :slides-per-view="2"
    :slides-offset-before="20"
    :slides-offset-after="20"
    :space-between="40"
    :loop="true"
    :autoplay="true"
    class="bg-white"
  >
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4">
        <AboutCard />
        <AboutCard />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4">
        <AboutCard />
        <AboutCard />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4">
        <AboutCard />
        <AboutCard />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import AboutCard from '@/components/AboutCard.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  data() {
    return {
      modules: [Autoplay]
    }
  },
  components: { AboutCard, Swiper, SwiperSlide }
}
</script>