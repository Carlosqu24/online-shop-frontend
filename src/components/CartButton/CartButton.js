import React, { useState, useContext } from 'react'

// CONTEXT
import { CartContext } from '../../context/CartProvider'

// COMPONENTS
import { CartOffCanva } from '../CartOffCanva/CartOffCanva'

import { Button } from 'react-bootstrap'

export const CartButton = () => {
      const [show, setShow] = useState(false)

      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);

      const { cart } = useContext(CartContext)


      return (
            <>
                  <Button variant="light" onClick={handleShow}>
                        <box-icon name='cart'></box-icon>
                        { cart.length }
                  </Button>

                  <CartOffCanva 
                        show={show}
                        handleClose={handleClose}
                  />
            </>
      )
}
