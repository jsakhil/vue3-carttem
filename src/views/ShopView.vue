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
                        <ProductCard v-for="product in visibleProducts" :key="product.id" :product="product"
                            @add-to-basket="addToBasket" />
                    </div>

                    <div class="text-center mt-4">
                        <button v-if="visibleCount < filteredProducts.length" class="btn btn-outline-primary"
                            @click="viewMore">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { fetchProducts, type Product } from '@/services/api';
import Filters from '../components/Filters.vue';
import ProductCard from '../components/ProductCard.vue';
import { useBasketStore } from '@/stores/basketStore';

const products = ref<Product[]>([]);
const filters = ref<{ category: string; search: string }>({ category: '', search: '' });
const visibleCount = ref<number>(6);

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

const visibleProducts = computed(() => {
    return filteredProducts.value.slice(0, visibleCount.value);
});

const applyFilter = (newFilters: { category: string; search: string }) => {
    filters.value = newFilters;
    visibleCount.value = 6;
};

const addToBasket = (product: Product) => {
    useBasketStore().addItem(product);
};

const viewMore = () => {
    visibleCount.value += 6;
};
</script>

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 2rem;
}

.btn-outline-primary {
    padding: 2px 30px;
    font-size: 1rem;
}
</style>