import React from 'react'
import './search.css'
import image1 from './img/1.jpg'
import image2 from './img/4.jpg'

function Search() {
    return (
        <div className="search">

            <div className="search-top">

                <div className="video">
                    <video controls></video>
                    <ul>
                        <li><i class="fas fa-times"></i></li>
                        <li>63%</li>
                        <li className="man"><i class="fas fa-male"></i></li>
                        <li className="blue-circle"></li>
                        <li className="blue-circle"></li>
                    </ul>
                </div>

                <div className="image">
                    <div className="image-top">
                        <span className="detection">Image 1 of 20</span>
                        <span className="download"><i class="fas fa-download"></i></span>
                    </div>
                    <img src={image1} alt="" />
                    <ul className="arrows">
                        <li><i class="fas fa-arrow-left"></i> PREV</li>
                        <li>NEXT <i class="fas fa-arrow-right"></i></li>
                    </ul>
                </div>

            </div>

            <ul className="bar">

                <li>Sowing 1 to 50 of 5634984, Ordered by time (Descending) in 5.15s</li>
                <li><i class="fas fa-wifi"></i>Sensitivity (High) <i class="fas fa-sort-amount-up-alt"></i> Order by</li>
                <li><i class="fas fa-arrow-left"></i> PREV  NEXT <i class="fas fa-arrow-right"></i></li>

            </ul>

            <div className="images">

                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>
                <div className="bottom-image">
                    <img src={image2} />
                    <span>Person</span>
                </div>

            </div>

        </div>
    )
}

export default Search
