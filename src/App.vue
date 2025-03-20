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

<script setup>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
</script>