import React from 'react';
import s from './Layout.module.css';
import Background from '../../assets/bg3.jpg';

const Layout = (props) => {
  const backgroundColor = props.colorBg ? { backgroundColor: props.colorBg } : {};
  const backgroundImg = props.urlBg ? { backgroundImage: `url(${Background})` } : {};

  return (
    <section className={s.root} id={props.id} style={{ ...backgroundColor, ...backgroundImg }} >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {props.title && <h3>{props.title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            {props.descr && <p>{props.descr}</p>}
          </div>
        </article>
      </div>
    </section >
  )
};

export default Layout;