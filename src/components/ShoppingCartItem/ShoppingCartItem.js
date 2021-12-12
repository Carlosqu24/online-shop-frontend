import React, { useContext } from 'react'

import { CartContext } from "../../context/CartProvider"

import './ShoppingCartItem.css'

export const ShoppingCartItem = ({ id, name, description, imageURL, price }) => {

      const { cart, deleteItem } = useContext(CartContext)

      return (
            <>
                  {/* <div className="card mb-3">
                        <div className="row g-0">
                              <div className="col-md-4">
                                    <img src={imageURL} className="img-fluid rounded-start cart-item__img" alt={name} />
                              </div>
                              <div className="col-md-8">
                                    <div className="card-body">
                                          <h5 className="card-title">{name}</h5>
                                          <p className="card-text">{description}</p>
                                          <p className="card-text">${price}</p>
                                          <button
                                                onClick={() => deleteItem(id)}
                                                className="btn btn-danger"
                                          >Delete Item</button>
                                    </div>
                              </div>
                        </div>
                  </div> */}

                  <div className="card cart-item">
                        <img src={imageURL} className="card-img-top product__img" alt={name} />
                        <div className="card-body">
                              <h5 className="card-title">{name}</h5>
                              <p className="card-text">{description}</p>
                              <p>${price}</p>
                              <button
                                    className="btn btn-danger"
                                    onClick={() => deleteItem(id)}
                              >Delete item</button>
                        </div>
                  </div>
            </>
      )
}
