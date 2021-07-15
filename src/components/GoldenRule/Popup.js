import React from 'react'
import "./Popup.css"

const Popup = ({show, setShow}) => {
    return (
        <>
        {show == true ? 
        <div className="popup">
            <div className="popup-img">
                <img src="https://i0.wp.com/www.zekagraphic.com/wp-content/uploads/2021/03/Golden-Ratio-In-Logo-Design-Examples.jpg?fit=1600%2C800&ssl=1" alt=""/>
            </div>
            <div className="popup-text">
                <h2>Golden Ratio in Typography</h2>
                <p>You can use the golden ratio for different sized Typography
                to create great looking font hierarchies</p>
                <h2 className="20-header">This is a 20px header</h2>
                <p>If your body content is 12px like this sentence. Multiply 12 x 1.618 to get
                    19.5 and round up to 20px for your header/subheader like the header above</p>
                <button onClick={setShow} className="popup-close-btn">Close</button>
            </div>
        </div> 
        : null
        }
        </>
    )
}

export default Popup
