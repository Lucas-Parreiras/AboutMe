import React, { Component } from 'react';
import AboutMe from './AboutMe';

export default class MainSection extends Component {
  render() {
    return (
      <div>
        <section className="about-me-comp">
          <AboutMe />
        </section>
      </div>
    );
  }
}
