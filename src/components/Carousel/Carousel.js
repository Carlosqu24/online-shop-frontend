import React from 'react'

export const Carousel = () => {
      return (
            <div id="carouselExampleIndicators" className="carousel slide bg-dark" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                        <div className="carousel-item active">
                              <img src="https://asset.msi.com/resize/image/global/product/product_9_20200312140855_5e69d1f7565ae.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" className="w-50 h-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                              <img src="https://asset.msi.com/resize/image/global/product/product_9_20190524160225_5ce7a511c314d.png62405b38c58fe0f07fcef2367d8a9ba1/380.png" className="w-50 h-50" alt="..."/>
                        </div>
                        <div className="carousel-item">
                              <img src="https://mystore.msi.com/wp-content/uploads/2021/11/ALPHA-15-B5EEK-1.png" className="w-50 h-50" alt="..."/>
                        </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                  </button>
            </div>
      )
}
