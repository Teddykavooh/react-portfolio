import './index.scss'
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/pp-min-c.jpg'
// import LogoSubtitle from '../../assets/images/pp-min.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AvatarPlaceHolderImage from '../../assets/images/pp-min-c-min_init.jpg'

const MenuBar = () => {
  const [menu_class, setMenuClass] = useState('menu_bar hidden')
  const [isOpen, setOpen] = useState(false)

  const hidder = () => {
    setOpen(!isOpen)
    setMenuClass('menu_bar hidden')
  }

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
        <div className="children-cont">
          <Link className="logo" to="/" onClick={hidder}>
            <img src={LogoS} alt="logo" />
            {/* <div className="avatar_img">
              <LazyLoadImage
                src={LogoS}
                alt='avatar'
                placeholder={AvatarPlaceHolderImage}
                effect="blur"
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: {
                    transitionDelay: "1s",
                    objectFit: "cover",
                    objectPosition: "center center"
                  },
                }}
              />
            </div> */}
            {/* <img className="sub-logo" src={LogoSubtitle} alt="logo_sub" /> */}
          </Link>
          <nav>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/"
              onClick={hidder}
            >
              <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink
              exact="true"
              activeclassname="active"
              to="/about"
              className="about-link"
              onClick={hidder}
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/works"
              className="works-link"
              onClick={hidder}
            >
              <FontAwesomeIcon icon={faFolderOpen} />
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/contact"
              className="contact-link"
              onClick={hidder}
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
                onClick={hidder}
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
                onClick={hidder}
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
                onClick={hidder}
              >
                <FontAwesomeIcon icon={faStackOverflow} />
                {/* <FaLinkedin /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MenuBar
