<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/carttem-logo-home.png" alt="Logo" class="d-inline-block align-text-top me-2" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Shop</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>

                    <div class="d-flex ms-3">
                        <button type="button" class="btn btn-primary position-relative" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
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

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Shopping Basket</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Basket />
                </div>
                <div class="modal-footer justify-content-between">
                    <span class="ms-2 fw-bold">Total: ${{ totalPrice }}</span>
                    <div>
                        <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Basket from '../Basket.vue';
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