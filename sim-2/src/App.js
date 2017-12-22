import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import WizardOne from './components/WizardOne'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName: "",
      password: ""
    }
  }
  render() {
    return (
      <div className="App">
        WHATEVER!!!
      </div>
    );
  }
}
function mapStateToProps (state){
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
