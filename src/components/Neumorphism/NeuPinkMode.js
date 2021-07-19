import React from 'react';
import './pink.css';

const NeuPinkMode = () => {

  const styles = {
    div: {
      backgroundColor: 'rgba(176, 117, 124, 1)'
    },
    pinkMode: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#171717',
      height: '100%',
      width: '100%'
    },
    h1: {
      textAlign: 'center',
      margin: '0',
      // color:'white',
    },
  }
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Pink Mode</h1>
      <div className="twitter-container" style={styles.neuContainer}>
        <div className="head"></div>
        <div className="body"></div>
        <div className="body-none"></div>
        <div className="beak-bottom"></div>
        <div className="beak-bottom-none"></div>
        <div className="wing-bottom"></div>
        <div className="wing-bottom-none"></div>
        <div className="wing-middle"></div>
        <div className="wing-middle-none"></div>
        <div className="wing-top"></div>
        <div className="wing-top-none"></div>
        <div className="beak-top"></div>
        <div className="beak-top-none"></div>
      </div>
    </div>
  );
};

export default NeuPinkMode;