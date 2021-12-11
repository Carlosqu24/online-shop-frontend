import React, { useContext } from 'react'

import './Product.css'

import { CartContext } from '../../context/CartProvider'

export const Product = ({ id, name, category, description, imageURL, price }) => {
      const { addItem } = useContext(CartContext);

      return (
            <div className="card">
                  <img src={imageURL} className="card-img-top" alt={name} />   
                        <div className="card-body">
                              <h5 className="card-title">{name}</h5>
                              <p className="card-text">{description}</p>
                              <p>{category}</p>
                              <p>${price}</p>
                              <button 
                                    className="btn btn-dark"
                                    onClick={() => addItem(id)}      
                              >Add to cart</button>
                        </div>
            </div>
      )
}
