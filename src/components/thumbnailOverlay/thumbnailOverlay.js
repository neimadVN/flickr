import React from 'react';
import './thumbnailOverlay.css';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="thumbnail-overlay-backgound">
        <div className="thumbnail-overlay-container">
          <div className="thumbnail-overlay-textboxes">
            <div className="overlay-title">
              {this.props.title}
            </div>
            <div className="overlay-author">
              by {this.props.author}
            </div>
          </div>
          <div className="thumbnail-overlay-engagments">
            <div className="overlay-fa-icon">
              <i className="fa fa-eye"></i>
            </div>
            <div className="overlay-view-counter">
              &nbsp;{this.props.views}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Overlay;