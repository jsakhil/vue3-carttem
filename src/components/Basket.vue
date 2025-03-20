<template>
    <div class="basket">
        <h2>Shopping Basket</h2>
        <ul>
            <li v-for="item in basketItems" :key="item.id">
                {{ item.title }} - Quantity: {{ item.quantity }} - ${{ item.price * item.quantity }}
                <button @click="removeItem(item.id)">Remove</button>
            </li>
        </ul>
        <p>Total: ${{ totalPrice }}</p>
    </div>
</template>

<script setup lang="ts">
import { useBasketStore } from '@/stores/basketStore';
import { computed } from 'vue';

const basketStore = useBasketStore();

const basketItems = computed(() => basketStore.items);
const totalPrice = computed(() => basketStore.totalPrice);

const removeItem = (productId: number) => {
    basketStore.removeItem(productId);
};
</script>