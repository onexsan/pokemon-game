import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import Background from '../../assets/bg3.jpg';
import cl from 'classnames';

import s from './style.module.css';

const ContactPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  }
  return (
    <>
      <Layout title="Contact me" urlBg={Background}>
        <p>This page is under construction.</p>
        <button className={cl(s.routeButton)} onClick={handleClick}>
          Back to Home
        </button>
      </Layout>

    </>
  );
}

export default ContactPage;