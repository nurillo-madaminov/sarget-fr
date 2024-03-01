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
      modules: [Autoplay],
      slidesPerView: 2
    }
  },
  components: { AboutCard, Swiper, SwiperSlide },
  mounted() {
    window.onresize = () => {
      innerWidth < 1279 ? (this.slidesPerView = 1) : (this.slidesPerView = 2)
    }
  }
}
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="this.slidesPerView"
    :slides-offset-before="20"
    :slides-offset-after="20"
    :space-between="40"
    :loop="true"
    :autoplay="false"
    class="mySwiper"
  >
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4 lg:flex-col lg:items-center">
        <AboutCard
          img="sardorbek"
          name="Sardorbek Uzakov"
          work="Rahbar"
          about="Marketolog, SMM Manager, Targetolog, Graphic Designer."
          instagram="sardorbek_uzakov_"
          telegram="uzakov_3434"
        />
        <AboutCard
          img="muhammadjon"
          name="Muhammadjon Adhamjonov"
          work="O'qituvchi"
          about="Microsoft Office: Word, Exel, Power Point. Graphic Design: Photoshop, Illustrator."
          instagram=""
          telegram=""
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4 lg:flex-col lg:items-center">
        <AboutCard
          img="rahmatillo"
          name="Rahmatullo Qosimov"
          work="O'qituvchi"
          about="Backend: Python , Django."
          instagram=""
          telegram=""
          >Bir nechta start up loyihalar ishtirokchisi</AboutCard>
          <AboutCard
          img="hayotbek"
          name="Hayotbek Ruziyev"
          work="Mobilograf"
          about="Reels Maker,  Storis maker, Graphic Designer, Web Designer."
          instagram=""
          telegram=""
          />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4 lg:flex-col lg:items-center">
        <AboutCard
          img="nurillo"
          name="Nurillo Madaminov"
          work="Dasturchi"
          about="Frontend: HTML , CSS , Bootstrap , Tailwind CSS , SASS , JavaScript , VueJS."
          instagram="imjustned_"
          telegram="imjustned"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
