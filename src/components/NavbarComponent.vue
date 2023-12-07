<script>
export default {
  name: 'Navbar',
}
</script>
<template>
  <header class="header">
    <div class="max-w-[1140px] mx-auto flex items-center justify-between" id="container">
      <div class="logo">
        <a href="index.html">
          <h1 class="text-3xl">sarget</h1>
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
.header {
  @apply py-4 px-0 w-full fixed top-0 left-0 z-[999] backdrop-blur-2xl bg-black bg-opacity-30 shadow-[0_0_50px_#333];
}

.logo h1 {
  color: #fff;
  text-transform: uppercase;
}

#navbar ul {
  display: flex;
  gap: 30px;
}

#navbar a {
  color: #fff;
  font-size: 20px;
}
</style>
