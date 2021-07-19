import React from "react";
import './Zlayout.css';
import backpack from "./assets/backpack.png";
import ibackpack from './assets/ibackpack.svg';

const Zlayout = () => {
  const styles = {
    body: {
      backgroundColor: "lightgray",
      height: "93vh",
      fontFamily: "helvetica"
    },
    logos: {
      marginLeft: "1rem",
      paddingTop: "1rem",
      display: "flex",
      fontWeight: "bold",
    },
    logo: {
      height: "4rem",
      width: "4rem",
      paddingRight: "5px"
    },
    title: {
      fontSize: "2rem"
    },
    banner: {
      fontSize: "xx-large",
      fontWeight: "bolder",
    },
    content: {
      display: "flex",
      height: "30%",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "3.5rem",
      marginRight: "3.5rem",
    },
    image: {
      height: "10rem",
      width: "10rem",
    },
    cta: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "3.5rem",
      marginLeft: "3.5rem",
      marginRight: "3.5rem",
    },
    aside: {
      fontSize: "large",
      width: "50%",
      textAlign: "left",
    },
    form: {
      border: "solid 5px black",
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between"
    },
    bttn: {
      backgroundColor: "orange",
      border: "none",
      borderRadius: ".75rem",
      cursor: "pointer",
      fontSize: "1.5rem",
      marginBottom: "1.5rem"
    },
    photo: {
      height: "15rem",
      width: "15rem",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.logos}>
        <img style={styles.logo} src={ibackpack} alt="backpack"/>
        <p style={styles.title}>Bags-R-Us</p>
      </div>
      <div style={styles.content}>
        <div>
          <p style={styles.banner} >BEST BACKPACKS EVER!</p>
        </div>
        <div>
          <img style={styles.photo} src={backpack} alt="backpack" />
        </div>
      </div>
      <div style={styles.cta}>
        <aside style={styles.aside}>
          <ul>
            <li>
              We have the best backpacks for every single occasion possible! 
            </li>
            <br/>
            <li>
              Going back to school? Going camping? Or, check this out... maybe you
              just want to replace your wallet with a backpack?
            </li>
            <br/>
            <li>
              We have all the colors, sizes, and materials; plastic, leather, rubber, anything. <br />
            </li>
            <br/>
            <li>
              I promise. We got you. So please come check us out, I promise we
          deliver.
            </li>
          </ul>
        </aside>
        
        {/* <div style={styles.form} className='formmm'>
          <p>ORDER NOW!</p>
          <input type='text' style={styles.form_input} className='form_input'/>
          <label style={styles.form_label} className='form_label'>Email</label>
          <input type='text' style={styles.form_input} className=''/>
          <label style={styles.form_label} className=''>Name</label>
        </div> */}

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

export default Zlayout;
