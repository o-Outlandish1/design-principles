import React from 'react'
import {useState} from "react"

import "./GeneralPrinciple.css"

const GeneralPrinciple = () => {
    const [toggleButton, setToggleButton] = useState(0)

    const selectButton = (index) => {
        setToggleButton(index)
    }

    return (
        <div className="general-principles">
            <aside className="general-sidebar">
                <button className="general-btns" onClick={() => selectButton(1)} >Make Life Easy</button>
                <button className="general-btns" onClick={() => selectButton(2)}>Clear and Simple</button>
                <button className="general-btns" onClick={() => selectButton(3)}>Consistancy</button>
                <button className="general-btns" onClick={() => selectButton(4)}>Visible</button>
                <button className="general-btns" onClick={() => selectButton(5)}>Design</button>
            </aside>
            <div className="general-main">
                <div className="general-content">
                <h1>General UI Principles</h1>
                    <div className={toggleButton === 0 ? "active-content" : "content"}>
                        <h3>Select a principle from the left</h3>
                    </div>
                    <div className={toggleButton === 1 ? "active-content" : "content"}>
                            <h1>Make Life Easy</h1>
                            <p>Most UI principles boil down to making life easier on the user.
                            Making navigation easy and natural for the user avoids confusion and mistakes.
                            Understanding what the user wants and needs is key.
                            </p>
                            <p>Interviewing your audience when possible to learn who they are and 
                                what they prefer will help a lot. Learn about human centered design
                                and focus on people first, design second.
                            </p>
                    </div>
                    <div className={toggleButton === 2 ? "active-content" : "content"}>
                            <h1>Clear and Simple</h1>
                            
                    </div>
                    <div className={toggleButton === 3 ? "active-content" : "content"}>
                            <h1>Consistency</h1>
                    </div>
                    <div className={toggleButton === 4 ? "active-content" : "content"}>
                            <h1>Visible</h1>
                    </div>
                    <div className={toggleButton === 5 ? "active-content" : "content"}>
                            <h1>Design</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralPrinciple
