import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  const [setLetterClass] = useState('text-animate');

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          Hello World!!!<br/>
          My name is Vincent, and I'm a Developer.
        </h1>
        <h2>
          Software Engineer / Back-end Developer / Tech Enthusiast <br/>
          <Link to='/about' className='flat-button'>About Me</Link>
        </h2>
      </div>

    </div>
  );
}

export default Home; 