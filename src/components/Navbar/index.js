import React from 'react';
import cl from 'classnames';

import s from './Navbar.module.css';

const Navbar = ({ isOpen, onChangeActive }) => {
  const handleClick = () => {
    onChangeActive && onChangeActive();
  }

  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <span
          className={cl(s.menuButton, { [s.active]: isOpen })}
          onClick={handleClick}
        >
          <span />
        </span>
      </div>
    </nav >
  )
}

export default Navbar;