<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars)

export default {
  name: 'NavigationBar',
  components: { FontAwesomeIcon },
  methods: {
    openNav() {
      this.$refs.navbar.classList.toggle('md:h-0')
    }
  }
}
</script>
<template>
  <header
    class="header py-4 px-0 w-full fixed top-0 left-0 z-[999] backdrop-blur-2xl bg-black bg-opacity-30 shadow-[0_0_50px_#333]"
  >
    <div
      class="max-w-7xl mx-auto flex items-center justify-between md:flex-col px-8 sm:px-4 transition-all"
      id="container"
    >
      <div class="md:flex md:justify-between md:w-full">
        <div class="logo flex items-center">
          <a href="index.html">
            <h1 class="text-3xl text-white uppercase font-[Getvoip]">sarget</h1>
          </a>
        </div>
        <button class="hidden md:inline-block p-4" @click="openNav">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-2xl text-white" />
        </button>
      </div>
      <nav class="navbar md:w-full md:top-full md:left-0 md:h-0 md:overflow-hidden" ref="navbar">
        <ul class="my-4 md:flex-col flex gap-8">
          <li><a href="#home">Asosiy</a></li>
          <li><a href="#courses">Kurslarimiz</a></li>
          <li><a href="#about">Biz haqimizda</a></li>
          <li><a href="#contact">Aloqa</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.navbar a {
  @apply text-white text-xl text-opacity-80 hover:text-opacity-100 hover:underline;
}
</style>
