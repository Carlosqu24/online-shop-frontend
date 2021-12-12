import React from 'react'

import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { CartSummary } from "../CartSummary/CartSummary"

export const CartOffCanva = () => {
      return (
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                        <CartSummary />
                        <ShoppingCart />
                  </div>
            </div>
      )
}
