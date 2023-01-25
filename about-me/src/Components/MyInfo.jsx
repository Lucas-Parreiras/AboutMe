import React, { Component } from 'react';
import profilePhoto from '../Helpers/profilePhoto.jpeg';
import '../Styles/MyInfo.css';

export default class MyInfo extends Component {
  render() {
    return (
      <div>
        <img className="profile-photo" src={profilePhoto} alt="Foto de Lucas" />
        <h3>Lucas Parreiras</h3>
        <p>Web Developer Student at Trybe</p>
        <p>github.com/Lucas-Parreiras</p>
        <p>LinkedIn ...</p>
        <p>lucassouzaparreiras@hotmail.com</p>
        <p>(31) 98363-3807</p>
      </div>
    );
  }
}
