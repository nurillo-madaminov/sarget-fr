<script>
import FooterPart from './components/FooterPart.vue'
import NavigationBar from './components/NavigationBar.vue'
import HomeView from './views/HomeView.vue'

export default {
  data() {
    return {}
  },
  components: { HomeView, NavigationBar, FooterPart }
}
</script>

<template>
  <navigation-bar />
  <home-view />
  <footer-part />
</template>
