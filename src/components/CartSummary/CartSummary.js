import React, { useContext } from 'react'

import { CartContext } from '../../context/CartProvider'

import './CartSummary.css'

export const CartSummary = () => {

      const { cart } = useContext(CartContext)

      const calculateTotalPrice = () => {
            const itemPrices = cart.map(item => item.price)

            return itemPrices.reduce((prev, current) => prev + current, 0)
      };

      calculateTotalPrice()

      return (
            <div className="card">
                  <h5 className="card-header">Cart Summary</h5>
                  <div className="card-body">
                        <p className="card-text">Total items: {cart.length}</p>
                        <p className="card-text">Total price: ${calculateTotalPrice()}</p>
                        <button className="btn btn-primary">Checkout</button>
                  </div>
            </div>
      )
}
