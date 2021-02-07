import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase'

import style from './style.module.css';

// import POKEMONS from '../../data/pokemon.json';

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    })
  }, [])

  const onCardClick = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.isActive = !pokemon.isActive;
        };

        acc[item[0]] = pokemon;



        return acc;
      }, {});
    });
  };

  return (
    <>

      <Layout title="Cards" colorBg="#EFFBB5" >
        <div className={style.flex}>
          {
            Object.entries(pokemons).map(([key, { name, img, id, type, values, isActive }]) => <PokemonCard onCardClick={onCardClick} isActive={isActive} key={key} name={name} img={img} id={id} type={type} values={values} />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;