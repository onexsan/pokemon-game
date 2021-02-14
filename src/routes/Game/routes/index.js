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
  const [pickedPokemons, setPickedPokemons] = useState(null);
  const [player2Pokemons, setPlayer2Pokemons] = useState({});
  const [isWinner, setWinner] = useState(null);

  const handlePlayer2 = (player2) => {

    setPlayer2Pokemons((prevState) => {

      return {
        ...prevState, ...player2
      }
    })

  }

  const handleWin = (data) => {
    setWinner(data);
  }

  const handlePicked = (pokemon) => {
    setPickedPokemons(pokemon)
  }

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
      isSelected: handleSelected,
      pokemons2: player2Pokemons,
      handlePlayer2: handlePlayer2,
      isWin: isWinner,
      handleWin: handleWin,
      reward: pickedPokemons,
      handlePicked: handlePicked
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