import React from 'react'
import './Card.css'
import ImagePlaceHolder from '../../../Images/ImagePlaceHolder.png'

export default function Card(props) {

  return (
    <div className="material-card-container">

      <div className="material-img">o.O</div>


      <div className="material-card-content">
      <h1 className="material-title">{props.title}</h1>
      <h4 className="material-subtitle">{props.subtitle}</h4>
      <p className="material-card-text">{props.text}</p>
      <button id="material-button"> </button>
      </div>
    </div>
  )
}
