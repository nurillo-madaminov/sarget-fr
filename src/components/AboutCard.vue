<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add( faTelegram, faInstagram );

export default {
  components: { FontAwesomeIcon },
  props: ['img', 'name', 'work', 'about'],
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/img/${name}.jpg`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div class="max-w-[565px]">
    <div class="flex gap-4 sm:flex-col">
      <div
        class="w-[200px] sm:w-[150px] h-[200px] sm:h-[150px] overflow-hidden shrink-0 rounded-2xl"
      >
        <img :src="getImageUrl(img)" alt="image" class="w-full border border-gray-400 rounded-3xl" />
      </div>
      <div class="flex flex-col gap-3 col">
        <h1 class="text-2xl tracking-wid text-gray-700 uppercase font-[Getvoip] max-w-sm">{{ name }}</h1>
        <h3 class="text-xl font-bold text-blue-800">{{ work }}</h3>
        <p class="text-lg text-neutral-600 max-w-[350px]">{{ about }}</p>
        <p class="text-neutral-600 text-lg -mt-3"><slot></slot></p>
        <div class="flex gap-2">
          <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" class="text-xl" /></a>
          <a href="#"><font-awesome-icon :icon="['fab', 'telegram']" class="text-xl" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
