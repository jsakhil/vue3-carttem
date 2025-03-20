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
                <input v-model="search" class="form-control" placeholder="Search by name..." @input="applyFilters" />
            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Category</h5>
                <select v-model="category" class="form-select" @change="applyFilters">
                    <option value="">All Categories</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');
const category = ref('');

const emit = defineEmits<{
    (e: 'filter', filters: { category: string; search: string }): void;
}>();

const applyFilters = () => {
    emit('filter', { category: category.value, search: search.value });
};
</script>

<style scoped>
.filters {
    max-width: 300px;
}

.card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>