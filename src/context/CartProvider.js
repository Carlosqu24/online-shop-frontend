import React, { useState, useEffect, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = (props) => {
      const [products, setProducts] = useState([])
      const [cart, setCart] = useState([{
            id: 1,
            name: "PC"
      }]);

      useEffect(() => {
            const getProducts = async () => {
                  const res = await fetch("http://localhost:9000/products");
                  const data = await res.json();

                  setProducts(data);
            };

            getProducts();
      }, []);

      const addItem = id => {
            const data = products.filter(element => element._id == id);

            console.log(data)

            setCart([...cart, ...data]);
      };

      const deleteItem = id => {
            const newData = cart.filter(item => item.id !== id);
            console.log(newData)

            setCart(newData);
      };

      const value = {
            cart,
            addItem,
            deleteItem
      };

      return (
            <CartContext.Provider value={value}>
                  {
                        props.children
                  }
            </CartContext.Provider>
      )
}