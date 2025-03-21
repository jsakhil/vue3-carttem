<template>
  <div class="product-card">
    <div v-if="showAlert" class="alert alert-success mt-3" role="alert">
      {{ alertMessage }}
    </div>

    <div class="card h-100">
      <img :src="product.thumbnail" alt="product image" class="card-img-top img-fluid" style="cursor: pointer"
        @click="openModal" />

      <div class="card-body d-flex flex-column">
        <h5 class="card-title" style="cursor: pointer" @click="openModal">
          {{ product.title }}
        </h5>
        <p class="card-text text-primary fw-bold">${{ product.price }}</p>
        <div class="d-flex mt-auto">
          <button class="btn btn-primary mt-auto w-100 me-2" @click="addToBasket">
            Add to Basket
          </button>
          <button class="btn btn-outline-primary" type="submit"><i class="bi bi-heart"></i></button>
        </div>
      </div>
    </div>

    <div class="modal fade" :id="'productModal-' + product.id" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="product.images?.[0]" alt="product image" class="img-fluid mb-3" />
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>Brand:</strong> {{ product.brand }}</p>
            <p><strong>Description:</strong> {{ product.description }}</p>
            <p><strong>Price:</strong> ${{ product.price }}</p>
            <p><strong>Rating:</strong> {{ product.rating }}/5</p>
            <p><strong>Stock:</strong> {{ product.stock }} available</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary mt-auto" @click="addToBasket">Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type Product } from '@/types/product'
import { Modal } from 'bootstrap'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  (e: 'add-to-basket', product: Product): void
}>()

const showAlert = ref<boolean>(false);
const alertMessage = ref<string>('');

const addToBasket = () => {
  emit('add-to-basket', props.product)

  alertMessage.value = `${props.product.title} has been added to basket!`;
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
  }, 3000);

}

const openModal = () => {
  const modalId = `#productModal-${props.product.id}`
  const modalElement = document.querySelector(modalId)
  if (modalElement) {
    const modal = new Modal(modalElement)
    modal.show()
  }
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: contain;
}

.alert.alert-success {
  position: fixed;
  top: 0px;
  right: 20px;
  z-index: 99999;
}
</style>
