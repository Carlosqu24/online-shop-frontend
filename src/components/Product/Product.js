import React, { useContext } from 'react'

import './Product.css'

import { CartContext } from '../../context/CartProvider'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Product = ({ id, name, category, description, imageURL, price }) => {
      const { addItem } = useContext(CartContext);

      return (
            <Card className="product">
                  <Card.Img variant="top" className="product__img" src={imageURL} />
                  <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>
                              {category}
                        </Card.Subtitle>
                        <Card.Text>
                              {description}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                              <Card.Text className="product__price m-0">
                                    ${price}
                              </Card.Text>
                              <Button 
                                    variant="dark"
                                    onClick={() => addItem(id)}
                              >Add to cart</Button>
                        </div>
                  </Card.Body>
            </Card>
      )
}
