import React from 'react'
import './MaterialUI.css'
import {Card} from '../../components/MaterialUI/index'


export default function MaterialUI() {
  return (
    <div className="material-viewContainer">

        <Card
          title="Yo"
          subtitle="Just a simple subtitle"
          text="With with a nonsense blurb...
                    lorem ipsum, dolor sit amet
                    consectetur adipisicing elit."
        />

    </div>
  )
}


