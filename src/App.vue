<template>
  <div id="app">
    <NavBar />

      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component">

          </component>
        </transition>
      </router-view>

    <Footer />

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px)
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in
}
</style>

