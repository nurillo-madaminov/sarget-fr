<script>
export default {
  name: 'NavigationBar'
}
</script>
<template>
  <header
    class="header py-4 px-0 w-full fixed top-0 left-0 z-[999] backdrop-blur-2xl bg-black bg-opacity-30 shadow-[0_0_50px_#333]"
  >
    <div
      class="max-w-7xl mx-auto flex items-center justify-between px-8 sm:px-4 transition-all"
      id="container"
    >
      <div class="logo">
        <a href="index.html">
          <h1 class="text-3xl text-white uppercase">sarget</h1>
        </a>
      </div>
      <nav id="navbar" class="md:absolute md:w-full md:top-full md:left-0 md:bg-white">
        <ul class="my-4 md:flex-col md:text-black flex gap-8">
          <li><a href="#home" class="md:!text-black">Asosiy</a></li>
          <li><a href="#courses" class="md:!text-black">Kurslarimiz</a></li>
          <li><a href="#about">Biz haqimizda</a></li>
          <li><a href="#contact">Aloqa</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
#navbar a {
  @apply text-white text-xl;
}
</style>
