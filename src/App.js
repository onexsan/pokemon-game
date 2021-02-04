
import React from 'react';
import { useState } from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App = () => {
  const [page, setPage] = useState('app');

  const handleChange = (page) => {
    setPage(page);
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChange} />
    case "game":
      return <GamePage onChangePage={handleChange} />
    default:
      return <HomePage />
  }
};

export default App;