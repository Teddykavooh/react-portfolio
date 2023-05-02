import './index.scss'
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-a-big.png'
import LogoSubtitle from '../../assets/images/logo-sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

const MenuBar = () => {
  const [menu_class, setMenuClass] = useState('menu_bar hidden')
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="hambg-cont">
        {/* Hamburger Menu */}
        <Hamburger
          rounded
          toggled={isOpen}
          toggle={setOpen}
          size={32}
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              setMenuClass('menu_bar visible')
            } else {
              // close a menu
              setMenuClass('menu_bar hidden')
            }
          }}
        />
      </div>
      <div className={menu_class}>
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
              <FontAwesomeIcon icon={faLinkedin} />
              {/* <FaLinkedin /> */}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Teddykavooh"
            >
              <FontAwesomeIcon icon={faGithub} />
              {/* <FaLinkedin /> */}
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/16946743/antony-kavoo"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
              {/* <FaLinkedin /> */}
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MenuBar
