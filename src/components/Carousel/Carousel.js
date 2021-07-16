import React, {useState} from 'react';
import './carousel.css'
import {images} from '../../Helper/CarouselData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ({slides}) => {
 
  const [currentImg, seCurrentImg] = useState(0)
  const length = images.length
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" 
      //onClick={prevSlide}
       />
      <FaArrowAltCircleRight className="right-arrow" 
      //onClick={nextSlide}
       />
     {images.map((slide, index) =>{
       return (
         <img src={slide.img} alt="Team 2 pics and memes" />
       )
     })}
    </section>
  );
};

export default Carousel;