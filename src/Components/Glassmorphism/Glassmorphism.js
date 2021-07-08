import React from 'react';
import './index.css'

const Glassmorphism = () => {

  const styles = {
    glassContainer: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'lightblue'
    },
    descriptionBox: {

    },
    h1: {

    },
    exampleBox: {
      backgroundImage: 'url("https://i.pinimg.com/originals/75/54/06/755406708046e446afdda37ab494fc6d.png")'

    },
    glassButton: {

    }
  }
	return (
		<div>
			<div className="glassContainer">
				<div className="descriptionBox">
					<h1>GLASSMORPHISM</h1>
					<p />
					<div className="exampleBox">{/* insert example picture of neumorphism */}</div>
				</div>
				<button className="glassButton1">Button 1</button>
				<button className="glassButton2">Button 2</button>
			</div>
		</div>
	);
};

export default Glassmorphism;
