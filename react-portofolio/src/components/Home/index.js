import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            Hello World!!!<br/>
            My name is Vincent, and I'm a Developer.
          </h1>
          <h2>
            Software Engineer / Back-end Developer / Tech Enthusiast <br/>
          </h2>
          <Link to='/about' className='flat-button'>About Me</Link>
        </div>

      </div>
      <Loader type="cube-transition" />
    </>
  );
}

export default Home; 