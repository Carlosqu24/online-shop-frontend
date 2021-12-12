import React, { useContext } from 'react'

import { CartContext } from "../../context/CartProvider"

import './ShoppingCartItem.css'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const ShoppingCartItem = ({ id, name, description, imageURL, price }) => {

      const { cart, deleteItem } = useContext(CartContext)

      return (
            <>
                  <Card>
                        <Card.Img variant="top" className="cart-item__img" src={imageURL} />
                        <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                    {description}
                              </Card.Text>
                              <Button
                                    variant="danger"
                                    onClick={() => deleteItem(id)}
                              >Delete</Button>
                        </Card.Body>
                  </Card>
            </>
      )
}
