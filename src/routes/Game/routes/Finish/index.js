import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../../../components/Layout';
import Background from '../../../../assets/bg3.jpg';
import { PokemonContext } from '../../../../context/pokemonContext.js'
import { FirebaseContext } from '../../../../context/firebaseContext.js'
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css'

const FinishPage = () => {

  const Pokemons = useContext(PokemonContext);

  console.log(Pokemons);

  // const [pickedPokemon, setPickedPokemon] = useState({});

  const isWin = Pokemons.isWin;

  const firebase = useContext(FirebaseContext);

  const history = useHistory();
  if (Object.keys(Pokemons.pokemons).length === 0) {
    history.replace('/game');
  }

  const handlePick = (key) => {
    const yourPick = { ...Pokemons.pokemons2[key] };
    // setPickedPokemon(yourPick);
    // setPickedPokemon(prevState => ({
    //   ...prevState,
    //   [key]: {
    //     ...prevState[key],
    //     isPicked: !prevState[key].isPicked
    //   }
    // }));
    Pokemons.handlePicked(yourPick);

  }

  const endGame = () => {
    Pokemons.reward && firebase.addPokemon(Pokemons.reward, () => { });
    history.replace('/game');
  }

  return (
    <>
      <Layout title="Finish Game" urlBg={Background} >
        <div>
          {isWin === false && <div>
            <h2>I'm sorry, you lost.</h2>
          </div>}
          <h3>Your Cards:</h3>
          <div className={s.flex}>
            {
              Object.entries(Pokemons.pokemons).map(([key, { name, img, id, type, values }]) => (
                <div key={id} className={s.cardBoard}>
                  <PokemonCard
                    isActive={true}
                    key={id}
                    name={name}
                    img={img}
                    id={id}
                    type={type}
                    values={values}

                  />
                </div>
              ))
            }
          </div>

        </div>
        <div className={s.buttonDiv}>
          <button className={s.routeButton} onClick={endGame}>End Game</button>
        </div>
        {isWin && <div>
          <h2>You won! Pick one card!</h2>
          <div className={s.flex}>
            {
              Object.entries(Pokemons.pokemons2).map(([key, { name, img, id, type, values, isPicked }]) => (
                <div key={id} className={s.cardBoard}>
                  <PokemonCard
                    isActive={true}
                    key={id}
                    name={name}
                    img={img}
                    id={id}
                    type={type}
                    values={values}
                    onCardClick={() => handlePick(key)}
                    isSelected={isPicked}
                  />
                </div>
              ))
            }
          </div>
        </div>}

      </Layout>
    </>
  );
};

export default FinishPage;