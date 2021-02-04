import React from 'react';
import cl from 'classnames';

import s from './Layout.module.css';

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  const style = {};
  if (urlBg) { style.backgroundImage = `url(${urlBg})` };
  if (colorBg) { style.backgroundColor = colorBg };

  return (
    <section className={cl(s.root)} id={id} style={style} >
      <div className={cl(s.wrapper)}>
        <article>
          <div className={cl(s.title)}>
            {title && <h3>{title}</h3>}
            <span className={cl(s.separator)}></span>
          </div>
          <div className={cl(s.desc, s.full)}>
            {children}
          </div>
        </article>
      </div>
    </section >
  )
};

export default Layout;