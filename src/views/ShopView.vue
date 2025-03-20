<template>
    <main class="min-vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center my-5">
                    <h1>Shop</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="sticky-top" style="top: 120px;">
                        <Filters @filter="applyFilter" />
                    </div>
                </div>

                <div class="col-lg-9 col-md-8">
                    <div class="product-grid">
                        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"
                            @add-to-basket="addToBasket" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { fetchProducts, Product } from '@/services/api';
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

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 2rem;
}

.sticky-top {
    position: -webkit-sticky;
    position: sticky;
    z-index: 1020;
}
</style>