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
  <div class="flex flex-col justify-center items-center custom-width h-[300px] rounded-xl bg-white shadow-[0_0_40px_lightgray]">
    <font-awesome-icon :icon="['fas', icon]" class="text-[#26499f] text-5xl mb-5" />
    <h1 class="uppercase font-semibold text-lg mb-4">{{title}}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.custom-width {
  width: calc(100% / 4 - 15px);
}
</style>
