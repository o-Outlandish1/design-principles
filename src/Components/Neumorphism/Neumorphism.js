import React from 'react';
import './index.css'

const Neumorphism = () => {

  const styles = {
    neuContainer: {
      display: 'flex',
      alignContent: 'space-around',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexFlow: 'column wrap',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'lightblue'
    },
    descriptionBox: {
      width: '20vw',
      height: '20vh',
      backgroundColor: 'white',
      borderRadius: '22px',
    },
    h1: {

    },
    exampleBox: {
      display: 'flex',
      border: '2px solid black',
      width: "50vw",
      height: '40vh',
      backgroundImage: 'url("https://assets.justinmind.com/wp-content/uploads/2020/04/neumorphism-ui-design.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    neuButton: {
      padding: "25px 42px",
      background: 'white',
      borderRadius: '20px',
      border: 'whitesmoke',
      boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",

    }
  }

  return (
    <div>
      <div className="neuContainer" style={styles.neuContainer}>
          <h1>NEUMORPHISM</h1>
        <div className="descriptionBox" style={styles.descriptionBox}>
          <p>Neumorphism,  A user interface style that is characterized by flat design, combined with soft shadows and highlights.</p>
        <button className="neuButton1" style={styles.neuButton}>Button 1</button>
        {/* <button className="neuButton2">Button 2</button> */}
      </div>
          <div className="imageContainer">
          {/* <div className="exampleBox" style={styles.exampleBox}> */}
            {/* insert example picture of neumorphism */}
          {/* </div> */}
          </div>
        </div>
    </div>
  );
};

export default Neumorphism;