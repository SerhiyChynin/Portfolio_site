import React, {useState} from 'react';
import './Newsletter.css';

const Newsletter = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
      <div className='newsletter section-p'>
          <div className="container">
              <div className="workprocess-content">
                  <div className="section-title">
                      <h3 className="text-brown">subscribe <span className='text-white'>to newsletter</span></h3>
                  </div>

                  <form className='newsletter-form mx-auto' onSubmit={handleSubmit} action="">
                      <div className="form-elem">
                          <input type="text" value={formData.name}
                              className='form-control'
                              placeholder='Name'
                              onChange={handleChange} id='name' />
                          
                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Newsletter