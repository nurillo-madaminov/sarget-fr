<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log(121212)
})
</script>
<template>
  <div class="">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>
