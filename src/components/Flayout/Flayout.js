import React from "react";
import backpack from "./assets/backpack.png";

const Flayout = () => {
  const styles = {
    body: {
      backgroundColor: "black",
      height: "100vh",
    },
    nav: {
      color: "white",
      display: "flex",
      marginTop: "0",
      paddingTop: "2rem",
      justifyContent: "space-between",
      fontSize: "xx-large",
      fontWeight: "bold",
      marginLeft: "3.5rem",
      marginRight: "3.5rem",
    },
    content: {
      color: "white",
      display: "flex",
      marginLeft: "3.5rem",
      marginTop: "2rem",
      marginRight: "3.5rem",
    },
    aside: {
      textAlign: "left",
      marginTop: "4rem",
    },
    photo: {
      height: "20rem",
      width: "20rem",
    },
    bttn: {
      backgroundColor: "orange",
      display: "flex",
      border: "none",
      borderRadius: ".75rem",
      cursor: "pointer",
      fontSize: "1.5rem",
      marginLeft: "3.5rem",
    },
  };

  return (
    <div style={styles.body}>
      <nav style={styles.nav}>
        <p>Backpack Company</p>
        <p>Call 1-800-BACKPACK</p>
      </nav>
      <div style={styles.content}>
        <div style={styles.aside}>
          We have the best backpacks for every single occasion possible! <br />
          <br />
          Going back to school? Going camping? Or, check this out... maybe you
          just want to replace your wallet with a backpack? Boy do we got you.
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
        <input style={styles.bttn} type="submit" value="Check Us Out!" />
      </div>
    </div>
  );
};

export default Flayout;
