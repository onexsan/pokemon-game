import React from 'react';
import cl from 'classnames';
import Logo from '../../assets/pokeball.png';

import s from './Navbar.module.css';

const Navbar = ({ isOpen, onChangeActive, bgActive = false }) => {

  return (
    <nav id={s.navbar} className={cl({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <img className={s.brand} src={Logo} />
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