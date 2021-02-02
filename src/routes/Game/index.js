import React from 'react';
import cl from 'classnames';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import homeIcon from '../../assets/home.svg'

import style from './style.module.css';

import POKEMONS from '../../data/pokemon.json';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  }
  return (
    <>
      <div className={cl(style.flex, style.spaceEvenly)}>
        <h1>The Game Page</h1>
        <span className={style.homeButton} onClick={handleClick}>
          <img src={homeIcon} alt="home"></img>
        </span>
      </div>

      <Layout id="my-prop-id" title="Cards" colorBg="#EFFBB5" >
        <div className={cl(style.flex)}>
          {
            POKEMONS.map((item, index) => <PokemonCard key={index} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;