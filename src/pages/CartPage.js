import React from 'react'

import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart'
import { CartSummary } from '../components/CartSummary/CartSummary'

export const CartPage = () => {
      return (
            <>
                  <CartSummary />
                  <ShoppingCart />
            </>
      )
}
