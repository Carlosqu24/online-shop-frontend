import React from 'react'

import './Carousel.css'

import { Carousel as CarouselComponent } from 'react-bootstrap'

export const Carousel = ({ images }) => {
      return (
            <>
                  <CarouselComponent interval={1000}>
                        {
                              images.map(({ _id, description, name, imageURL }) => (
                                    <CarouselComponent.Item key={_id} className="bg-dark">
                                          <img
                                                className="carousel__img"
                                                src={imageURL}
                                                alt={name}
                                          />
                                          <CarouselComponent.Caption >
                                                <h3 className="text-white">{name}</h3>
                                                <p className="text-white">{description}</p>
                                          </CarouselComponent.Caption>
                                    </CarouselComponent.Item>
                              ))
                        }
                  </CarouselComponent>
            </>
      )
}
