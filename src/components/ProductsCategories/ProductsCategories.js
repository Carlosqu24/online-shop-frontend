import React from 'react'

import './ProductsCategories.css'

export const ProductsCategories = () => {

      const productsCategories = [
            {
                  id: 1,
                  url: "https://www.kantoaudio.com/wp-content/uploads/yu2mb_main.png",
                  name: "Graphics"
            }, 
            {
                  id: 2,
                  url: "https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/25001/pc-gaming-maus.png",
                  name: "Mouse"
            }, 
            {
                  id: 3,
                  url: "https://static.acer.com/up/Resource/Acer/Monitors/K3/Photogallery/20200710/Acer_Monitor_K243Y_K273_gallery_01.png",
                  name: "Monitor"
            }
      ]

      return (
            <div className="products-categories-container">
                  {
                        productsCategories.map(item => (
                              <div key={item.id} className="products-category">
                                    <img 
                                          src={item.url} 
                                          alt={item.name}
                                          className="products-category__img" 
                                    />
                                    <h2 className="products-category__name">{item.name}</h2>
                                    <button className="btn btn-light">Discover</button>
                              </div>
                        ))
                  }
            </div>
      )
}
