import React, { Component } from 'react';
import MyInfo from './MyInfo';
import Navigation from './Navigation';

export default class Aside extends Component {
  render() {
    return (
      <div>
        <MyInfo />
        <Navigation />
      </div>
    );
  }
}
