import React, { Component } from 'react'
import Headernavigation from './component/HeaderNavigation';
import './App.css';
import './Responsive.css';
export default class App extends Component {
  render() {
    return (
      <>
      <div className="upperPart"></div>
      <div>
        <Headernavigation />
      </div>
      </>
    )
  }
}
