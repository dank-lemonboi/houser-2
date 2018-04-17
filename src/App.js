import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          {Routes}
        </HashRouter>
      </div>
    );
  }
}

export default App;
