import React, { Component } from 'react';
import './explorer.css';

import UTILS from '../../utils/utils.js';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroller';
import Gallery from 'react-grid-gallery';
import Overlay from '../thumbnailOverlay/thumbnailOverlay.js';

const APILink = `https://api.flickr.com/services/rest/`;

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      page: 1
    }
  }

  onClickThumbnail = function (index, event) {
    window.location.href = '/photo/' + this.props.item.id;
  };

  render() {
    const IMAGES = this.state.photoList.map((currPhoto) => {
      return {
        src: currPhoto.url_m,
        id: currPhoto.id,
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
      let sfetchData = fetchData.bind(this);
      sfetchData();
    };

    return (
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={this.state.page <= 25 ? true : false}
          loader={<div className="loader" key={0}>
            <img
              src="http://www.clasesdeperiodismo.com/wp-content/uploads/2016/10/Flickr.gif"
              style={{ width: '300px', height: '215.0px' }}
            />
          </div>}
        >
          <div style={{ width: "100%" }}>
            <Gallery
              images={IMAGES}
              enableImageSelection={false}
              onClickThumbnail={this.onClickThumbnail}
            />
          </div>

        </InfiniteScroll>

      </div>
    );
  }
}

const fetchData = function () {
  const queryParams = UTILS.buildQueryURI(this.state.page, 20);

  axios.get(APILink + queryParams)
    .then((res) => {

      const newphotoList = res.data.photos.photo;

      if (this.state.page <= 25) {
        this.setState({
          photoList: this.state.photoList.concat(newphotoList),
          page: Number(this.state.page + 1)
        });
      }
    });
}



export default Explorer;