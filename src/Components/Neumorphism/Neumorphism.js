import React from 'react';
import './index.css'

const Neumorphism = () => {

  const styles = {
    neuContainer: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'lightblue'
    },
    descriptionBox: {

    },
    h1: {

    },
    exampleBox: {
      width: '300px',
      height: '300px',
      backgroundImage: 'url("https://assets.justinmind.com/wp-content/uploads/2020/04/what-is-neumorphism.png")'
    },
    glassButton: {
      
    }
  }

  return (
    <div>
      <div className="neuContainer">
        <div className="descriptionBox">
          <h1>NEUMORPHISM</h1>
          <p></p>
          <div className="exampleBox">
            {/* insert example picture of neumorphism */}
          </div>
        </div>
        <button className="neuButton1">Button 1</button>
        <button className="neuButton2">Button 2</button>
      </div>
    </div>
  );
};

export default Neumorphism;