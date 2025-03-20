<template>
  <div id="app">
    <div class="container-fluid">
      <div class="container">
        <Header />
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/organisms/Header.vue';
import Footer from './components/organisms/Footer.vue';
</script>