import React from 'react'

import './ProductsCategories.css'

export const ProductsCategories = () => {

      const productsCategories = [
            {
                  id: 1,
                  url: "https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }, {
                  id: 2,
                  url: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }, {
                  id: 3,
                  url: "https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            }
      ]

      return (
            <div className="products-categories-container">
                  {
                        productsCategories.map(item => (
                              <div className="products-category">
                                    <img 
                                          src={item.url} 
                                          alt="" 
                                          className="products-category__img"
                                    />
                              </div>
                        ))
                  }
            </div>
      )
}
