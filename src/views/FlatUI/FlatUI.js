import React from "react"
import { Button, TextBox, Hero} from "../../components/FlatUI/index"
import "./FlatUI.css"

const FlatUI = () => {
    return (
      // <div className="flex-container">

      //   <div className="hero-container">
      //     <Hero />
      //   </div>
      //   <div className="blurb-container">
      //       <TextBox className="textbox-component"/>
      //       <Button className="button-component"/>
      //   </div>

      // </div>

      <div className="flex-container">
        <Hero/>
        <TextBox/>
      </div>
    )

  }

export default FlatUI
