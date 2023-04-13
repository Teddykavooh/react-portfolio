import './index.scss'
import Loader from 'react-loaders'
import { bubble as Menu } from 'react-burger-menu'

const showSettings = (event) => {
  event.preventDefault()
}

const Trials = () => {
  return (
    <>
      <Menu right width={'30%'}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>

        {/* mine */}
        {/* <NavLink exact="true" activeclassname="active" to="/">
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
        </NavLink> */}
      </Menu>

      <Loader type="pacman" />
    </>
  )
}

export default Trials
