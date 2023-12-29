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
  mounted() {
    if (innerWidth < 776) this.slidesPerView = 1
    else this.slidesPerView = 2
  },
  components: { AboutCard, Swiper, SwiperSlide }
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
    :autoplay="true"
  >
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4">
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
      <div class="flex flex-col gap-4 py-4">
        <AboutCard
          img="muhabbat"
          name="Muhabbat Ermatova "
          work="Manager"
          about="Mobilograf || Copywriter || Content Maker || Graphic Designer."
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
      <div class="flex flex-col gap-4 py-4">
        <AboutCard
          img="rahmatillo"
          name="Rahmatullo Qosimov"
          work="O'qituvchi"
          about="Backend: Python || Django."
        />
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
