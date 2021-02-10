import React from 'react';
import { useState } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './Start/index.js'
import FinishPage from './Finish/index.js'
import BoardPage from './Board/index.js'
import { PokemonContext } from '../../../context/pokemonContext.js'

const GamePage = () => {
  const match = useRouteMatch("/game");
  const [selectedPokemons, setSelectedPokemons] = useState({});

  const handleSelected = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];

        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }
  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons,
      isSelected: handleSelected
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />

      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;