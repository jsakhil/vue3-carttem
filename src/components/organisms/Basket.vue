<template>
    <div class="basket">
        <div v-if="basketItems.length === 0" class="text-center py-5">
            <p class="text-muted">No products in the basket.</p>
        </div>

        <div v-else class="table-responsive">
            <table class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in basketItems" :key="item.id">
                        <td>
                            <div class="d-flex align-items-center">
                                <img :src="item.thumbnail" alt="product image" class="me-2"
                                    style="width: 100px; height: 100px; object-fit: cover;" />
                                {{ item.title }}
                            </div>
                        </td>

                        <td>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-sm btn-outline-secondary" @click="decrementQuantity(item.id)">
                                    <i class="bi bi-dash"></i>
                                </button>
                                <span class="mx-2">{{ item.quantity }}</span>
                                <button class="btn btn-sm btn-outline-secondary" @click="incrementQuantity(item.id)">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                        </td>
                        <td>${{ item.price }}</td>
                        <td>${{ item.price * item.quantity }}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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

const incrementQuantity = (productId: number) => {
    basketStore.updateQuantity(productId, 1);
};

const decrementQuantity = (productId: number) => {
    basketStore.updateQuantity(productId, -1);
};
</script>

<style scoped>
.table-responsive {
    max-height: 400px;
    overflow-y: auto;
}

img {
    border-radius: 4px;
}
</style>