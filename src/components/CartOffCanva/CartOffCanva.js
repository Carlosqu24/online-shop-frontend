import React from 'react'

import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { CartSummary } from "../CartSummary/CartSummary"

import { Offcanvas } from 'react-bootstrap'

export const CartOffCanva = ({ show, handleClose }) => {
      return (
            <>
                  <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              <CartSummary />
                              <ShoppingCart />
                        </Offcanvas.Body>
                  </Offcanvas>
            </>
      )
}
