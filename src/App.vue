<script>
import FooterPart from './components/FooterPart.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  components: { NavigationBar, FooterPart }
}
</script>

<template>
  <navigation-bar />
  <RouterView></RouterView>
  <footer-part />
</template>
