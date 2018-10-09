import React, {Component} from 'react';
import axios from 'axios';

import UTILS from '../../utils/utils';

const APILink = `https://api.flickr.com/services/rest/`;

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      view: '',
      source: '',
      tags: []
    }
  }

  componentWillMount() {
    const queryParams = UTILS.buildPhotoDetailQueryURI(this.props.photoId);
    const queryParams2 = UTILS.buildPhotoDetail2QueryURI(this.props.photoId);

    axios.get(APILink + queryParams)
      .then((res) => {
        console.log(res.data);
        const src = res.data.sizes.size[7]['source'];
       

        axios.get(APILink + queryParams2).then((res2) => {
          console.log(res2)
          const username = res2.data.photo.owner.username;
          const title = res2.data.photo.title._content;
          const desc  = res2.data.photo.description._content;
          const comment = res2.data.photo.comments._content;
          const tags = res2.data.photo.tags.tag.map((elem) => {
            return elem._content;
          });
          this.setState({
            source: src,
            username: username,
            title: title,
            desc: desc,
            comment: comment,
            tags: tags
          });
        })
      });
  }

  render() {
    const Tags = this.state.tags.map(element => {
      const link = '/' + element;
      return (

        <a style={{padding: '5px', backgroundColor: 'black', color: 'white', margin: '10px', display:'inline-block'}} href={link}>{element}</a>
      );
    });
    return (
      <div>
        <div style={{ backgroundColor: "DimGray", textAlign: "center" }}>
          <div style={{ maxHeight: "80vh", width: "80%", margin: "auto", padding: "5vh" }}>
            <img style={{ width: '100%' }} src={this.state.source}  alt="loading..."/>
          </div>
        </div>
        <div>
          <h1>{this.state.title}</h1>
          <h4>by {this.state.username}</h4>
          <p>{this.state.desc}</p>
          <h3>TAGS</h3>
          <div style={{maxWidth: '100%', backgroundColor:'gray'}}>
            {Tags}
          </div>
      </div>
      </div>
      
    );
  }
}

export default PhotoDetail;