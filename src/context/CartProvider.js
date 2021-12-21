import React, { useReducer, createContext } from 'react'

import cartReducer from './CartReducer';

const initialState = {
      products: [],
      cart: []
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
      const [state, dispatch] = useReducer(cartReducer, initialState);

      const addItem = item => dispatch({ type: 'ADD_CART_ITEM', payload: { ...item, quantity: 1 } });

      const addItemQuantity = id => dispatch({ type: 'ADD_ITEM_QUANTITY', payload: id });

      const substractItemQuantity = id => dispatch({ type: 'SUBSTRACT_ITEM_QUANTITY', payload: id })

      const deleteItem = id => dispatch({ type: 'DELETE_CART_ITEM', payload: id });

      const deleteAllItems = () => dispatch({ type: 'DELETE_ALL_CART_ITEMS', payload: {} });

      const getTotalAmount = () => {
            const itemPrices = state.cart.map(item => item.price * item.quantity)

            return itemPrices.reduce((prev, current) => prev + current, 0);
      }

      const value = {
            cart: state.cart,
            addItem,
            addItemQuantity,
            substractItemQuantity,
            deleteItem,
            deleteAllItems,
            getTotalAmount
      };

      return (
            <CartContext.Provider value={value}>
                  { children }
            </CartContext.Provider>
      )
}