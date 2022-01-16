import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Carousel } from '../components/Carousel/Carousel';
import { ProductsCategories } from '../components/ProductsCategories/ProductsCategories';

export const HomePage = () => {
      const { products } = useProducts();

      return (
            <>
                  <Carousel images={products} />    
                  <ProductsCategories />   
            </>
      )
}
