<template>
  <div class="container-fluid">
    <div class="container">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../organisms/Header.vue'
import Footer from '../organisms/Footer.vue'
</script>
