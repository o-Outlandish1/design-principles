import React from "react";

const Flayout = () => {
  const styles = {
    body: {
      backgroundColor: "black",
      height: "100vh",
    },
    nav: {
      color: "white",
      marginTop: "0",
      paddingTop: "2rem",
    },
    content: {
      display: "flex",
      alignItems: "center",
      height: "30%",
      justifyContent: "space-between",
      marginLeft: "12rem",
      marginRight: "12rem",
    },
    title: {
      color: "white",
      backgroundColor: "black",
      fontSize: "xxx-large",
    },
    image: {
      color: "white",
      fontSize: "xx-large",
      height: "10rem",
      width: "10rem",
      justifyContent: "center",
    },
    cta: {
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "5rem",
      marginLeft: "12rem",
      marginRight: "12rem",
    },
    aside: {
      color: "white",
      fontSize: "large",
      width: "40%",
      backgroundColor: "gray",
      textAlign: "left",
    },
    form: {
      display: "flex",
      color: "white",
      flexFlow: "column",
      justifyContent: "space-around",
      border: ".2rem solid white",
    },
    bttn: {
      backgroundColor: "orange",
      border: "none",
      borderRadius: ".75rem",
      cursor: "pointer",
      fontSize: "1.5rem",
    },
  };

  return (
    <div style={styles.body}>
      <h2 style={styles.nav}>Backpack Company</h2>
      <div style={styles.content}>
        <div>
          <p style={styles.title}>BEST BACKPACKS EVER!</p>
        </div>
        <div>
          <p style={styles.image}>Backpack Image</p>
        </div>
      </div>
      <div style={styles.cta}>
        <aside style={styles.aside}>
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
        </aside>
        <form style={styles.form}>
          <p>Order Now!!</p>
          <div>
            <label>Name:</label>
            <input
              className="form-input"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              className="form-input"
              name="email"
              type="email"
              placeholder="Enter your email address"
              maxlength="256"
              required
            />
          </div>

          <div>
            <label>Order:</label>
            <input
              className="form-input"
              name="email"
              type="email"
              placeholder="Enter your email address"
              maxlength="256"
              required
            />
          </div>

          <input
            style={styles.bttn}
            className="form-submit"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Flayout;
