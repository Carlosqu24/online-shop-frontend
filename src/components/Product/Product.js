import React, { useContext } from 'react'

import './Product.css'

import { CartContext } from '../../context/CartProvider'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Product = ({ product }) => {
      const { addItem } = useContext(CartContext);

      return (
            <Card className="product bg-dark">
                  <Card.Img variant="top" className="product__img" src={product.imageURL} />
                  <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle>
                              {product.category}
                        </Card.Subtitle>
                        <Card.Text>
                              {product.description}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                              <Card.Text className="product__price m-0 text-light">
                                    ${product.price}
                              </Card.Text>
                              <Button 
                                    variant="primary"
                                    onClick={() => addItem(product)}
                              >Add to cart</Button>
                        </div>
                  </Card.Body>
            </Card>
      )
}
