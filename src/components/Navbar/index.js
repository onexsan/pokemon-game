import React from 'react';
import cl from 'classnames';

import s from './Navbar.module.css';

const Navbar = ({ isOpen, onChangeActive }) => {

  return (
    <nav id={s.navbar} className={cl({ [s.bgActive]: s.bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <span
          className={cl(s.menuButton, { [s.active]: isOpen })}
          onClick={onChangeActive}
        >
          <span />
        </span>
      </div>
    </nav >
  )
}

export default Navbar;