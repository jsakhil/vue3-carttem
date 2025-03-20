<template>
    <div class="product-card">
        <img :src="product.thumbnail" alt="product image" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
        <button @click="addToBasket">Add to Basket</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { type Product } from '@/services/api';

const props = defineProps<{
    product: Product;
}>();

const emit = defineEmits<{
    (e: 'add-to-basket', product: Product): void;
}>();

const addToBasket = () => {
    emit('add-to-basket', props.product);
};
</script>