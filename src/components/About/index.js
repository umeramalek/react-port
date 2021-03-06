import React from 'react';
import me from './me.jpg';
import './style.css'

export default function About() {
  const imageStyle = {
    width: '70vw',
    maxWidth: '400px',
  };

  return (
    <div href="/About">
      <div >
        <img src={me} alt='me' style={imageStyle}></img>
      </div>
      <p>
      My name is Umera. Currently I am studying full stack web develpment at University of Berkeley. I am hoping to learn a lot and make use of the knowledge for my career path. The technical skills that I've gained from the coding bootcamp include HTML, Cascading Style Sheets (CSS), Javascript, jQuery, Node.js, Express, MySQL, Sequelize, Git, React, MongoDB, and REST APIs. Everyday I am learning new things and absolutely loving the challenge. 
      </p>
    </div>
  );
}