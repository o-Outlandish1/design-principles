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
        <div className="bird"></div>

       <ul class="wing">
         <li className="w1"></li>
         <li className="w2"></li>
         <li className="w3"></li>
       </ul>
       <ol class="beak">
         <li className="b1"></li>
         <li className="b2"></li>
         <li className="b3"></li>
       </ol>
      </div>
    </div>
  );
};

export default NeuPinkMode;