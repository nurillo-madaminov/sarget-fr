<script>
import HeaderCarousel from '@/components/HeaderCarousel.vue'
import SingleCourse from '@/components/SingleCourse.vue'
import TeamSlider from '@/components/TeamSlider.vue'
import InfoCard from '@/components/InfoCard.vue'

export default {
  components: { HeaderCarousel, SingleCourse, TeamSlider, InfoCard }
}
</script>

<template>
  <main>
    <HeaderCarousel />
    <section id="courses" class="bg-[#272C31]">
      <div class="w-full max-w-7xl">
        <h1 class="text-4xl font-semibold text-white text-center -mt-10 mb-10 font-[Getvoip]">
          Kurslarimiz
        </h1>
        <div class="flex flex-wrap justify-center gap-3 lg:flex-col lg:items-center">
          <SingleCourse img="programming" />
          <SingleCourse img="videography" />
          <SingleCourse img="marketing" />
        </div>
      </div>
    </section>
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
              src="https://picsum.photos/500/500"
              alt="image"
              class="rounded-lg bg-white shadow-[-5px_5px_40px_lightgray]"
            />
          </div>
          <div
            class="relative w-1/3 px-5 py-10 transition-all duration-200 bg-white border-2 lg:w-2/3 md:w-full rounded-xl border-lightgray"
          >
            <h1 class="mb-5 text-3xl font-semibold font-[Getvoip]">Biz haqimizda</h1>
            <p class="text-[17px] text-justify mb-8">
              2022-yilning 1-aprelida "Online IT School"ga asos solindi. Dasturlash va grafik
              dizaynerlik yo'nalishlarida ta'lim berish boshlandi, so'ngra, tashkilotlardan biri
              Yevropa ittifoqi tomonidan moliyalashtirilgan "Hamroh" nomli loyiha bilan 3 oylik
              shartnoma tuzildi va Andijon shahridagi kam taminlangan oilalar farzandlariga "Web
              designing" yo'nalishi bo'yicha 3 oy davomida bepul ta'lim berildi va sertifikatlar
              bilan taqdirlandi. Sertifikatga ega bo'lgan o'quvchilarga davlat tomonida bepul
              noutbuklar berildi. Oktyabr oyiga kelib...
            </p>
            <a href="#" class="px-8 py-3 text-xl tracking-wide text-white bg-blue-800 rounded-3xl"
              >Batafsil</a
            >
          </div>
        </div>
        <div class="absolute left-0 -bottom-32 -z-10">
          <img src="https://picsum.photos/400/300" alt="image" class="rounded-xl" />
        </div>
      </div>
    </section>
    <section id="team" class="flex-col gap-10">
      <div class="header">
        <h1 class="text-4xl font-semibold font-[arial]">Bizning <span class="">j</span>amoa</h1>
      </div>
      <div class="overflow-auto custom-container">
        <team-slider />
      </div>
    </section>
    <section
      class="bg-white bg-gradient-to-t from-[#17222B] from-60% via-gray-50 via-10% to-transparent py-0"
    >
      <div class="custom-container">
        <div class="flex flex-wrap justify-center gap-5 mb-10">
          <InfoCard
            icon="location-dot"
            title="our main office"
            text="Andijon shahar Leniniskiy Istiqlol  27"
          />
          <InfoCard
            icon="phone"
            title="phone number"
            text="+998 88 833 3434 || +998 33 688 10 00"
          />
          <InfoCard icon="fax" title="fax" text="lorem ipsum dolor sit" />
          <InfoCard icon="envelope" title="email" text="developernurillo@gmail.com" />
        </div>
      </div>
    </section>
  </main>
</template>

<!-- 
             "Online IT School" nomi "NTA (nano
              texnologiyalar akademiyasi)" nomiga o'zgartirildi. "NTA"ning 11 oylik faoliyati
              davomida "Yoshlar agentligi" bilan shartnoma tuzildi va "Kelajak kasblari" loyihasi
              doirasida 6 oy kam taminlangan, boquvchisi yo'q va temir daftarga kiritilgan oila
              farzandlari o'qitildi va sertifikatlar bilan taqdirlandi. 2023-yilning 1-sentyabrida
              katta re-brending tadbiri o'tkazildi va "NTA" "Sarget IT academy" nomiga
              o'zgartirildi. Darsliklar qayta tuzilib mukammallashtirildi va zamonaviy kasbga
              yo'naltirilgan sohalar kiritildi.
-->
