import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/home/Content'
import Parks from './components/categories/Parks'
import Park from './components/categories/Park'
import Cafes from './components/categories/Cafes'

import './Main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Content />} />
            <Route exact path="/parks" component={Parks} />
            <Route path="/parks/" component={Park} />
            <Route exact path="/cafes" component={Cafes} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
