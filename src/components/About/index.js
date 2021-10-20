import React from 'react';
import myPicture from '../../assets/my-picture.jpeg'

function About () {
  return (
    <section class="about">
      <h2>About</h2>
      <div class="about-info">
        <img src={myPicture} alt="Jeff Kelling" />
        <p>My name is Jeff Kelling. I am a student in the University of Wisconsin Extended Campus Coding Boot Camp. I will complete this program in November 2021.</p>
      </div>
    </section>
  );
}

export default About;