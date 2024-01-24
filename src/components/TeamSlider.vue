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

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :slides-offset-before="20"
    :slides-offset-after="20"
    :space-between="40"
    :loop="true"
    :autoplay="false"
    :breakpoints="{
      1280: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }"
    class="mySwiper"
  >
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4 lg:flex-col lg:items-start">
        <AboutCard
          img="sardorbek"
          name="Sardorbek Uzakov"
          work="Asoschi"
          about="Marketolog || SMM Manager || Targetolog || Graphic Designer."
        />
        <AboutCard
          img="muhammadjon"
          name="Muhammadjon Adhamjonov"
          work="O'qituvchi"
          about="Microsoft Office || Graphic Designer."
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4 lg:flex-col lg:items-start">
        <AboutCard
          img="rahmatillo"
          name="Rahmatullo Qosimov"
          work="O'qituvchi"
          about="Backend: Python || Django."
        />
        <AboutCard
          img="hayotbek"
          name="Hayotbek Ruziyev"
          work="Mobilograf"
          about="Reels Maker || Storis maker || Graphic Designer || Web Designer."
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4 lg:flex-col lg:items-start">
        <AboutCard
          img="nurillo"
          name="Nurillo Madaminov"
          work="Dasturchi"
          about="Frontend: HTML || CSS || Bootstrap || Tailwind CSS || SASS || JavaScript || VueJS."
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
