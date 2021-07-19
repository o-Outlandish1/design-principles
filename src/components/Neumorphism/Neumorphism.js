import React, {useState} from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Neumorphism = ({history}) => {

  const styles = {
    neuContainer: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#171717',
      height: '100%',
      width: '100%'
    },
    div: {
      backgroundColor: '#171717'
    },
    h1: {
      textAlign: 'center',
      margin: '0',
      color:'white',
    },
    button:{
      padding: '11px 57px',
      margin: '2.5em 0px 0px 0.8em',
      borderRadius: '20px',
      backgroundColor: '#171717',
      color: 'white',
      border: 'none',
      boxShadow:'  17px 17px 40px #090909,  -19px -19px 21px #252525',
      fontSize: '20px'
    }
  };
// note to self when button clicked INSET the shadow to be like you are abut to click on it


  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>NEUMORPHISM</h1>
      <div className="neuContainer" style={styles.neuContainer}>
        <div className="dark-mode-container" style={styles.darkMode}>
          <div className="ig-logo-bg">
            <div className="logo">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;
