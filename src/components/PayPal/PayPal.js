import React, { useEffect, useRef, useContext } from 'react'

import { CartContext } from '../../context/CartProvider';

export const PayPal = () => {

      const { cart, deleteAllItems, getTotalAmount } = useContext(CartContext);

      const paypal = useRef();

      useEffect(() => {

            const object = {
                  createOrder: (data, actions, error) => {
                        
                        return actions.order.create({
                              intent: "CAPTURE",
                              purchase_units: 
                                    [
                                          {
                                                description: cart.map(item => `${item.name} $${item.price}`).join('-'),
                                                amount: {
                                                      currency_code: "USD",
                                                      value: getTotalAmount() + 0.00
                                                }
                                          }
                                    ]
                        })
                  },
                  onApprove: async (data, actions) => {
                        const order = await actions.order.capture()
                        console.log(order)
                  },
                  onError: (error) => {
                        console.log(error)
                  }
            }

            window.paypal.Buttons(object).render(paypal.current)
      }, [])

      return (
            <div>
                  <div ref={paypal}></div>
            </div>
      )
}
