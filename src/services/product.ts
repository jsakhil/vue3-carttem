import type { GetProductsResponse } from '@/types/product'
import { api } from './api'
import { PRODUCT_API } from '@/constants/api'

export const fetchProducts = async () => {
  try {
    const response = await api.get<GetProductsResponse>(PRODUCT_API.GET)
    return response.data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}
