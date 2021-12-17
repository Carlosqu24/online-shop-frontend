import React, { useContext } from 'react'

import { CartContext } from '../../context/CartProvider'

import './CartSummary.css';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { PayPalCheckoutButton } from '../PayPalCheckoutButton/PayPalCheckoutButton';

export const CartSummary = () => {

      const { cart } = useContext(CartContext)

      const calculateTotalPrice = () => {
            const itemPrices = cart.map(item => item.price)

            return itemPrices.reduce((prev, current) => prev + current, 0)
      };
      

      return (
            <Card>
                  <Card.Header>Cart Summary</Card.Header>
                  <Card.Body>
                        <Card.Title>
                              Total items: { cart.length }
                        </Card.Title>
                        <Card.Text>
                              Total price: ${ calculateTotalPrice() }
                        </Card.Text>
                        
                        <PayPalCheckoutButton />
                  </Card.Body>
            </Card>
      )
}
