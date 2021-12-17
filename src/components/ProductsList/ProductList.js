import React, { useState, useEffect } from 'react'

import './ProductsList.css'

import { Product } from '../Product/Product'

export const ProductList = () => {
      const [products, setProducts] = useState([])

      useEffect(() => {

            const getProducts = async () => {
                  const res = await fetch("http://localhost:9000/products");
                  const data = await res.json();

                  setProducts(data);
            };

            getProducts();
      }, []);

      return (
            <>    
                  <div className="products-list my-4">
                        {
                              products.map(item => (
                                    <Product 
                                          key={item._id}
                                          id={item._id}
                                          name={item.name}
                                          description={item.description}
                                          imageURL={item.imageURL}
                                          category={item.category}
                                          price={item.price}
                                    />
                              ))
                        }
                  </div>
            </>
      )
}
