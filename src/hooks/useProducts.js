import { useState, useEffect } from 'react';


export const useProducts = (type = '') => {
        const [products, setProducts] = useState([])
        const [categories, setCategories] = useState([])

        useEffect(() => {
                const getProducts = async () => {
                        const res = await fetch(`http://localhost:9000/products/${type}`);
                        const data = await res.json();

                        setProducts(data);
                };

                const getCategories = async () => {
                        const res = await fetch(`http://localhost:9000/categories`);
                        const data = await res.json();

                        setCategories(data)
                };

                getProducts();

                getCategories();
        }, []);

        return {
                products,
                categories
        }
}
