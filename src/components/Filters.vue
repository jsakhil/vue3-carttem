<template>
    <div class="filters">
        <input v-model="search" placeholder="Search by name..." @input="applyFilters" />
        <select v-model="category" @change="applyFilters">
            <option value="">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
        </select>
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