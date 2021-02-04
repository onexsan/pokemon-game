import React from 'react';
import { useHistory } from 'react-router-dom';
import cl from 'classnames';

import s from './Header.module.css';

const Header = ({ title, descr, onClickButton }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/game");
  }
  return (
    <header className={cl(s.root)}>
      <div className={cl(s.forest)}></div>
      <div className={cl(s.silhouette)}></div>
      <div className={cl(s.moon)}></div>
      <div className={cl(s.container)}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
        <button className={cl(s.routeButton)} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
};

export default Header;