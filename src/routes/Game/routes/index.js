import React from 'react';
import { useState } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './Start/index.js'
import FinishPage from './Finish/index.js'
import BoardPage from './Board/index.js'
import { PokemonContext } from '../../../context/pokemonContext.js'

const GamePage = () => {
  const match = useRouteMatch("/game");
  const [pokemon, setPokemon] = useState([]);

  const handleSelected = (val) => {
    setPokemon(val);
  }
  return (
    <PokemonContext.Provider value={{ pokemon, isSelected: handleSelected }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />

      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;