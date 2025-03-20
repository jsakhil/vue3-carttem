import { defineStore } from 'pinia';
import { type Product } from '@/services/api';

interface BasketItem extends Product {
    quantity: number;
}

export const useBasketStore = defineStore('basket', {
    state: () => ({
        items: [] as BasketItem[],
    }),
    actions: {
        addItem(product: Product) {
            const existingItem = this.items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        removeItem(productId: number) {
            this.items = this.items.filter((item) => item.id !== productId);
        },
        updateQuantity(productId: number, change: number) {
            const item = this.items.find((item) => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    this.removeItem(productId);
                }
            }
        },
    },
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) =>
            state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    },
});