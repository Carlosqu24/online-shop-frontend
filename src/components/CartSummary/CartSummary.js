import React, { useContext } from 'react'

import { CartContext } from '../../context/CartProvider'

import './CartSummary.css';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { PayPalCheckoutButton } from '../PayPalCheckoutButton/PayPalCheckoutButton';

export const CartSummary = () => {

      const { cart, getTotalAmount } = useContext(CartContext)      

      return (
            <Card>
                  <Card.Header>Cart Summary</Card.Header>
                  <Card.Body>
                        <Card.Title>
                              Total items: { cart.length }
                        </Card.Title>
                        <Card.Text>
                              Total price: ${ getTotalAmount() }
                        </Card.Text>
                        
                        <PayPalCheckoutButton />
                  </Card.Body>
            </Card>
      )
}
