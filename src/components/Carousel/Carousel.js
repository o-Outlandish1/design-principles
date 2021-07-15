import React, {useState} from 'react';
import './carousel.css'
import {images} from '../../Helper/CarouselData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0)
  const styles = {
    carouselPic: {
      backgroundImage: `url(${images[currentImg].img})`
    },
    arrows:{
      fontSize: '30px',
    },
    h1:{
      fontSize: '2rem',
      backgroundColor: 'rgb(255, 255, 255, 0.8)',
      padding: '10px',
      borderRadius: '9px'
    },
    p:{
      fontSize: '1rem',
      backgroundColor: 'rgb(255, 255, 255, 0.8)',
      padding: '10px',
      borderRadius: '9px'
    }
  }

  return (
    <div>
      <div className="carousel-container">
       <div className="carousel">
         <div className="carouselInner" style={styles.carouselPic}>
           <div className="left">
             <ArrowBackIosIcon style={styles.arrow}
             onClick={() =>{
               currentImg > 0 && setCurrentImg(currentImg - 1)
             }}
             />
           </div>
           <div className="center">
             <h1 style={styles.h1}>{images[currentImg].title}</h1>
             <p style={styles.p}>{images[currentImg].subtitle}</p>
           </div>
           <div className="right">
           <ArrowForwardIosIcon style={styles.arrow}
             onClick={() =>{
              currentImg < images.length - 1 && setCurrentImg(currentImg + 1)
            }}
            />
           </div>
         </div>
       </div>
      </div>
    </div>
  );
};

export default Carousel;