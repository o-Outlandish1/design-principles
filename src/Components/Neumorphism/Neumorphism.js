import React from 'react';
import './index.css';

const Neumorphism = () => {
  const styles = {
    neuContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '22px',
      backgroundColor: '#dde1e7'
    },
    div: {
      backgroundColor: '#dde1e7'
    },
    h1: {
      textAlign: 'center'
    },
    exampleBox: {
      width: '50vw',
      height: '500px',
      backgroundImage: "url('https://miro.medium.com/max/2000/1*V-C9NqCL-a6d_ulZnmFDAA.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
  };

  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>NEUMORPHISM</h1>
      <div className="neuContainer" style={styles.neuContainer}>
        <div className="descriptionBox" style={styles.descriptionBox} />
        {/* login information here */}
        <div className="login-div">
          <div className="logo" />
          <div className="title">Web Development</div>
          <div className="sub-title">Made Easy!</div>
          <div className="fields">
            <div className="username">
              <input type="username" className="user-input" placeholder="username" />
            </div>
            <div className="password">
              <input type="password" className="pass-input" placeholder="password" />
            </div>
          </div>
          <button className="signinButton">Login</button>
          <div className="link">
            <a href="#"> Forgot Passsword</a> or <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neumorphism;
