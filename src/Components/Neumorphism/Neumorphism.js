import React from 'react';
import './index.css'

const Neumorphism = () => {

  const styles = {
    neuContainer: {
      display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // flexFlow: 'column wrap',
      margin: '22px',
      backgroundColor: '#dde1e7'
    },
    div: {
      backgroundColor: '#dde1e7',
    },
    descriptionBox: {
      display: 'flex',
      flexFlow: 'column wrap',
      textAlign: 'center',
      // border: 'black solid 2px',
      alignItems: 'center',
    },
    h1: {
      // border: '2px black solid',
      textAlign: 'center',
    },
    exampleBox: {
      // border: '2px black solid',
      width: "50vw",
      height: '500px',
      backgroundImage: "url('https://miro.medium.com/max/2000/1*V-C9NqCL-a6d_ulZnmFDAA.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    neuButton: {
      background: '#dde1e7',
      width: '10em',
      height: '10em',
      // fontSize: '14px',
      borderRadius: '20px',
      boxShadow: ' 6px 6px 6px #cbced1, -6px -6px 6px white',
      border: 'none',
      color: 'dark-grey',
      margin:'15px',
    },
    neuButton2: {
      background: '#dde1e7',
      width: '10em',
      height: '10em',
      // fontSize: '14px',
      borderRadius: '20px',
      boxShadow: ' inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
      border: 'none',
      color: 'dark-grey',
    },
    neuButton3: {
      background: '#dde1e7',
      width: '10em',
      height: '10em',
      // fontSize: '14px',
      borderRadius: '50px',
      boxShadow: '  6px 6px 6px #cbced1, -6px -6px 6px white',
      border: 'none',
      color: 'dark-grey',
      margin:'15px',
    },
    innerCircle: {
      height: '50px',
      width: '50px',
      marginLeft: '30px',
      borderRadius: '50px',
      boxShadow: ' inset 6px 6px 6px #cbced1, inset -6px -6px 6px white',
      border: 'none',
      color: 'dark-grey',  
    },
    imageContainer : {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '25px'
    }
  }

  return (
    <div style={styles.div}>
          <h1 style={styles.h1}>NEUMORPHISM</h1>
      <div className="neuContainer" style={styles.neuContainer}>
        <div className="descriptionBox" style={styles.descriptionBox}>
          <p>Neumorphism,  A user interface style that is characterized by flat design, combined with soft shadows and highlights.</p>
        <button className="neuButton1" style={styles.neuButton}>
          <div className="innerCircle" style={styles.innerCircle}></div>
        </button>
        <button className="neuButton1" style={styles.neuButton2}></button>
        <button className="neuButton1" style={styles.neuButton3}></button>
        {/* <button className="neuButton2">Button 2</button> */}
      </div>
          <div className="imageContainer" style={styles.imageContainer}>
          <div className="exampleBox" style={styles.exampleBox}>
            {/* insert example picture of neumorphism */}
          </div>
          </div>
        </div>
    </div>
  );
};

export default Neumorphism;