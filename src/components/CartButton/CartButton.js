import React, { useContext } from 'react'

import { CartContext } from '../../context/CartProvider'

import { CartOffCanva } from '../CartOffCanva/CartOffCanva'

export const CartButton = () => {
      const { cart } = useContext(CartContext)

      return (
            <>
                  <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <box-icon name='cart'></box-icon>
                        {cart.length}
                  </button>

                  <CartOffCanva />
            </>
      )
}
