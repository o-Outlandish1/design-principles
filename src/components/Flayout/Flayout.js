import React from "react";
import backpack from "./assets/backpack.png";
import ibackpack from './assets/ibackpack.svg';

const Flayout = () => {
  const styles = {
    body: {
      backgroundColor: "lightgray",
      height: "93vh",
      fontFamily: "helvetica"
    },
    nav: {
      color: "black",
      display: "flex",
      marginTop: "0",
      paddingTop: "2rem",
      justifyContent: "space-between",
      fontSize: "xx-large",
      fontWeight: "bold",
      marginLeft: "3.5rem",
      marginRight: "3.5rem",
    },
    logos: {
      display: "flex",
      marginTop: "1rem"
    },
    logo: {
      height: "4rem",
      width: "4rem",
      paddingRight: "5px"
    },
    title: {
      fontSize: "2rem"
    },
    content: {
      color: "black",
      display: "flex",
      marginLeft: "3.5rem",
      marginTop: "2rem",
      marginRight: "3.5rem",
    },
    aside: {
      textAlign: "left",
      marginTop: "3rem",
    },
    photo: {
      height: "18rem",
      width: "18rem",
      marginLeft: "7rem"
    },
    bttn: {
      backgroundColor: "orange",
      display: "flex",
      border: "none",
      borderRadius: ".75rem",
      cursor: "pointer",
      fontSize: "1.5rem",
      marginLeft: "3.5rem",
      padding: "1rem"
    },
  };

  return (
    <div style={styles.body}>
      <nav style={styles.nav}>
        <div style={styles.logos}>
          <img style={styles.logo} src={ibackpack} alt="backpack"/>
          <p style={styles.title}>Bags-R-Us</p>
        </div>
        <div>
          <p>Call 1-800-BACKPACK</p>
        </div>
        
      </nav>
      <div style={styles.content}>
        <div style={styles.aside}>
          We have the best backpacks for every single occasion possible! <br />
          <br />
          Going back to school? <br />
          <br />
          Going camping? Or maybe you
          just want to replace your wallet with a backpack?
          <br />
          <br />
          We have all the colors, sizes, and materials. <br />
          <br />
          We have plastic backpacks, leather backpacks, rubber backpacks;
          Literally anything, we can make it. <br />
          <br />I promise. We got you. So please come check us out, I promise we
          deliver.
        </div>
        <div>
          <img style={styles.photo} src={backpack} alt="backpack" />
        </div>
      </div>
      <div>
        <input style={styles.bttn} type="submit" value="Buy one Now!" />
      </div>
    </div>
  );
};

export default Flayout;
