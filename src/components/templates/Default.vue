<template>
  <div class="container-fluid">
    <div class="container">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'
</script>
