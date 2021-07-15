import React from "react"
import { Button, TextBox, Hero} from "../../components/FlatUI/index"
import "./FlatUI.css"

export default function FlatUI(){
    return (
      <div className="flex-container">
        <div className="box-left">
          <Hero/>
        </div>
        <div className="box-right">
          <TextBox/>
          {/* <Button/> */}
        </div>



      </div>
    )

  }
