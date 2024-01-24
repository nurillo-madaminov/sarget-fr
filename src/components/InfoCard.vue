<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLocationDot, faPhone, faFax, faEnvelope) // Use faMapMarker instead of faMapLocationDot

export default {
  components: { FontAwesomeIcon },
  props: ['icon', 'title', 'text']
}
</script>

<template>
  <div
    class="flex shrink-0 flex-col justify-center items-center w-[305px] h-[300px] p-3 rounded-xl bg-white shadow-[0_0_40px_lightgray] sm:w-[250px] sm:h-[250px]"
  >
    <font-awesome-icon :icon="['fas', icon]" class="text-[#26499f] text-5xl mb-5" />
    <h1 class="mb-4 text-lg font-semibold uppercase">{{ title }}</h1>
    <p class="text-center">
      {{ text }} <a href="https://maps.app.goo.gl/2LBKJGniYGXu7v7q7" target="_blank" class="text-blue-500 underline"><slot></slot></a>
    </p>
  </div>
</template>

