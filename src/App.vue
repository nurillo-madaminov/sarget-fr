<script>
import NavbarComponent from './components/NavbarComponent.vue'
import HomeView from './views/HomeView.vue'

export default {
  data() {
    return {}
  },
  components: {
    'home-view': HomeView,
    NavbarComponent
  }
}
</script>

<template>
  <NavbarComponent />
  <home-view />
</template>
