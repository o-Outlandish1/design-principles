import React, {useState} from 'react';
import './carousel.css'
import {images} from '../../Helper/CarouselData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Carousel = ({slides}) => {
 
  const [currentImg, setCurrentImg] = useState(0)
  const length = images.length

  if(!Array.isArray(images) || images.length <= 0){
    return null
  }

  const nextSlide = () =>{
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const prevSlide = () =>{
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  const styles = {
    header:{
      textAlign: 'center',
      fontSize: '3rem',
      wordSpacing: '10px'
    }
  }

  return (
    <>
    <div className="carouselHeader" style={styles.header}>
      Meet Team 3!
    </div>
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" 
      onClick={prevSlide}
       />
      <FaArrowAltCircleRight className="right-arrow" 
      onClick={nextSlide}
       />
     {images.map((slide, index) =>{
       return (
         <div className={index === currentImg ? 'active slide' : 'slide'} key={index}>
           {index === currentImg && ( 
           <img src={slide.img} alt="Team 2 pics and memes" className="images"/>
           )}
         </div>
         )
     })}
    </section>
    </>
  );
};

export default Carousel;