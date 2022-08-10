import { Link, NavLink } from 'react-router-dom';
import './index.scss'; 
import logo from '../../logo.svg'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SideBar = () => (
  <div className='nav-bar'>
    {/* <Link className='logo' to='/'>
      <img src={logo} alt='logo'></img>
    </Link> */}
    <nav>
      <NavLink exact='true' activeclassname='active' to ='/'>
        <FontAwesomeIcon icon={faHome} color='#ffffff' />
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='about-link' to ='/about'>
        <FontAwesomeIcon icon={faUser} color='#ffffff' />
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='contact-link' to ='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color='#ffffff' />
      </NavLink>
      <NavLink exact='true' activeclassname='active' className='projects-link' to ='/projects'>
        <FontAwesomeIcon icon={faSuitcase} color='#ffffff' />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/vincent-pradipta/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/xhfmvls"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/pradipta1357"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default SideBar; 