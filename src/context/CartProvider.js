import React, { useState, useEffect, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = (props) => {
      const [products, setProducts] = useState([])
      const [cart, setCart] = useState([]);

      useEffect(() => {
            const getProducts = async () => {
                  const res = await fetch("http://localhost:9000/products");
                  const data = await res.json();

                  setProducts(data);
            };

            getProducts();
      }, []);

      const addItem = id => {
            const data = products.filter(element => element._id === id);

            const item = data[0];
            item.quantity = 1;

            setCart([...cart, item]);
      };

      const deleteItem = id => {
            const newData = cart.filter(item => item._id != id);

            setCart(newData);
      };

      const deleteAllItems = () => setCart([]);

      const getTotalAmount = () => {
            const itemPrices = cart.map(item => item.price)

            return itemPrices.reduce((prev, current) => prev + current, 0)
      }

      const value = {
            cart,
            addItem,
            deleteItem,
            deleteAllItems,
            getTotalAmount
      };

      return (
            <CartContext.Provider value={value}>
                  {
                        props.children
                  }
            </CartContext.Provider>
      )
}