import React, {useState} from 'react';
import './carousel.css'
import {images} from '../../Helper/CarouselData'

const Carousel = () => {

  const [currentImg, setCurrentImg] = useState(0)
  return (
    <div>
      <div className="carousel-container">
       <div className="carousel">
         <div className="carouselInner">
           {/* <img src={images[currentImg].img} /> */}
         </div>
       </div>
      </div>
    </div>
  );
};

export default Carousel;