import React, { useState } from 'react'

import { PayPal } from '../PayPal/PayPal';

export const PayPalCheckoutButton = () => {
      const [checkout, setCheckout] = useState(false);

      return (
            <>
                  { 
                        checkout ? (
                              <PayPal />
                        ) : (
                              <button
                                    onClick={() => setCheckout(true)}
                              >
                                    Checkout
                              </button>
                        )
                  }
            </>
      )
}
