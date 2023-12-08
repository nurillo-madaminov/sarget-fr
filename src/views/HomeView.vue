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
      <div class="max-w-7xl">
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="x in 6"
            :key="x"
            class="course-card overflow-hidden rounded-lg hover:opacity-75 transition-opacity duration-300"
          >
          <div class="bg-red-500 ">hello world</div>
            <SingleCourse/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.course-card:hover span {
  @apply scale-110;
}
</style>
