import React from 'react';
import s from './Footer.module.css';
import cl from 'classnames';

const Footer = () => {
  return (
    <footer>
      <div className={cl(s.wrapper)}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
};

export default Footer;