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
          <div class="sticky-top" style="top: 120px">
            <Filters @filter="applyFilter" />
          </div>
        </div>

        <div class="col-lg-9 col-md-8">
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else>
            <div class="d-flex justify-content-end mb-3">
              <h5 class="me-2 align-self-center">Sort By:</h5>
              <select
                id="sort-by"
                class="form-select w-auto"
                v-model="sortBy"
                @change="applySorting"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            <div v-if="appliedFilteredProducts.length === 0" class="text-center py-5">
              <h3>No products found</h3>
            </div>

            <div v-else>
              <div class="product-grid">
                <ProductCard
                  v-for="product in visibleProducts"
                  :key="product.id"
                  :product="product"
                  @add-to-basket="addToBasket"
                />
              </div>

              <div class="text-center mt-4">
                <button
                  v-if="visibleCount < appliedFilteredProducts.length"
                  class="btn btn-outline-primary"
                  @click="viewMore"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import { fetchProducts } from '@/services/product'
import { type Product } from '@/types/product'
import Filters from '../../components/organisms/Filters.vue'
import ProductCard from '../../components/organisms/ProductCard.vue'
import { useBasketStore } from '@/stores/basketStore'

const products = ref<Product[]>([])
const filters = ref<{
  category: string
  search: string
  brand: string
  minPrice: string
  maxPrice: string
  rating: string
}>({
  category: '',
  search: '',
  brand: '',
  minPrice: '',
  maxPrice: '',
  rating: '',
})

const loading = ref<boolean>(true)
const visibleCount = ref<number>(6)
const sortBy = ref<string>('default')

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesCategory = !filters.value.category || product.category === filters.value.category

    const matchesSearch =
      !filters.value.search ||
      product.title.toLowerCase().includes(filters.value.search.toLowerCase())

    const matchesBrand = !filters.value.brand || product.brand === filters.value.brand

    const matchesPriceRange = (() => {
      const minPrice = filters.value.minPrice ? Number(filters.value.minPrice) : null
      const maxPrice = filters.value.maxPrice ? Number(filters.value.maxPrice) : null

      if (minPrice !== null && maxPrice !== null) {
        return product.price >= minPrice && product.price <= maxPrice
      } else if (minPrice !== null) {
        return product.price >= minPrice
      } else if (maxPrice !== null) {
        return product.price <= maxPrice
      } else {
        return true
      }
    })()

    const matchesRating =
      filters.value.rating == null || product.rating >= Number(filters.value.rating)

    return matchesCategory && matchesSearch && matchesBrand && matchesPriceRange && matchesRating
  })
})

const appliedFilteredProducts = ref<Product[]>([])

const sortedProducts = computed(() => {
  const defaultSort = [...filteredProducts.value]
  let sorted = [...appliedFilteredProducts.value]

  switch (sortBy.value) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      sorted.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'name-desc':
      sorted.sort((a, b) => b.title.localeCompare(a.title))
      break
    case 'default':
      sorted = defaultSort
      break
    default:
      sorted = defaultSort
      break
  }

  return sorted
})

const visibleProducts = computed(() => {
  return appliedFilteredProducts.value.slice(0, visibleCount.value)
})

onMounted(async () => {
  try {
    products.value = await fetchProducts()
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
    appliedFilteredProducts.value = filteredProducts.value
  }
})

const applyFilter = (newFilters: {
  category: string
  search: string
  brand: string
  minPrice: string
  maxPrice: string
  rating: string
}) => {
  filters.value = newFilters
  appliedFilteredProducts.value = filteredProducts.value
  visibleCount.value = 6
}

const addToBasket = (product: Product) => {
  useBasketStore().addItem(product)
}

const viewMore = () => {
  visibleCount.value += 6
}

const applySorting = () => {
  visibleCount.value = 6
  appliedFilteredProducts.value = sortedProducts.value
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 2rem;
}

@media screen and (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}

@media screen and (max-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
}

.btn-outline-primary {
  padding: 2px 30px;
  font-size: 1rem;
}
</style>
