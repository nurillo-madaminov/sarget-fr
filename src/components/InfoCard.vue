<template>
  <div
    class="flex mb-10 sm:mb-0 flex-col justify-center items-center w-[300px] h-[300px] p-3 rounded-xl bg-white shadow-[0_0_40px_lightgray] custom:w-[250px] custom:h-[250px]"
  >
    <font-awesome-icon :icon="['fas', icon]" class="text-[#26499f] text-5xl mb-5" v-if="icon !== 'instagram'" />
    <font-awesome-icon :icon="['fab', 'instagram']" class="text-[#26499f] text-5xl mb-5" v-if="icon == 'instagram'" />
    <h1 class="mb-4 text-lg font-semibold uppercase">{{ title }}</h1>
    <p class="text-center text-sm" v-html="formattedText"></p>
    <a href="#" class="underline text-blue-500"><slot></slot></a>
    
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faLocationDot, faPhone, faEnvelope, faInstagram);

export default {
  components: { FontAwesomeIcon },
  props: ['icon', 'title', 'text'],
  computed: {
    formattedText() {
      // Replace || with <br> in the text prop
      return this.text.replace(/\s*\|\|\s*/g, '<br>');
    },
  },
};
</script>
