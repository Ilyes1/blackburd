import React from 'react'
import './left.css'

function Left() {
    
    return (
        <div className="left">
            
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

        <table className="sections">
            <tr>
                <td>16:43:12</td>
                <td>C202</td>
                <td>Input rejected</td>
                <td><i className="fas fa-th-large"></i></td>
                <td>Key 405-1</td>
                <td><span>7</span></td>
            </tr>
            <tr>
                <td>16:17:53</td>
                <td>B79</td>
                <td>Opening of the barrier</td>
                <td></td>
                <td>Key 655-00</td>
                <td></td>
            </tr>
            <tr>
                <td>15:30:44</td>
                <td>B79</td>
                <td>Opening of the barrier</td>
                <td></td>
                <td>Key 681-88</td>
                <td></td>
            </tr>
            <tr>
                <td>15:10:20</td>
                <td>C202</td>
                <td>Input rejected</td>
                <td></td>
                <td>Key 545-77</td>
                <td><span>3</span></td>
            </tr>
            <tr className="orange">
                <td>14:40:32</td>
                <td>UK-055</td>
                <td>Fire hazard</td>
                <td><i className="fas fa-th-large"></i></td>
                <td>Smoke detector</td>
                <td></td>
            </tr>
            <tr className="orange">
                <td>14:35:55</td>
                <td>UK-028</td>
                <td>Fire hazard</td>
                <td></td>
                <td>Smoke detector</td>
                <td></td>
            </tr>
            <tr>
                <td>13:20:44</td>
                <td>B79</td>
                <td>Opening if the barrier</td>
                <td></td>
                <td>Key 683-80</td>
                <td></td>
            </tr>
            <tr>
                <td>13:20:44</td>
                <td>B79</td>
                <td>Opening if the barrier</td>
                <td></td>
                <td>Key 3009-3</td>
                <td></td>
            </tr>
            <tr>
                <td>11:54:03</td>
                <td>C202</td>
                <td>Input rejected</td>
                <td></td>
                <td>Key 67-7</td>
                <td><span>13</span></td>
            </tr>
            
        </table>

        <table className="sections second">

            <tr className="blue">
                <td>10:41:55</td>
                <td>OD-788</td>
                <td>Perimeter crossing</td>
                <td><i className="fas fa-th-large"></i></td>
                <td>Warning</td>
                <td><span>5</span></td>
            </tr>
            <tr>
                <td>10:40:18</td>
                <td>OD-866</td>
                <td>Perimeter crossing</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>10:38:37</td>
                <td>FF-788</td>
                <td>Perimeter crossing</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>10:38:02</td>
                <td>FF-788</td>
                <td>Perimeter crossing</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>10:37:10</td>
                <td>FF-788</td>
                <td>Animal was found</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

        </table>

        </div>
    )
}

export default Left
