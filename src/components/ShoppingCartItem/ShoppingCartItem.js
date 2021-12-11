import React, { useContext } from 'react'

import { CartContext } from "../../context/CartProvider"

export const ShoppingCartItem = ({ id, name, description }) => {

      const { cart, deleteItem } = useContext(CartContext)

      return (
            <div className="card">
                  {/* <img src="..." className="card-img-top" alt="..."> */}
                  <div className="card-body">
                        <p>{id}</p>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button
                              onClick={() => deleteItem(id)}
                              className="btn btn-danger"
                        >Delete Item</button>
                  </div>
            </div>
      )
}
