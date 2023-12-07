<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <Swiper class="h-full w-full" :space-between="0" :navigation="true" :loop="true">
      <SwiperSlide>
        <img src="https://via.placeholder.com/1900x1069" alt="" />
      </SwiperSlide>
      <SwiperSlide><img src="https://via.placeholder.com/1900x1069" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://via.placeholder.com/1900x1069" alt="" /></SwiperSlide>
    </Swiper>
  </div>
</template>
