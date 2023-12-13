<script>
import HeaderCarousel from '@/components/HeaderCarousel.vue'
import SingleCourse from '@/components/SingleCourse.vue'
import FooterPart from '@/components/FooterPart.vue'
import TeamSlider from '@/components/TeamSlider.vue'
export default {
  components: { HeaderCarousel, SingleCourse, FooterPart, TeamSlider }
}
</script>

<template>
  <main>
    <HeaderCarousel />
    <section id="courses" class="bg-[#272C31]">
      <div class="max-w-7xl w-full">
        <div class="flex flex-wrap justify-center gap-3">
          <div v-for="x in 6" :key="x">
            <SingleCourse />
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="custom-container relative">
        <div class="w-full flex justify-between absolute self-start">
          <img src="../assets/img/Annotation_2023-12-09_173402-removebg-preview.png" alt="" class="relative top-16"/>
          <img src="../assets/img/Annotation_2023-12-09_173531-removebg-preview.png" alt="" class="relative -top-20"/>
        </div>
        <div class="flex justify-center items-center py-36">
          <div class="w-2/4 flex justify-end self-end relative top-[100px] px-10">
            <img src="https://via.placeholder.com/450x450" alt="" class="rounded-lg bg-white shadow-[0_0_50px_white]" />
          </div>
          <div
            class="w-2/5 px-5 py-10 relative bottom-[100px] bg-white shadow-[0_0_50px_lightgray] rounded-xl border-2 border-lightgray"
          >
            <h1 class="text-4xl font-semibold mb-5">Biz haqimizda</h1>
            <p class="text-[17px] text-justify mb-8">
              2022-yilning 1-aprelida "Online IT School"ga asos solindi. Dasturlash va grafik
              dizaynerlik yo'nalishlarida ta'lim berish boshlandi, so'ngra, tashkilotlardan biri
              Yevropa ittifoqi tomonidan moliyalashtirilgan "Hamroh" nomli loyiha bilan 3 oylik
              shartnoma tuzildi va Andijon shahridagi kam taminlangan oilalar farzandlariga "Web
              designing" yo'nalishi bo'yicha 3 oy davomida...
            </p>
            <a href="#" class="px-8 py-3 rounded-3xl text-lg bg-blue-800 text-white">Batafsil</a>
          </div>
        </div>
        <div class="absolute left-0 -bottom-24 -z-10 ">
          <img src="https://via.placeholder.com/400x300" alt="" class="rounded-xl">
        </div>
      </div>
    </section>
    <section id="team" class="flex-col gap-10">
      <div class="header">
        <h1 class="text-4xl font-semibold">Our perfect team</h1>
      </div>
      <div class="overflow-auto custom-container">
        <team-slider />
      </div>
    </section>
    <FooterPart />
  </main>
</template>

<!-- bepul ta'lim berildi va sertifikatlar
              bilan taqdirlandi. Sertifikatga ega bo'lgan o'quvchilarga davlat tomonida bepul
              noutbuklar berildi. Oktyabr oyiga kelib "Online IT School" nomi "NTA (nano
              texnologiyalar akademiyasi)" nomiga o'zgartirildi. "NTA"ning 11 oylik faoliyati
              davomida "Yoshlar agentligi" bilan shartnoma tuzildi va "Kelajak kasblari" loyihasi
              doirasida 6 oy kam taminlangan, boquvchisi yo'q va temir daftarga kiritilgan oila
              farzandlari o'qitildi va sertifikatlar bilan taqdirlandi. 2023-yilning 1-sentyabrida
              katta re-brending tadbiri o'tkazildi va "NTA" "Sarget IT academy" nomiga
              o'zgartirildi. Darsliklar qayta tuzilib mukammallashtirildi va zamonaviy kasbga
              yo'naltirilgan sohalar kiritildi.-->
