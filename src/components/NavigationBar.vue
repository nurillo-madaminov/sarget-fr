<script>
export default {
  name: 'NavigationBar'
}
</script>
<template>
  <header class="header py-4 px-0 w-full fixed top-0 left-0 z-[999] backdrop-blur-2xl bg-black bg-opacity-30 shadow-[0_0_50px_#333]">
    <div class="mx-auto flex items-center justify-between px-8" id="container">
      <div class="logo">
        <a href="index.html">
          <h1 class="text-3xl text-white uppercase">sarget</h1>
        </a>
      </div>
      <nav id="navbar">
        <ul class="my-4">
          <li><a href="#">Asosiy</a></li>
          <li><a href="#">Kurslarimiz</a></li>
          <li><a href="#">Biz haqimizda</a></li>
          <li><a href="#">Aloqa</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
#navbar ul {
  @apply flex gap-8;
}

#navbar a {
  @apply text-white text-xl;
}
</style>
