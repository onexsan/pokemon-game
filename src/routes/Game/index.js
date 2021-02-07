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
  }, [pokemons])

  const onCardClick = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.isActive = !pokemon.isActive;
          database.ref('pokemons/' + item[0]).set({ ...item[1], isActive: pokemon.isActive });
        };

        acc[item[0]] = pokemon;
        // database.ref('pokemons').update(acc);


        return acc;
      }, {});
    });
  };

  const onAddingPokemon = () => {
    const idNext = Math.floor(Math.random() * 1000);
    const newPokeData = {
      "abilities": ["intimidate", "shed-skin", "unnerve"],
      "base_experience": 157,
      "height": 35,
      "id": idNext,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      "name": "arbok",
      "stats": {
        "attack": 95,
        "defense": 69,
        "hp": 60,
        "special-attack": 65,
        "special-defense": 79,
        "speed": 80
      },
      "type": "poison",
      "values": {
        "bottom": "A",
        "left": "A",
        "right": 9,
        "top": 5
      }
    };
    var newPostKey = database.ref().child('pokemons').push().key;
    var updates = {};
    updates['/pokemons/' + newPostKey] = newPokeData;

    return database.ref().update(updates);
  }

  return (
    <>

      <Layout title="Cards" colorBg="#EFFBB5" >
        <div className={style.flex}>
          <button className={style.addButton} onClick={onAddingPokemon}>
            Add a Pokemon
            </button>
        </div>
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