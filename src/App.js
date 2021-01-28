import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header title="Header title" descr="Header description" />
      <Layout id="my-prop-id" title="Layout title 1" descr="Layout description 1" urlBg />
      <Layout id="my-prop-id" title="Layout title 2" descr="Layout description 2" colorBg="#EFFBB5" />
      <Layout id="my-prop-id" title="Layout title 3" descr="Layout description 3" urlBg />
      <Footer />
    </>
  );
}

export default App;