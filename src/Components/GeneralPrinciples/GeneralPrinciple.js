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
                <button className="general-btns" onClick={() => selectButton(3)}>Consistency</button>
                <button className="general-btns" onClick={() => selectButton(4)}>Friendliness</button>
                <button className="general-btns" onClick={() => selectButton(5)}>Design</button>
            </aside>
            <div className="general-main">
                <div className="general-content">
                <h1 id="page-title">General UI Principles</h1>
                    <div className={toggleButton === 0 ? "active-content" : "content"}>
                        <h3 id="select-principle">Select a principle from the left</h3>
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
                            <p>Strive for clarity and purpose in your design and minimize actions/steps 
                                the user needs to take. Each page should have a primary focus and give the 
                                primary focus the most space on the page. Classics exist for a reason. They're
                                timeless and don't go out of style, but can benefit from modern touches.
                            </p>
                            
                    </div>
                    <div className={toggleButton === 3 ? "active-content" : "content"}>
                            <h1>Consistency</h1>
                            <p>Consistency in UI allows users to use existing knowledge in new tasks,
                                master new aspects faster, and focus on solving the problem, rather than 
                                waste time trying to figure out new controls and commands. Making things recognizable,
                                and predictable can only help the user and make them like using your app/site.

                            </p>
                    </div>
                    <div className={toggleButton === 4 ? "active-content" : "content"}>
                            <h1>Friendliness/Forgiveness</h1>
                            <p>Users learn by trial and error and the designer should think about this when
                                creating a site/app. Each action, step or stage of work for the user should only
                                bring up the appropriate options and feedback from the designer. Give the user an 
                                opportunity to cancel and correct their actions before locking them in.
                            </p> 
                            <p>
                                Take into mind that users will find ways to run into errors that you may have not
                                thought of at first. Be overly cautious about potential errors/problems the user may have.
                            </p>
                    </div>
                    <div className={toggleButton === 5 ? "active-content" : "content"}>
                            <h1>Design Tips</h1>
                            <h2>Transparency</h2>
                            <p>It's easy and can be fun/tempting to go overboard and add unnecessary
                                layers to the screen such ass extra buttons, graphics, options, windows etc.
                                This can sometimes add too much to the user's plate and distract from direct control 
                                and naturalness.
                            </p>
                            <h2>Visual Hierarchy</h2>
                            <p>A strong visual hierarchy in your design really helps the user understand the order
                                the elements on the screen should be viewed. It allows you to direct the user through 
                                the sequence/actions they can or should be taking from one element to another. Without 
                                this, the interface looks overloaded, messy and confusing.
                            </p>
                            <h2>Step-by-step Information Flow</h2>
                            <p>Show only the necessary information on the screen. When the user has to make a choice 
                                provide enough information for them to make the decision they want to and move on to the next.
                                Details should associate with the current choice the user is making, don't include 
                                too many details at once and give them gradually.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralPrinciple
