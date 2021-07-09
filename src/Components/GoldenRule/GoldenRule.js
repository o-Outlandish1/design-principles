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
