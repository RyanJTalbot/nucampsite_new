import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

fclass App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">NuCamp</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

export default App;