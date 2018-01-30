import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/:name" component={Home} />
        </div>
      </Router>
    )
  }
}

export default App;
