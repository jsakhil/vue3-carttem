<template>
    <div class="filters">
        <div class="card border-0 shadow-none">
            <div class="card-body pt-0">
                <h3 class="card-title">Filters</h3>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Search</h5>
                <input v-model="search" class="form-control" placeholder="Search by name..." />
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Category</h5>
                <select v-model="category" class="form-select">
                    <option value="">All Categories</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Brand</h5>
                <select v-model="brand" class="form-select">
                    <option value="">All Brands</option>
                    <option value="Essence">Essence</option>
                    <option value="Glamour Beauty">Glamour Beauty</option>
                    <option value="Velvet Touch">Velvet Touch</option>
                    <option value="Chic Cosmetics">Chic Cosmetics</option>
                    <option value="Nail Couture">Nail Couture</option>
                    <option value="Calvin Klein">Calvin Klein</option>
                    <option value="Chanel">Chanel</option>
                    <option value="Dior">Dior</option>
                    <option value="Dolce & Gabbana">Dolce & Gabbana</option>
                    <option value="Gucci">Gucci</option>
                    <option value="Annibale Colombo">Annibale Colombo</option>
                    <option value="Furniture Co.">Furniture Co.</option>
                    <option value="Knoll">Knoll</option>
                    <option value="Bath Trends">Bath Trends</option>
                </select>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Price Range</h5>
                <div class="d-flex align-items-center">
                    <input v-model="minPrice" type="number" class="form-control me-2" placeholder="Min" min="0" />
                    <span>-</span>
                    <input v-model="maxPrice" type="number" class="form-control ms-2" placeholder="Max" min="0" />
                </div>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Rating</h5>
                <select v-model="rating" class="form-select">
                    <option value="">All Ratings</option>
                    <option value="4">4 Stars & Above</option>
                    <option value="3">3 Stars & Above</option>
                    <option value="2">2 Stars & Above</option>
                    <option value="1">1 Star & Above</option>
                </select>
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between">
                <button class="btn btn-secondary w-100 me-3" @click="resetFilters">Clear All</button>
                <button class="btn btn-primary w-100" @click="applyFilters">Apply</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');
const category = ref('');
const brand = ref('');
const minPrice = ref('');
const maxPrice = ref('');
const rating = ref('');

const emit = defineEmits<{
    (e: 'filter', filters: {
        category: string;
        search: string;
        brand: string;
        minPrice: string;
        maxPrice: string;
        rating: string;
    }): void;
}>();

const applyFilters = () => {
    emit('filter', {
        category: category.value,
        search: search.value,
        brand: brand.value,
        minPrice: minPrice.value,
        maxPrice: maxPrice.value,
        rating: rating.value,
    });
};

const resetFilters = () => {
    search.value = '';
    category.value = '';
    brand.value = '';
    minPrice.value = '';
    maxPrice.value = '';
    rating.value = '';
    applyFilters();
};
</script>

<style scoped>
.filters {
    max-width: 300px;
}

@media screen and (max-width: 768px) {
    .filters {
        max-width: 100% !important;
        margin-bottom: 60px;
    }
}

.card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>