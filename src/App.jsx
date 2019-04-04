import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Main from './generic/containers/MainContainer';

class App extends Component {
  render() {
    // console.log(this.state.sort_by)
    // console.log(this.state.articles)
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
