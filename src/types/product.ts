export interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  category: string
  brand: string
  stock: string
  images: Array<string>
  rating: number
}

export interface GetProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
