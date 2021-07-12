import React from 'react';
import './index.css'

const Glassmorphism = () => {

  const styles = {
    div: {
      backgroundColor:' #4158D0',
      backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'

    },
    glassContainer: {
      width: '100vw',
      height: '100vh',
      backgroundColor:' #4158D0',
      backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
    },
    h1: {
      textAlign: 'center',
      // paddingBottom: '12px'
    },
    exampleBox: {
      backgroundImage: 'url("https://i.pinimg.com/originals/75/54/06/755406708046e446afdda37ab494fc6d.png")'

    },
  }
	return (
		<div style={styles.div}>
      <h1 style={styles.h1}>GLASSMORPHISM</h1>
			<div className="glassContainer" style={styles.glassContainer}>
				<div className="descriptionBox">
					<div className="card" style={styles.card}>
            <div className="card-img">
              <img src="https://i.pinimg.com/750x/1c/4d/86/1c4d86c2964fdec5b7c07a49869b7487.jpg" alt="shiba meme"></img>
            </div>
            <div className="desc">
              <h6 className="primary-text">Chonky Doge</h6>
              <h6 className="secondary-text">CEO of Doge Coin</h6>
            </div>
            <button className="primary-text view-doge-btn">View Doge</button>
            <div className="details">
              <div className="rating">
                <h6 className="primary-text">100%</h6>
                <h6 className="secondary-text">Fluffs Rating</h6>
              </div>
              <div className="activity">
                <h6 className="primary-text">85%</h6>
                <h6 className="secondary-text">Bork Activity </h6>
              </div>
            </div>
          </div>
					<p />
					<div className="exampleBox">{/* insert example picture of neumorphism */}</div>
				</div>
			</div>
		</div>
	);
};

export default Glassmorphism;
