import React, {useRef, useState} from 'react';
import './About.css';
import images from '../../constants/images';
import { about_stats } from '../../constants/data';
import video  from '../../assets/videos/video.mp4';
import { FaPlay } from 'react-icons/fa';

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = (e) => {
        setToggleVideo(!toggleVideo);
        if (toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }
  return (
      <div className='about section-p'>
          <div className="container">
              <div className="about-content">
                  <div className="about-grid grid">
                    <img src={images.About_Alex} alt="" className='about-img mx-auto' />
                      <div className="section-title">
                          <h3 className="text-brown">I'm <span className='text-dark'>Serhii</span></h3>
                          <p className="text mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                              Tenetur tempore consequatur, quisquam eveniet porro a,
                              corporis iusto voluptatem delectus libero assumenda labore
                              veritatis repudiandae eius dicta, rerum ut. Fuga, eligendi!</p>
                    </div>
                  </div>

                  <div className="about-grid grid">
                      {
                          about_stats.map((item, index) => {
                              return (
                                  <div className='about-item text-center flex' key={index}>
                                      <div className='about-item-icon'>
                                          <img src={item.image} alt="" />
                                      </div>
                                      <div className="about-item-text text-left">
                                          <h3 className="fs-24 ls-2">{item.value}</h3>
                                          <p className="text">{item.title }</p>
                                      </div>
                                  </div>
                              )
                          })
                      }
                  </div>
                  <div className='about-grid grid'>
                      <div className="section-title">
                          <h3 className="text-brown">Video <span
                              className="text-dark">Presentation</span>
                          </h3>
                          <p className="text mx-auto">Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Unde, laboriosam nobis!
                              Perferendis sit a aliquid nam similique.
                              Quaerat eaque velit blanditiis enim a iusto laborum?
                          </p>   
                      </div>

                      <div className="about-video">
                          <video className="about-video" autoPlay loop ref={vidRef}>
                              <source src={video} type='video/mp4' />
                          </video>
                          <button type='button' className='vidPlayBtn flex flex-c' onClick={playVideo}>
                              <FaPlay className='text-brown' size={28}/>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About