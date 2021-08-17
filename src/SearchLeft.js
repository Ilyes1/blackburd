import React from 'react'
import './searchLeft.css'

function SearchLeft() {
    return (
        <div className="search-left">
            
            <div className="left-top">
            <h3>BlackBurd</h3>
            <div>critique <span id="orange">5</span></div>
            <div>important <span id="blue">12</span></div>
        </div>

        <div className="left-search">

            <div className="left-search-left">
                <div>Events</div>
                <div>List</div>
                <div>Map</div>
            </div>

            <div className="left-search-right">
                <input type="text" placeholder="Search cam" />
            </div>

        </div>

        <div className="left-stats">

            <div className="left-stats-left">
                <h3>Daily statistic</h3>
                <div className="stats-text">
                    <div className="toggle">
                        <div className="toggle-icon">
                            <div className="toggle-circle"></div>
                        </div>
                        <div className="toggle-text">
                            <span id="gray-text">last half an hour</span><br />
                            <span>all along</span>
                        </div>
                    </div>

                    <div className="stats-number">
                        <div className="number"><h1>31761</h1>ops</div>
                        <div className="number"><h1>2791</h1>opj</div>
                    </div>
                </div>
            </div>

        </div>

        <div className="line"></div>

        <div className="filters">

            <div className="filter">
                <h4>Search for</h4>
                <div><span>Object</span><span>Subject</span></div>
            </div>

            <div className="filter">
                <h4>Search in</h4>
                <div><span>Camera</span><span>Video</span></div>
            </div>

        </div>

        <div className="during">
            <h4 className="during-title">Search during</h4>
            <div className="during-input">
                <h4>Start</h4>
                <input type="date" />
            </div>
            <div className="during-input">
                <h4>End</h4>
                <input type="date" />
            </div>
        </div>

        <div className="validate">
            <button className="close"><i class="fas fa-times"></i></button>
            <button className="live-button">Live</button>
            <button className="search-button"><i class="fas fa-search"></i>Search</button>
        </div>

        </div>
    )
}

export default SearchLeft
