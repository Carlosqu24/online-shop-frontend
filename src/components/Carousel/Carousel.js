import React from 'react'

import './Carousel.css'

import { Carousel as CarouselComponent } from 'react-bootstrap'

export const Carousel = ({ images }) => {
      return (
            <>
                  <CarouselComponent interval={1000}>
                        {
                              images.map(({ id, description, name, url }) => (
                                    <CarouselComponent.Item key={id} className="bg-dark">
                                          <img
                                                className="carousel__img"
                                                src={url}
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
