import React from 'react';
import { Link } from 'react-router-dom';
import cl from 'classnames';
import s from './Menu.module.css';

const MENU = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "GAME",
    to: "/game"
  },
  {
    title: "ABOUT",
    to: "/about"
  },
  {
    title: "CONTACT",
    to: "/contact"
  },
];

const Menu = ({ isOpen, onChangeActive }) => {
  const onMenuClick = () => {
    onChangeActive && onChangeActive();
  }
  return (
    <div className={cl(s.menuContainer, {
      [s.active]: isOpen === true,
      [s.deactive]: isOpen === false
    })}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onMenuClick}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu;