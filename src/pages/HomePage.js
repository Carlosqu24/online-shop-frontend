import React from 'react';

import { Banner } from '../components/Banner/Banner';
import { Carousel } from '../components/Carousel/Carousel';
import { ProductList } from '../components/ProductsList/ProductList'

export const HomePage = () => {

      const carouselImages = [
            {
                  id: new Date().getTime(),
                  url: "https://nuevowevo.com/wp-content/uploads/2021/06/katana-gf66.png",
                  name: "First image",
                  description: "First description",
                  isActive: true
            },
            {
                  id: new Date().getTime(),
                  url: "https://asset.msi.com/resize/image/global/product/product_16070685462ea3f82dc6b15911a26da3bac70ab6f0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
                  name: "Second image",
                  description: "Second description"
            },
            {
                  id: new Date().getTime(),
                  url: "https://www.wipoid.com/76961-thickbox_default/msi-meg-z590-ace-wifi.jpg",
                  name: "Third image",
                  description: "Third description"
            }
      ]

      return (
            <>
                  <Carousel images={carouselImages} />       
            </>
      )
}
