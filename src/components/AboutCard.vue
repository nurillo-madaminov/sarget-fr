<script>
export default {
  props: ['img', 'name', 'work', 'about']
}
</script>

<template>
  <div class="card">
    <div class="row flex gap-4">
      <div class="w-[200px] h-[200px] overflow-hidden shrink-0">
        <img :src="img" alt="" class="w-full h-full rounded-2xl object-cover border border-gray-400" />
      </div>
      <div class="col flex flex-col gap-3">
        <h1 class="text-2xl uppercase tracking-widest">{{ name }}</h1>
        <h3 class="text-blue-800 text-xl font-bold">{{ work }}</h3>
        <p class="text-lg text-neutral-600">{{ about }}</p>
        <div class="flex gap-2">
          <a href="#"><i class="fa-brands fa-facebook text-3xl"></i></a>
          <a href="#"><i class="fa-brands fa-twitter text-3xl"></i></a>
          <a href="#"><i class="fa-brands fa-instagram text-3xl"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
