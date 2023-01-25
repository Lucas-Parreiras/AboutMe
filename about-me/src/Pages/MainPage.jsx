import React, { Component } from 'react';
import Aside from '../Components/Aside';
import MainSection from '../Components/MainSection';
import '../Styles/MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <aside className="aside-comp">
          <Aside />
        </aside>
        <main className="main-section">
          <MainSection />
        </main>
      </div>
    );
  }
}
