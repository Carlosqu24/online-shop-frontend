import React, { useContext } from 'react'

import { CartContext } from "../../context/CartProvider"

import './ShoppingCartItem.css'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const ShoppingCartItem = ({ id, name, description, imageURL, price, quantity }) => {

      const { cart, deleteItem, addQuantity, substractQuantity } = useContext(CartContext)

      return (
            <>
                  <Card>
                        <Card.Img variant="top" className="cart-item__img" src={imageURL} />
                        <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                    {description}
                              </Card.Text>
                              <Card.Text>
                                    {quantity}
                              </Card.Text>
                              <div className="actions">
                                    <button onClick={() => addQuantity(id)}>
                                          Sumar
                                    </button>

                                    <button onClick={() => substractQuantity(id)}>
                                          Restar
                                    </button>
                              </div>
                              <Button
                                    variant="danger"
                                    onClick={() => deleteItem(id)}
                              >Delete</Button>
                        </Card.Body>
                  </Card>
            </>
      )
}
