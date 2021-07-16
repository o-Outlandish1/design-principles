import React from 'react';
import './index.css';

const Neumorphism = () => {
  const styles = {
    neuContainer: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      height: '100%',
      width: '100%'
    },
    div: {
      backgroundColor: '#0a0a0a'
    },
    h1: {
      textAlign: 'center',
      margin: '0',
      color:'white',
    },
    button:{
      background: 'white',
      padding: '22px',
      margin: '2em 0 0 5em',
    }
  };

  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>NEUMORPHISM</h1>
      <div className="neuContainer" style={styles.neuContainer}>
        <div className="dark-mode-container" style={styles.darkMode}>
          <div className="ig-logo-bg">
            <div className="logo">
            </div>
          </div>
            <button style={styles.button} className="TwitterButton">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;
