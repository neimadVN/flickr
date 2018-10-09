import React, {Component} from 'react';
import axios from 'axios';

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillUnmount() {

  }

  render() {
    return ( 
      <div style={{backgroundColor: "DimGray", textAlign: "center" }}>
        <div style={{maxHeight: "80vh", width: "80%", margin: "auto", padding: "5vh" }}>
          <img  src="//c1.staticflickr.com/2/1919/30249619947_41128d5c3f_m.jpg"/>
        </div>
        
      </div>  
    );
  }
}

export default PhotoDetail;