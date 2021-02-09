
import React from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import cl from 'classnames';
import GamePage from './routes/Game/routes';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import HomePage from './routes/Home';
import NotFoundPage from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import { FirebaseContext } from './context/firebaseContext'

import s from './App.module.css';
import Firebase from './service/firebase';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />

        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cl(s.wrap, s.isHomePage)}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404"></Redirect>
                )} />
              </Switch>
            </div>

            <Footer />
          </>
        </Route>

      </Switch>
    </FirebaseContext.Provider>


  )
};

export default App;