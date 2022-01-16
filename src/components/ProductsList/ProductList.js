import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import { Product } from '../Product/Product'
import './ProductsList.css'

export const ProductList = () => {
      const { products } = useProducts();      

      return (
            <>    
                  <div className="products-list my-4">
                        {
                              products.map(item => <Product key={item._id} product={item} />)
                        }
                  </div>
            </>
      )
}
