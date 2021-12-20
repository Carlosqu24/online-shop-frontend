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
                              <Card.Title className="mb-3">{name}</Card.Title>
                              <Card.Text className="mb-3">
                                    {description}
                              </Card.Text>
                              <Card.Text className="mb-3">
                                    ${ quantity * price }
                              </Card.Text>
                              <div className="actions mb-3">
                                    <button className="btn btn-dark" onClick={() => addQuantity(id)}>
                                          +
                                    </button>

                                    <span className="p-3">{ quantity }</span>

                                    <button className="btn btn-dark" onClick={() => substractQuantity(id)}>
                                          -
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
