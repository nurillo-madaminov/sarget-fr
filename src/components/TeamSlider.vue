<<<<<<< HEAD
=======
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
        <AboutCard
          img="sardorbek"
          name="Sardorbek Uzakov"
          work="Asoschi"
          about="Marketolog || SMM Manager || Targetolog || Graphic Designer."
        />
        <AboutCard
          img="muhammadjon"
          name="Adhamjonov Muhammadjon"
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

>>>>>>> 6d45c34ea9c2030891bc5b0abb1e8d8831f6d51c
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
        <AboutCard
          img="/src/assets/img/sardorbek.jpg"
          name="Sardorbek Uzakov"
          work="Asoschi"
          about="Marketolog || SMM Manager || Targetolog || Graphic Designer."
        />
        <AboutCard
          img="/src/assets/img/muhammadjon.jpg"
          name="Adhamjonov Muhammadjon"
          work="O'qituvchi"
          about="Microsoft Office || Graphic Designer."
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4">
        <AboutCard
          img="/src/assets/img/muhabbat.jpg"
          name="Muhabbat Ermatova "
          work="Manager"
          about="Mobilograf || Copywriter || Content Maker || Graphic Designer."
        />
        <AboutCard
          img="/src/assets/img/hayotbek.jpg"
          name="Hayotbek Ruziyev"
          work="Mobilograf"
          about="Reels Maker || Storis maker || Graphic Designer || Web Designer."
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div class="flex flex-col gap-4 py-4">
        <AboutCard
          img="/src/assets/img/rahmatillo.jpg"
          name="Rahmatullo Qosimov"
          work="O'qituvchi"
          about="Backend: Python || Django."
        />
        <AboutCard
          img="/src/assets/img/nurillo.jpg"
          name="Nurillo Madaminov"
          work="Dasturchi"
          about="Frontend: HTML || CSS || Bootstrap || Tailwind CSS || SASS || JavaScript || VueJS."
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>
