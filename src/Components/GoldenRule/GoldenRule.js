import React from 'react'
import "./GoldenRule.css"

const GoldenRule = () => {

    return (
        <div class="golden-container">
            <div id="header" class="item a">
                <h1>GOLDEN RULE OF THIRDS</h1>
            </div>
            <div class="item b">
                <div className="golden-card">
                    <div className="golden-card-header">
                        <h3>Golden Ratio</h3>
                        <h4>1 : 1.618</h4>
                        <p id="golden-card-text">When you divide a line into two parts and the longer part (a) divided by the smaller part (b) is equal to the sum of (a) + (b) divided by (a), both equal 1.618.
                            The Golden ratio is seen often in nature. Shells, flowers, and many other objects
                            in nature have the golden ratio structure.
                        </p>
                    </div>
                    <div className="golden-crd-img">
                        <img id="fibonacci"src="https://4.bp.blogspot.com/-GHyA4b_EafQ/XHXwXPzYl3I/AAAAAAAAOa0/N37AkH-QYc8QhLj_u5dcZE3vBa-MI07bQCLcBGAs/s1600/Golden%2Bratio%2B-%2Bnautilus%2Bshell.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoldenRule
