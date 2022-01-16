import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import './ProductsCategories.css'

export const ProductsCategories = () => {
      const { categories } = useProducts();

      return (
            <div className="products-categories-container">
                  {
                        categories.map(item => (
                              <div key={item.id} className="products-category">
                                    <img 
                                          src={item.imageURL} 
                                          alt={item.name}
                                          className="products-category__img" 
                                    />
                                    <h2 className="products-category__name">{item.name}</h2>
                                    <button className="btn btn-light">Discover</button>
                              </div>
                        ))
                  }
            </div>
      )
}
