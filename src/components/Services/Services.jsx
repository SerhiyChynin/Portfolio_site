import React from 'react';
import './Services';
import { services } from '../../constants/data';

export const Services = () => {
  return (
      <div className='services section-p' id='services'>
          <div className="container">
              <div className="services-content">
                  <div className="section-title">
                      <h3 className="text-brown">my <span className='text-dark'>services</span></h3>
                      <p className="text">I offer the right solutions foy your digital business.</p>
                  </div>
                  <div className="services-list grid">
                      {
                          services.map((item, index) => {
                              return (
                                  <div className="services-item text-center" key={index}>
                                      <div className="services-item-img">
                                          <img src={item.image} className='mx-auto' />
                                      </div>
                                      <div className="services-item-text">
                                          <h4 className='fs-22 fw-5 op-08'>
                                              {item.title}
                                          </h4>
                                          <p className='text mx-auto'>
                                              {item.paragraph}
                                          </p>
                                      </div>
                                  </div>
                              )
                          })
                      }
                  </div>
              </div>
          </div>
    </div>
  )
}
