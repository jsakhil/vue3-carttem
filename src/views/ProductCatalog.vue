<template>
    <div>
        <Filters @filter="applyFilter" />
        <div class="product-grid">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"
                @add-to-basket="addToBasket" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { fetchProducts, type Product } from '@/services/api';
import Filters from '../components/Filters.vue';
import ProductCard from '../components/ProductCard.vue';
import { useBasketStore } from '@/stores/basketStore';

const products = ref<Product[]>([]);
const filters = ref<{ category: string; search: string }>({ category: '', search: '' });

onMounted(async () => {
    products.value = await fetchProducts();
});

const filteredProducts = computed(() => {
    return products.value.filter((product) => {
        const matchesCategory =
            !filters.value.category || product.category === filters.value.category;
        const matchesSearch =
            !filters.value.search ||
            product.title.toLowerCase().includes(filters.value.search.toLowerCase());
        return matchesCategory && matchesSearch;
    });
});

const applyFilter = (newFilters: { category: string; search: string }) => {
    filters.value = newFilters;
};

const addToBasket = (product: Product) => {
    useBasketStore().addItem(product);
};
</script>