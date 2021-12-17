import React, { useEffect, useRef, useContext } from 'react'

import { CartContext } from '../../context/CartProvider';

export const PayPal = () => {
      const { cart } = useContext(CartContext);

      const paypal = useRef();

      useEffect(() => {

            // console.log(cart.map(item => {
            //       const product = {
            //             id: item._id,
            //             description: item.name,
            //             amount: {
            //                   currency_code: "USD",
            //                   value: item.price + 0.01
            //             }
            //       }

            //       return product
            // }))

            const getTotalAmount = () => {
                  const itemPrices = cart.map(item => item.price)

                  return itemPrices.reduce((prev, current) => prev + current, 0)
            }


            const testOrder = {
                  description: "Random description",
                  amount: {
                        currency_code: "USD",
                        value: getTotalAmount()
                  }
            }

            console.log(testOrder)

            const object = {
                  createOrder: (data, actions, error) => {
                        // return actions.order.create({
                        //       intent: "CAPTURE",
                        //       purchase_units: [
                        //             {
                        //                   name: 'Random name',
                        //                   description: 'Cool looking table',
                        //                   amount: {
                        //                         currency_code: "USD",
                        //                         value: 650.00
                        //                   }
                        //             }
                        //       ]
                        // })

                        return actions.order.create({
                              intent: "CAPTURE",
                              purchase_units: 
                                    cart.map(item => {
                                          const product = {
                                                id: item._id,
                                                description: item.name,
                                                amount: {
                                                      currency_code: "USD",
                                                      value: item.price.toFixed(2)
                                                }
                                          }

                                          return product
                                    })
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
