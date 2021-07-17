import React from 'react'
// import { MaterialUI } from '../../components/MaterialUI/MaterialUI'
import './MaterialUI.css'
import {Card} from '../../components/MaterialUI/index'

export default function MaterialUI() {
  return (
    <div className="material-viewContainer">

        <Card
          title="Yo"
          subtitle="Just a simple greeting"
          text="Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit.
                    Non perspiciatis officiis tempora."
        />

    </div>
  )
}


