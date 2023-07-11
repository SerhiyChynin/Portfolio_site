import React from 'react'
import { work_process } from '../../constants/data';
import './WorkProcess.css';

function WorkProcess() {
  return (
      <div className='workprocess section-p bg-white' id='workprocess'>
      <div className="container">
        <div className="workprocess-content">
          <div className="section-title">
            <h3 className="text-brown">working <span className='text-dark'>process</span></h3>
            <p className="text">I order the right solutions to your digital business.</p>
          </div>

          <div className="workprocess-list">
            {
              work_process.map((item, index) => {
                return (
                  <div className="workprocess-item text-center" key={index}>
                    <div className="workprocess-item-title flex">
                      <span className="text-brown fw-7">0{index + 1} </span>
                      <h3 className="text-dark fw-5">{item.title}</h3>
                    </div>
                    <p className="text">{ item.paragraph}</p>
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

export default WorkProcess