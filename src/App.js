import React, { Component } from 'react';
import './App.css';

import UTILS from './utils/utils.js';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroller';
import Gallery from 'react-grid-gallery';
import Overlay from './components/thumbnailOverlay/thumbnailOverlay.js';

// Key:
// f0c921a36fb8cd43667c5247a325d47d

// Secret:
// 40be6f88c33e7147

const APILink = `https://api.flickr.com/services/rest/`;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      page: 1
    };
  }


  render() {
    const IMAGES = this.state.photoList.map((currPhoto) => {
      return {
        src: currPhoto.url_m,
        thumbnail: currPhoto.url_m,
        thumbnailWidth: currPhoto.width_m,
        thumbnailHeight: currPhoto.height_m,
        caption: currPhoto.title,
        customOverlay: <Overlay title={currPhoto.title}
          author={currPhoto.ownername}
          views={currPhoto.views}
        />
      }
    });

    const loadFunc = () => {
      console.log('load ne`!!!');
      console.log(this.state.page);
      let sfetchData = fetchData.bind(this);
      sfetchData();
    };
    console.log('rendering');
    return (
      <div className="App">
        <div style={{ maxWidth: "1080px", marginLeft: "auto", marginRight: "auto", padding: "25px", backgroundColor: "LightYellow" }}>

          <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            <Gallery
              images={IMAGES}
              enableImageSelection={false}
            />
          </InfiniteScroll>
        </div>

      </div>
    );
  }
}


const fetchData = function () {
  const queryParams = UTILS.buildQueryURI(this.state.page, 20);
  axios.get(APILink + queryParams)
    .then((res) => {
      const newphotoList = res.data.photos.photo;

      if (this.state.page < 20) {
        this.setState({
          photoList: this.state.photoList.concat(newphotoList),
          page: Number(this.state.page + 1)
        });
      }
    });
}

export default App;
