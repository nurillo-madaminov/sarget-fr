<script>
import NavigationBar from './components/NavigationBar.vue'
import HomeView from './views/HomeView.vue'

export default {
  data() {
    return {}
  },
  components: { HomeView, NavigationBar }
}
</script>

<template>
  <NavigationBar />
  <home-view />
</template>
