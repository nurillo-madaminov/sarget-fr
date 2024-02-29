<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log(121212)
})
</script>
<template>
  <div class="h-screen bg-red-500 flex items-center justify-center">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>
