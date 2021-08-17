import React from 'react'
import './searchLeft.css'

function SearchLeft() {
    return (
        <div className="search-left">
            
            <div className="left-sidebar">
                <ul>
                    <li><i class="fas fa-arrow-left"></i></li>
                    <li><i class="fas fa-search"></i> Search</li>
                    <li><i class="fas fa-briefcase"></i> Cases</li>
                    <li><i class="fas fa-video"></i> Cameras</li>
                    <li><i class="fas fa-play"></i> Videos</li>
                    <li><i class="fas fa-clipboard-list"></i> Subjects</li>
                    <li><i class="fas fa-shield-alt"></i> Rules</li>
                    <li><i class="fas fa-bell"></i> Alerts</li>
                    <li><i class="fas fa-cog"></i> Setting</li>
                </ul>
                <ul>
                    <li><i class="fas fa-sign-out-alt"></i> Logout</li>
                </ul>
            </div>

            <div className="left-filter">
                
                <h3>Search</h3>

                <div className="for">
                    <h5 className="for-top">FOR</h5>
                    <div className="checkbox">
                        <input type="checkbox" />Objects
                        <input type="checkbox" />Subjects
                    </div>
                    <div className="choices">
                        <div className="choice">
                            Object
                            <div>Vehicle <i class="fas fa-chevron-down"></i></div>
                        </div>
                        <div className="choice">
                            Directions
                            <div>Vehicle <i class="fas fa-chevron-down"></i></div>
                        </div>
                    </div>
                </div>

                <div className="in">

                    <h5>IN</h5>

                    <div className="checkbox">
                        <input type="checkbox" />Cameras
                        <input type="checkbox" />Videos
                    </div>

                    <div className="add">

                        <ul className="add-top">
                            <li><i class="fas fa-plus"></i> Add Camera</li>
                            <li><i class="fas fa-minus"></i> Remove Camera</li>
                        </ul>

                        <ul className="add-table">
                            <li>Camera name <span>Rejoin</span></li>
                            <li>Drone Low <span>0</span></li>
                            <li className="light">Drone Low <span>0</span></li>
                            <li>Drone Low <span>0</span></li>
                            <li className="light">Drone Low <span>0</span></li>
                            <li>Drone Low <span>0</span></li>
                            <li className="light">Drone Low <span>0</span></li>
                            <li>Drone Low <span>0</span></li>
                        </ul>

                    </div>

                </div>

                <div className="during">

                    <h5>DURING</h5>

                    <div className="int">
                        Start
                        <input type="date" />
                    </div>
                    <div className="int">
                        End
                        <input type="date" />
                    </div>

                </div>

                <div className="validate">
                    <button><i class="far fa-times-circle"></i></button>
                    <button>Live</button>
                    <button><i class="fas fa-search"></i> Search</button>
                </div>

            </div>

            

        </div>
    )
}

export default SearchLeft
