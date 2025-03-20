import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
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