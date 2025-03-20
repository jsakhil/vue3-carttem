<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid position-relative">
                <router-link to="/" class="navbar-brand">
                    <img src="/carttem-logo-home.png" alt="Logo" class="d-inline-block align-text-top me-2" />
                </router-link>

                <div class="btn-basket-responsive d-lg-none d-flex ms-3">
                    <button class="btn btn-primary position-relative me-3" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i class="bi bi-basket-fill"></i> Basket
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {{ totalItems }}
                            <span class="visually-hidden">items in cart</span>
                        </span>
                    </button>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/shop" class="nav-link">Shop</router-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>

                    <div class="btn-basket d-none d-lg-flex ms-3">
                        <button class="btn btn-primary position-relative" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i class="bi bi-basket-fill"></i> Basket
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {{ totalItems }}
                                <span class="visually-hidden">items in cart</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <div class="offcanvas offcanvas-end custom-offcanvas" data-bs-scroll="true" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h3 class="offcanvas-title" id="offcanvasRightLabel">Shopping Basket</h3>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <Basket />
        </div>
        <div class="offcanvas-footer justify-content-between">
            <span class="ms-2 fw-bold">Total: ${{ totalPrice }}</span>
            <div>
                <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="offcanvas">Close</button>
                <button type="button" class="btn btn-primary">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Basket from './Basket.vue';
import { useBasketStore } from '@/stores/basketStore';
import { computed } from 'vue';

const basketStore = useBasketStore();

const totalPrice = computed(() => basketStore.totalPrice);
const totalItems = computed(() => basketStore.totalItems);
</script>

<style scoped>
nav.navbar {
    padding: 25px 0px;
}
</style>