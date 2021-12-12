import React, { useContext } from 'react'

import './ShoppingCart.css'

import { CartContext } from "../../context/CartProvider"
import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem'

export const ShoppingCart = () => {

      const { cart, deleteItem } = useContext(CartContext)

      return (
            <>
                  <h2>Shopping Cart</h2>

                  <div className="shopping-cart-list">
                        {
                              cart.map(item => (
                                    <ShoppingCartItem
                                          key={item._id}
                                          id={item._id}
                                          imageURL={item.imageURL}
                                          description={item.description}
                                          name={item.name}
                                          price={item.price}
                                          quantity={item.quantity}
                                    />
                              ))
                        }
                  </div>
            </>
      )
}
