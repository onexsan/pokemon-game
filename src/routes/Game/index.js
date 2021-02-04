import React from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import style from './style.module.css';

import POKEMONS from '../../data/pokemon.json';

const GamePage = () => {
  const [pokemons, setPokemons] = useState(POKEMONS);

  const onCardClick = (id) => {
    setPokemons(prevState => {
      const newState = Array.from(prevState);
      return newState.map(pokemons => {
        if (pokemons.id === id) {
          pokemons.isActive = !pokemons.isActive;
        }
        return pokemons;
      });
    })
  };

  return (
    <>

      <Layout title="Cards" colorBg="#EFFBB5" >
        <div className={style.flex}>
          {
            pokemons.map((item, index) => <PokemonCard onCardClick={onCardClick} isActive={item.isActive} key={index} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;