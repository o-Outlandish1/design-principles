import {React} from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className='container'>
        <button
          className='flatUiBtn'>
            Just a Button
          </button>
      </div>
    )
  }
}

