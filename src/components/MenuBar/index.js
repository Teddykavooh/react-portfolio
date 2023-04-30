import './index.scss'
import { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

const MenuBar = () => {
  const [menu_class, setMenuClass] = useState('menu_bar hidden')
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger Menus */}
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
      <div className={menu_class}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default MenuBar
