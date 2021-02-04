import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cl from 'classnames';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import homeIcon from '../../assets/home.png'

import style from './style.module.css';

import POKEMONS from '../../data/pokemon.json';

const GamePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  }

  const [pokemons, setPokemons] = useState(POKEMONS);
  console.log(pokemons);

  const onCardClick = (id) => {
    /* setPokemons((pokemons) => {
      const index = pokemons.findIndex((el) => el.id === id);
      const oldItem = pokemons[index];
      const newItem = { ...oldItem, isActive: !oldItem.isActive };
      const newArray = [
        ...pokemons.slice(0, index),
        newItem,
        ...pokemons.slice(index + 1)
      ];
      return newArray;
    }) */
    setPokemons(prevState => {
      const stateCopy = JSON.parse(JSON.stringify(prevState));
      return stateCopy.map(pokemons => {
        if (pokemons.id === id) {
          pokemons.isActive = !pokemons.isActive;
        }
        return pokemons;
      });
    })
  };
  return (
    <>

      <div className={cl(style.flex, style.spaceEvenly)}>
        <h1>The Game Page</h1>
        <span className={style.homeButton} onClick={handleClick}>
          <img src={homeIcon} alt="home"></img>
        </span>
      </div>

      <Layout title="Cards" colorBg="#EFFBB5" >
        <div className={cl(style.flex)}>
          {
            POKEMONS.map((item, index) => <PokemonCard onCardClick={onCardClick} isActive={item.isActive} key={index} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;