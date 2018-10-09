import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Explorer from './components/explorer/explorer.js';
import PhotoDetail from './components/photoDetail/photoDetail.js';
import NavigationBar from './components/headerBar/headerBar.js';
// Key:
// f0c921a36fb8cd43667c5247a325d47d

// Secret:
// 40be6f88c33e7147

const componentExplorer = () => {
  console.log('cac');
  return (
    <Explorer/>
  )
}

const componentPhotoDetail = ({ match }) => {
  console.log('cec');
  return (
    <PhotoDetail 
      photoId={match.params.id}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#ECF0F1" }}>
        <div style={{ position: "sticky", zIndex: "10", top: "0", backgroundColor: "white", borderBottom: "2px solid gray" }}>
          <NavigationBar />
          <h4 style={{ textAlign: "left", margin: "15px 15% 0 15%", paddingBottom: "15px" }}>EXPLORE</h4>
        </div>
        <Router>
          <Switch>
            <Route 
              path="/photo/:id"
              component={componentPhotoDetail}
            />
            <Route
              path="/"
              component={componentExplorer}
            />
          
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
