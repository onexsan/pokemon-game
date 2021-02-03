import React from 'react';
import cl from 'classnames';
import s from './Menu.module.css';

const Menu = ({ isOpen }) => {
  return (
    <div className={cl(s.menuContainer, {
      [s.active]: isOpen === true,
      [s.deactive]: isOpen === false
    })}>
      <div className={cl(s.overlay)} />
      <div className={cl(s.menuItems)}>
        <ul>
          <li>
            <a href="#welcome">
              HOME
        </a>
          </li>
          <li>
            <a href="#game">
              GAME
        </a>
          </li>
          <li>
            <a href="#about">
              ABOUT
        </a>
          </li>
          <li>
            <a href="#contact">
              CONTACT
        </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;