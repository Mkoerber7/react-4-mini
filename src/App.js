import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NavLink exact activeClassName="active" to='/'>Route1</NavLink>
          <NavLink activeClassName="active" to='/2'>Route2</NavLink>
          <NavLink activeClassName="active" to='/3'>Route3</NavLink>
        </header>
        {routes}
      </div>
    );
  }
}

export default App;
