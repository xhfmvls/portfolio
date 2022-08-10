import './index.scss';
import {faPython, faLinux, faStackOverflow, faGitAlt, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <p>
            If I have to describe myself briefly, I'm going to describe myself as a tech enthusiast. I'm interested in lots of things, especially when it's related to technology. I'm majoring in Cyber Security at BINUS University and currently learning about software engineering and project management. I have been working on several projects and implementing various languages and technology I have learned to create the projects.
          </p>
          <p>
            My interest in technology started when I was amazed by the video games I played and robots that I saw on TV when I was younger. And now, my interest in technology has grown because of how technology has taken a role in every aspect of my life. I believe that technology would help people to achieve what they want and help them in their life. Even while writing these paragraphs, I use technology to ensure that my grammar would be correct. It has become my motivation to create things to help plenty of people through my knowledge and skills in technology, especially computer science. 
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitAlt} color="#000000" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLinux} color="#000000" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faStackOverflow} color="#000000" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#000000" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#000000" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default About; 