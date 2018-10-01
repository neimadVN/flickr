import React from 'react';
import './headerBar.css'

const NavigationBar = (props) => {
    return (
        <div>
            <ul>
                <li style={{ fontSize: "2em", fontWeight:"bold"}}>
                <a href="#home" style={{top: "0"}}>Flickr</a>
                </li>
                <li><a href="#home">YOU</a></li>
                <li><a href="#news">EXPLORE</a></li>
                <li><a href="#contact">CREATE</a></li>
                <li style={{ fontSize: "2em", float: "right" }}><a style={{top: "0"}} href="#about"><i className="fa fa-cloud-upload"></i></a></li>
            </ul>
        </div>
    )
};

export default NavigationBar;