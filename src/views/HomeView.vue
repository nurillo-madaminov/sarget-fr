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
    <section id="ourCourses" class="bg-[#272C31]">
      <div class="max-w-7xl w-full">
        <div class="flex flex-wrap justify-center gap-3">
          <div v-for="x in 6" :key="x">
            <SingleCourse />
          </div>
        </div>
      </div>
    </section>

    <team-slider />
    <FooterPart />
  </main>
</template>
