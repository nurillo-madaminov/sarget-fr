<script>
import HeaderCarousel from '@/components/HeaderCarousel.vue'
import SingleCourse from '@/components/SingleCourse.vue'

export default {
  data() {
    return {}
  },
  components: { HeaderCarousel, SingleCourse }
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
    <section id="aboutUs">
      <div class="max-w-7xl w-full">
        <div class="flex justify-between items-center bg-red-300">
          <img
            src="@/assets/img/Annotation_2023-12-09_173402-removebg-preview.png"
            alt=""
            class="mt-14"
          />
          <img src="@/assets/img/Annotation_2023-12-09_173531-removebg-preview.png" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>
