<script>
import HeaderCarousel from '@/components/HeaderCarousel.vue'
import SingleCourse from '@/components/SingleCourse.vue'
import TeamSlider from '@/components/TeamSlider.vue'
import InfoCard from '@/components/InfoCard.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { dumbData } from '@/store'

export default {
  data() {
    return {
      data: dumbData,
      modules: [Autoplay, Pagination, Navigation],
      slidesPerView: 4,
      spaceBetween: 45,
      faqData: [
        {
          id: 1,
          title: 'Hello world1',
          text: 'Lorem ipsum dolor sit.'
        },
        {
          id: 2,
          title: 'Hello world2',
          text: 'Lorem ipsum dolor sit.'
        },
        {
          id: 3,
          title: 'Hello world3',
          text: 'Lorem ipsum dolor sit.'
        },
        {
          id: 4,
          title: 'Hello world4',
          text: 'Lorem ipsum dolor sit.'
        }
      ]
    }
  },
  components: {
    HeaderCarousel,
    SingleCourse,
    TeamSlider,
    InfoCard,
    Swiper,
    SwiperSlide,
    FontAwesomeIcon
  },
  mounted() {
    this.data.forEach((element) => {
      console.log(element.title)
    })
  }
}
</script>

<template>
  <main>
    <HeaderCarousel />

    <section id="about">
      <div class="relative custom-container">
        <div class="absolute flex self-start justify-between w-full sm:hidden">
          <img
            src="../assets/img/Annotation_2023-12-09_173402-removebg-preview.png"
            alt="image"
            class="relative top-16"
          />
          <img
            src="../assets/img/Annotation_2023-12-09_173531-removebg-preview.png"
            alt="image"
            class="relative -top-20 lg:top-[200px] transition-all duration-200"
          />
        </div>
        <div
          class="flex items-center justify-center transition-all duration-200 py-36 lg:flex-col md:px-6"
        >
          <div
            class="w-2/4 md:w-full flex justify-end md:justify-center relative top-[100px] lg:top-14 transition-all duration-200 md:top-2 px-3"
          >
            <img
              src="https://via.placeholder.com/500x500"
              alt="image"
              class="rounded-lg bg-white shadow-[-5px_5px_40px_lightgray]"
            />
          </div>
          <div
            class="relative w-1/3 px-5 py-10 transition-all duration-200 bg-white border-2 lg:w-2/3 md:w-full rounded-xl border-lightgray"
          >
            <h1 class="mb-5 text-3xl font-semibold font-[Getvoip] sm:text-xl">Biz haqimizda</h1>
            <p class="text-[17px] text-justify mb-8 sm:text-sm">
              2022-yilning 1-aprelida "Online IT School"ga asos solindi. Dasturlash va grafik
              dizaynerlik yo'nalishlarida ta'lim berish boshlandi, so'ngra, tashkilotlardan biri
              Yevropa ittifoqi tomonidan moliyalashtirilgan "Hamroh" nomli loyiha bilan 3 oylik
              shartnoma tuzildi va Andijon shahridagi kam taminlangan oilalar farzandlariga "Web
              designing" yo'nalishi bo'yicha 3 oy davomida bepul ta'lim berildi va sertifikatlar
              bilan taqdirlandi. Sertifikatga ega bo'lgan o'quvchilarga davlat tomonida bepul
              noutbuklar berildi. Oktyabr oyiga kelib...
            </p>
            <a
              href=""
              class="px-8 py-3 text-xl text- tracking-wide text-white sm:px-6 sm:py-1 sm:text-lg bg-blue-800 rounded-3xl"
              >Batafsil</a
            >
          </div>
        </div>
        <div class="absolute custom:px-10 left-0 -bottom-16 -z-10 md:hidden">
          <img src="https://via.placeholder.com/400x300" alt="image" class="rounded-xl" />
        </div>
      </div>
    </section>
    <section id="courses" class="bg-[#272C31]">
      <div class="w-full .custom-container">
        <div>
          <h1
            class="text-4xl font-semibold text-white text-center mb-10 font-[Getvoip] sm:text-2xl"
          >
            Kurslarimiz
          </h1>
          <div class="flex items-center justify-between px-4">
            <div class="previous">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </div>
            <swiper
              :slidesPerView="this.slidesPerView"
              :spaceBetween="this.spaceBetween"
              :loop="true"
              :autoplay="true"
              :modules="modules"
              :navigation="{
                clickable: true,
                nextEl: '.next',
                prevEl: '.previous'
              }"
              class="mySwiper"
              :breakpoints="{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                960: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40
                }
              }"
            >
              <swiper-slide v-for="x in this.data" :key="x.id"
                ><SingleCourse :img="x.img" :title="x.title" :text="x.text" :teacher="x.teacher" :id="x.id"
              /></swiper-slide>
            </swiper>
            <div class="next">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="team" class="flex-col gap-10">
      <div class="header">
        <h1 class="text-4xl font-semibold font-[arial]">Bizning jamoa</h1>
      </div>
      <div class="overflow-auto custom-container">
        <team-slider />
      </div>
    </section>
    <section class="pt-0">
      <div class="custom-container">
        <h1 class="text-4xl font-semibold text-center mb-5">FAQ</h1>
        <div class="flex flex-col gap-3 px-5">
          <details
            v-for="x in this.faqData"
            :key="x.id"
            class="bg-[#263039] text-white px-7 py-4 rounded-lg"
          >
            <summary
              class="list-none text-lg font-medium tracking-wide flex justify-between items-center"
            >
              {{ x.title }} <font-awesome-icon :icon="['fas', 'chevron-down']" ref="chevron" />
            </summary>
            <p class="text-gray-300">{{ x.text }}</p>
          </details>
        </div>
      </div>
    </section>
    <section
      class="bg-white bg-gradient-to-t from-[#17222B] from-60% via-gray-50 via-10% to-transparent py-0"
    >
      <div class="custom-container">
        <div class="flex flex-wrap justify-center gap-5 mb-10">
          <InfoCard
            icon="location-dot"
            title="Bizning asosiy ofis"
            text="Andijon shahar, Istiqlol ko'chasi 27-uy (Sobiq Leninskiy)"
            >Joylashuvni Ko'rish</InfoCard
          >
          <InfoCard
            icon="phone"
            title="Telefon raqamimiz"
            text="+998 88 833 3434 || +998 33 688 10 00"
          />
          <InfoCard icon="instagram" title="instagram" text="lorem ipsum dolor sit" />
          <InfoCard icon="envelope" title="email" text="developernurillo@gmail.com" />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.next,
.previous {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  margin-top: 100px;
  z-index: 999;
  background-color: rgba(50, 59, 59, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.next svg,
.previous svg {
  width: 15px;
}
.previous {
  left: 20px;
}
</style>
<!-- 
             "Online IT School" nomi "NTA (nano
              texnologiy`alar akademiyasi)" nomiga o'zgartirildi. "NTA"ning 11 oylik faoliyati
              davomida "Yoshlar agentligi" bilan shartnoma tuzildi va "Kelajak kasblari" loyihasi
              doirasida 6 oy kam taminlangan, boquvchisi yo'q va temir daftarga kiritilgan oila
              farzandlari o'qitildi va sertifikatlar bilan taqdirlandi. 2023-yilning 1-sentyabrida
              katta re-brending tadbiri o'tkazildi va "NTA" "Sarget IT academy" nomiga
              o'zgartirildi. Darsliklar qayta tuzilib mukammallashtirildi va zamonaviy kasbga
                yo'naltirilgan sohalar kiritildi.
-->
