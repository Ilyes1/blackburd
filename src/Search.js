import React from 'react'
import './search.css'
import image1 from './img/1.jpg'
import image2 from './img/4.jpg'

function Search() {
    return (
        <div className="search">

            <div className="search-images">

                <div className="image">
                    <img src={image1} alt="" />
                    <div>
                        <span>OD-788</span>
                        <ul>
                            <li><i className="fas fa-download"></i></li>
                            <li><i className="fas fa-camera"></i></li>
                            <li><i className="fas fa-volume-up"></i></li>
                            <li><i className="fas fa-exclamation-triangle"></i></li>
                            <li className="live"><span>LIVE</span>.</li>
                            <li><i className="fas fa-bars"></i></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="bottom-images">

                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                <div className="bottom-image-container">
                    <div className="bottom-image">
                        <img src={image2} alt="" />
                        <span>Person</span>
                    </div>
                </div>
                
            </div>

        
        

        </div>
    )
}

export default Search
