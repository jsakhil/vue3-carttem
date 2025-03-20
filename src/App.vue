<template>
  <div id="app">
    <h1>Product Catalog</h1>
    <ProductCatalog />
    <Basket />
  </div>
</template>

<script setup>
import ProductCatalog from './views/ProductCatalog.vue';
import Basket from './components/Basket.vue';
</script>