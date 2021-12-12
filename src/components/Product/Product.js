import React, { useContext } from 'react'

import './Product.css'

import { CartContext } from '../../context/CartProvider'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Product = ({ id, name, category, description, imageURL, price }) => {
      const { addItem } = useContext(CartContext);

      return (
            <Card>
                  <Card.Img variant="top" className="product__img" src={imageURL} />
                  <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>
                              {category}
                        </Card.Subtitle>
                        <Card.Text>
                              {description}
                        </Card.Text>
                        <Button 
                              variant="dark"
                              onClick={() => addItem(id)}
                        >Add to cart</Button>
                  </Card.Body>
            </Card>
      )
}
