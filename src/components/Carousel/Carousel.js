import React from 'react'

import './Carousel.css'

import { Carousel as CarouselComponent } from 'react-bootstrap'

export const Carousel = ({ images }) => {
      return (
            <>
                  <CarouselComponent interval={1000}>
                        {
                              images.map(({ description, name, url }) => (
                                    <CarouselComponent.Item>
                                          <img
                                                className="carousel__img"
                                                src={url}
                                                alt={name}
                                          />
                                          <CarouselComponent.Caption>
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                          </CarouselComponent.Caption>
                                    </CarouselComponent.Item>
                              ))
                        }
                  </CarouselComponent>
            </>
      )
}
