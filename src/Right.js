import React from 'react'
import './right.css'
import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'

function Right() {     

    return (
        <div className="right">
            
            <div className="right-top">
            <ul>
                <li id="views">views</li>
                <li><i className="fas fa-th-large"></i></li>
                <li><i className="far fa-plus-square"></i></li>
            </ul>
        </div>

        <div className="right-images">

            <div className="right-image">
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
            <div className="right-image">
                <img src={image2} alt="" />
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
            <div className="right-image">
                <img src={image3} alt="" />
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
            <div className="right-image">
                <img src={image4} alt="" />
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


        
        <div className="timeline">
                <ul className="timeline-left">
                    <li><i className="fas fa-th"></i></li>
                    <li><i className="fas fa-th-large"></i></li>
                    <li><i className="far fa-plus-square"></i></li>
                </ul>

                <table className="timeline-table">
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </table>
                
                <div className="orange-line"></div>
                <div className="blue-line"></div>
                <div className="orange-line2"></div>
                <div className="blue-line2"></div>

                <div className="timeline-line">
                    <div className="line-line"></div>
                </div>
            </div>

        <ul className="timeline-button">
            <li><i className="fas fa-sync-alt"></i></li>
            <li><i className="fas fa-undo-alt"></i></li>
            <li><i className="fas fa-pause"></i></li>
            <li><i className="fas fa-play"></i></li>
            <li><i className="fas fa-redo-alt"></i></li>
        </ul>

        </div>
    )
}

export default Right
