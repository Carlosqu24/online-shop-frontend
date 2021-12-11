import React, { useContext } from 'react'

import './ShoppingCart.css'

import { CartContext } from "../../context/CartProvider"
import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem'

export const ShoppingCart = () => {

      const { cart, deleteItem } = useContext(CartContext)

      return (
            <div className="shopping-cart">
                  <h2>Shopping Cart</h2>

                  {
                        cart.map(item => (
                              <ShoppingCartItem
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                              />
                        ))
                  }
            </div>
      )
}
