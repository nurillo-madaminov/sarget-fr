<script>
import FooterPart from './components/FooterPart.vue'
import NavigationBar from './components/NavigationBar.vue'
// import HomeView from './views/HomeView.vue';

export default {
  components: { NavigationBar, FooterPart }
}
</script>

<template>
  <navigation-bar />
  <RouterView></RouterView>
  <footer-part />
</template>
