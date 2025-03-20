import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/products`;

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    brand: string;
    stock: string;
    images: Array<string>;
    rating: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data.products as Product[];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};