import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Background from '../../assets/bg3.jpg';
import cl from 'classnames';

import s from './style.module.css';

const NotFoundPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  }

  return (
    <>
      <div className={s.wrap}>
        <Layout title="404: Page Not Found" urlBg={Background}>
          <p>The Page you were looking for does not exist.</p>
          <button className={cl(s.routeButton)} onClick={handleClick}>
            Back to Home
        </button>
        </Layout>

      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;