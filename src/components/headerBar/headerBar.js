import React from 'react';
import './headerBar.css'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text : this.props.tag
        }
      }

    handleEmailChange = (event) => {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <ul>
                    <li style={{ fontSize: "2em", fontWeight:"bold"}}>
                    <a href="#home" style={{top: "0"}}>Flickr</a>
                    </li>
                    <li><a href="#home">YOU</a></li>
                    <li><a href="#news">EXPLORE</a></li>
                    <li><a href="#contact">CREATE</a></li>
                    <div style={{ fontSize: "2em", float: "right", top: "5px", position:"relative" }}>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            window.location.href = '/' + this.state.text
                        }}>
                            <input type="text" placeholder="Search.." name="search" value={this.state.text} onChange={this.handleEmailChange}/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    <li style={{ fontSize: "2em", float: "right" }}><a style={{top: "0"}} href="#about"><i className="fa fa-cloud-upload"></i></a></li>
                </ul>
            </div>
        )
    }
}


export default NavigationBar;