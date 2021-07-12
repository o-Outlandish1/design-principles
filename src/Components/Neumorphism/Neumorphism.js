import React from 'react';
import './index.css';

const Neumorphism = () => {
	const styles = {
		neuContainer   : {
			display         : 'flex',
			justifyContent  : 'flex-end',
			// alignItems: 'center',
			// flexFlow: 'column wrap',
			margin          : '22px',
			backgroundColor : '#dde1e7'
		},
		div            : {
			backgroundColor : '#dde1e7'
		},
		// descriptionBox: {
		//   display: 'flex',
		//   flexFlow: 'column wrap',
		//   textAlign: 'center',
		//   // border: 'black solid 2px',
		//   alignItems: 'center',
		// },
		h1             : {
			// border: '2px black solid',
			textAlign : 'center'
		},
		exampleBox     : {
			// border: '2px black solid',
			width              : '50vw',
			height             : '500px',
			backgroundImage    : "url('https://miro.medium.com/max/2000/1*V-C9NqCL-a6d_ulZnmFDAA.png')",
			backgroundRepeat   : 'no-repeat',
			backgroundPosition : 'center',
			backgroundSize     : 'cover'
		},
		imageContainer : {
			display        : 'flex',
			justifyContent : 'center'
			// paddingTop     : '25px',
		}
	};

	return (
		<div style={styles.div}>
			<h1 style={styles.h1}>NEUMORPHISM</h1>
			<div className="neuContainer" style={styles.neuContainer}>
				<div className="descriptionBox" style={styles.descriptionBox} />
				{/* login information here */}
				<div className="login-div">
					<div className="logo"></div>
            <div className="title">Web Development</div>
            <div className="sub-title">Made Easy!</div>
           <div className="fields">
             <div className="username">
             <input type="username" className="user-input" placeholder="username"></input>
             </div>
             <div className="password">
               <input type="password" className="pass-input" placeholder="password"></input>
             </div>
           </div>
           <button className="signin-btn">Login</button>
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
