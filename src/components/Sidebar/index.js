import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
// import { FaLinkedin } from 'react-icons/fa'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="logo_sub" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/about"
        className="about-link"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/contact"
        className="contact-link"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/antony-kavoo-b336a9169/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          {/* <FaLinkedin /> */}
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Teddykavooh"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          {/* <FaLinkedin /> */}
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://stackoverflow.com/users/16946743/antony-kavoo"
        >
          <FontAwesomeIcon icon={faStackOverflow} color="#4d4d4e" />
          {/* <FaLinkedin /> */}
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
