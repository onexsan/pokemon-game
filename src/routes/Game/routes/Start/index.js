import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import { PokemonContext } from '../../../../context/pokemonContext.js'
import { FirebaseContext } from '../../../../context/firebaseContext.js'

import s from './style.module.css';

const StartPage = () => {

  const [pokemons, setPokemons] = useState({});
  const SelectedContext = useContext(PokemonContext);
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSocket()

  }, [firebase]);

  const onButtonClick = () => {
    history.push('/game/board')
  }

  const onCardClick = (key) => {
    const pokemon = { ...pokemons[key] };
    SelectedContext.isSelected(key, pokemon);

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        isSelected: !prevState[key].isSelected
      }
    }))
  }

  return (
    <>

      <Layout title="Cards" colorBg="#EFFBB5" >

        <div className={s.buttonWrap}>
          <button className={s.addButton} onClick={onButtonClick} disabled={Object.keys(SelectedContext.pokemons).length < 5}>
            Start
          </button>
          <p>Please select 5 Pokemons to start</p>
        </div>

        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, { name, img, id, type, values, isActive, isSelected }]) =>
              <PokemonCard
                className={s.card}
                onCardClick={() => {
                  if (Object.keys(SelectedContext.pokemons).length < 5 || isSelected) {
                    onCardClick(key)
                  }
                }}
                isSelected={isSelected}
                isActive={true}
                key={key}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values} />)
          }
        </div>
      </Layout>
    </>
  );
};

export default StartPage;