import React, { useContext } from 'react'

import { CartContext } from "../../context/CartProvider"

import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {

      const { cart } = useContext(CartContext);

      return (
            <header className="header">
                  <h2>Online Shop</h2>

                  <ul className="navbar">
                        <li className="navbar__item">
                              <Link to="/" className="navbar__link" >Home</Link>
                              <Link to="/products" className="navbar__link" >Products</Link>
                        </li>
                  </ul>

                  <Link to="/cart" className="header__cart btn">
                        <box-icon name="cart"></box-icon>
                        <span>{ cart.length }</span>
                  </Link>
            </header>
      )
}
