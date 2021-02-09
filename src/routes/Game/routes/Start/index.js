import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

// import database from '../../../../service/firebase'
import { PokemonContext } from '../../../../context/pokemonContext.js'
import { FirebaseContext } from '../../../../context/firebaseContext.js'

import style from './style.module.css';

const GamePage = () => {
  const firebase = useContext(FirebaseContext);
  const [pokemons, setPokemons] = useState({});
  const SelectedContext = useContext(PokemonContext);

  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
      setPokemons(pokemons);
    })
  }, []);


  const onCardClick = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        let pokemon = { ...item[1] };
        if (pokemon.id === id && !pokemon.isSelected) {
          pokemon.isSelected = true;
          pushToContext(item);
        };

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  const pushToContext = (val) => {
    SelectedContext.pokemon.push(val);
  }

  return (
    <>

      <Layout title="Cards" colorBg="#EFFBB5" >
        <div className={style.flex}>
          <Link className={style.addButton} to={"/game/board"}>
            Start Game
          </Link>
        </div>
        <div className={style.flex}>
          {
            Object.entries(pokemons).map(([key, { name, img, id, type, values, isActive, isSelected }]) => <PokemonCard onCardClick={onCardClick} isSelected={isSelected} isActive={true} key={key} name={name} img={img} id={id} type={type} values={values} />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;