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
                <button className="general-btns" onClick={() => selectButton(2)}>Color</button>
                <button className="general-btns" onClick={() => selectButton(3)}>Contrast</button>
                <button className="general-btns" onClick={() => selectButton(4)}>Hierarchy</button>
                <button className="general-btns" onClick={() => selectButton(5)}>Negative Space</button>
                <button className="general-btns" onClick={() => selectButton(6)}>Clear and Simple</button>
                <button className="general-btns" onClick={() => selectButton(7)}>Consistency</button>
                <button className="general-btns" onClick={() => selectButton(8)}>Friendliness</button>
                <button className="general-btns" onClick={() => selectButton(9)}>Design Extras</button>
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
                            <div className="general-img">
                                <img className="image-img" src="https://static5.depositphotos.com/1001992/410/i/600/depositphotos_4101290-stock-photo-man-with-laptop-and-cup.jpg" alt="" />
                            </div>
                    </div>
                    <div className={toggleButton === 2 ? "active-content" : "content"}>
                            <h1>Color</h1>
                            <h2>Overall Theme/Mood/Brand</h2>
                            <p>Ask yourself what mood are you trying to achieve for the design. Are you trying to 
                                instill a specific brand element or story into the design? 
                            You don't always want to exaggerate the branding presence of company by using only 
                            and a lot of primary brand colors. Tone down the colors if it may distract from the user's 
                            actions. Companies like Google and FB are a good example.
                            </p>
                            <p>Color psychology can help visualize the mood of the design and be a reflection of the 
                                brand personality. Select a few colors as a starting palette and rearrange the colors
                                until the overall personality of the brand is visible, but not overdone.
                            </p>
                            <h2>Balance of Color Usage</h2>
                            <p> Providing the right amount of light and dark value and variation helps provide 
                                visual balance. Having a primary, secondary and tertiary color combo is suggested 
                                and can really help the aesthetics and importance of each component.
                            </p>
                            <p> In the interior design world, a 6-3-1 combo is often used and can help in the UI design world 
                                as well. It's accomplished by using a 60% + 30% + 10% proportion of your 3 colors to give balance 
                                with the primary being 60% secondary being 30% and tertiary being 10%. 
                            </p>
                            <div className="general-img">
                                <img className="image-img" src="https://londonimageinstitute.com/wp-content/uploads/2020/01/How-to-Empower-Yourself-with-Color-Psychology-Varying-Colors.jpg" alt="" />
                            </div>
                    </div>
                    <div className={toggleButton === 3 ? "active-content" : "content"}>
                        <h1>Contrast</h1>
                        <p>Our ability to quickly notice differences is what makes contrast powerful.
                            Contrast attracts attention and draws the eye naturally. By giving an element characteristics
                            that are visually different from those around it, we can create points of emphasis and interest.
                            It also creates boundaries, for example, contrasting the background color of the main content and that 
                            of the sidebar shows where one begins and the other ends.
                        </p>
                        <p>
                            Having text and other elements with a high contrast to it's background makes things 
                            easier to read and focus on.
                        </p>
                        <p>Using color prompts the users attention and attracts their attention to different areas. Be 
                            mindful of how you're using color contrast because it can be very informative or confusing.
                            Use one of the many color contrast tools online to test your design. Test your design,
                            make adjustments and focus on how to make the colors inform the user. 
                        </p>
                        <div className="general-img">
                            <img className="image-img" src="https://careerfoundry.com/en/wp-content/uploads/old-blog-uploads/xui-design-mistakes-7.jpg.pagespeed.ic.zBUTLFjeEz.jpg" alt="" className="contrast"/>
                        </div>
                        <div className="general-img">
                            <img className="image-img" src="https://careerfoundry.com/en/wp-content/uploads/old-blog-uploads/xui-design-mistakes-3.jpg.pagespeed.ic.2z474kJt4e.jpg" alt="" className="contrast"/>
                        </div>
                    </div>
                    <div className={toggleButton === 4 ? "active-content" : "content"}>
                            <h1>Hierarchy</h1>
                            <h2>Visual Hierarchy?</h2>
                            <p>Visual hierarchy is one of the core techniques which are applied to UI design.
                                It is initially based on Gestalt psychology theory. which examines users’ visual perception
                                of elements in relation to each other and shows how people tend to group the visual elements.
                                Having a good visual hierarchy by presenting the content in a way that users can easily comprehend 
                                the importance of each element. Organizing the components so the brain can distinguish the 
                                objects based on their size, color, contrast and style. 
                            </p>
                            <h2>Typographic Hierarchy</h2>
                            <p>Using contrast in the size of typography relays to the user what is more important 
                                and how to go about reading the content. having a good ratio between the size of headers, 
                                subheaders, body, actions elements, and captions. There's a primary, secondary, and tertiary 
                                level to typography just like with color. Another tip to keep in mind is that on smaller devices 
                                like phones, keeping it to two levels is recommended since there isn't enough screen size to account for three.
                            </p>
                            <div className="general-img">
                                <img className="image-img" src="https://uploads.toptal.io/blog/image/127525/toptal-blog-image-1541524165239-0eeb10a7bd644caca401a64a902b0269.png" alt="" />
                            </div>
                    </div>
                    <div className={toggleButton === 5 ? "active-content" : "content"}>
                            <h1>Negative Space</h1>
                            <p>Negative space or white space, is the area between elements in a design composition. Some designers don’t 
                                think of the white space as a component of design still the experts apply it as a useful tool 
                                helping to build an appropriate composition. A right amount of negative space between the elements will help users 
                                to better notice and perceive each of them individually and as a whole.
                            </p>
                            <p>Proximity of elements on the screen gives the user the ability to group elements
                                and categorize them. Dividing the content into subcategories and giving them appropriate space between 
                                helps this perception.
                            </p>
                            <div className="general-img">
                                <img className="image-img" src="https://miro.medium.com/max/2000/1*sHJcHO5FuqFsqxrhyqW5Bg.png" alt="" />
                            </div>
                    </div>
                    <div className={toggleButton === 6 ? "active-content" : "content"}>
                            <h1>Clear and Simple</h1>
                            <p>Strive for clarity and purpose in your design and minimize actions/steps 
                                the user needs to take. Each page should have a primary focus and give the 
                                primary focus the most space on the page. Classics exist for a reason. They're
                                timeless and don't go out of style, but can benefit from modern touches.
                            </p>
                            
                    </div>
                    <div className={toggleButton === 7 ? "active-content" : "content"}>
                            <h1>Consistency</h1>
                            <p>Consistency in UI allows users to use existing knowledge in new tasks,
                                master new aspects faster, and focus on solving the problem, rather than 
                                waste time trying to figure out new controls and commands. Making things recognizable,
                                and predictable can only help the user and make them like using your app/site.

                            </p>
                    </div>
                    <div className={toggleButton === 8 ? "active-content" : "content"}>
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
                            <div className="general-img">
                                <img src="https://miro.medium.com/max/1400/1*8vxEG0_9CBNboImHBhEP_w.png" alt="" className="image-img"/>
                            </div>
                    </div>
                    <div className={toggleButton === 9 ? "active-content" : "content"}>
                            <h1>Design Extras</h1>
                            <h2>Transparency</h2>
                            <p>It's easy and can be fun/tempting to go overboard and add unnecessary
                                layers to the screen such ass extra buttons, graphics, options, windows etc.
                                This can sometimes add too much to the user's plate and distract from direct control 
                                and naturalness.
                            </p>
                            <h2>Step-by-step Information Flow</h2>
                            <p>Show only the necessary information on the screen. When the user has to make a choice 
                                provide enough information for them to make the decision they want to and move on to the next.
                                Details should associate with the current choice the user is making, don't include 
                                too many details at once and give them gradually.
                            </p>
                            <div className="general-img">
                                <img className="image-img" src="https://designmodo.com/wp-content/uploads/2016/10/Checkout-Form.jpg" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralPrinciple
