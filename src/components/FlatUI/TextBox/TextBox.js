import React from 'react';
import './TextBox.css';

export default function TextBox() {

  return (
    <div className='textbox-container'>
      <div className='blurb-container'>
        <p className='blurb'>
          a design approach that emphasizes usability – if an aspect serves no functional
          purpose, it’s seen as a distraction for the user.
        </p>
        <p className='blurb'>
          efficient load time. responsive ready design that embraces screen size
          limitations and works within the parameters.
        </p>
        <p className='blurb'>
          embraces screen size limitations and works within the parameters.
        </p>
      </div>

      <div className='header-container'>
        <h1 className='header-span'>SOPHISTICATED</h1>
        <h1 className='header-span'>VERSATILE</h1>
        <h1 className='header-span'>MODERN</h1>
      </div>

    </div>
  );
}
