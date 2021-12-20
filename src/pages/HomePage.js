import React, { useState, useEffect } from 'react';

import { Carousel } from '../components/Carousel/Carousel';
import { ProductsCategories } from '../components/ProductsCategories/ProductsCategories';

const initialState = []

export const HomePage = () => {

      const [images, setImages] = useState(initialState)

      useEffect(() => {
            
            const getImages = async () => {
                  const response = await fetch('http://localhost:9000/products/Laptop')
                  const data = await response.json();

                  const slicedData = data.slice(0, 3)

                  console.log("Data", data)
                  console.log("Sliced data", slicedData)

                  setImages(slicedData)
            }

            getImages()
      }, [])

      return (
            <>
                  <Carousel images={images} />    
                  <ProductsCategories />   
            </>
      )
}
