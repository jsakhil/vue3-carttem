<template>
  <div id="app">
    <div class="container-fluid">
      <div class="container">
        <Header />
        <ShopView />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import ShopView from './views/ShopView.vue';
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
</script>