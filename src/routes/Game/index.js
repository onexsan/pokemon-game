import React from 'react';
import style from './style.module.css';
import Layout from '../../components/Layout';
import cl from 'classnames';
import PokemonCard from '../../components/PokemonCard';

import POKEMONS from '../../data/pokemon.json';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  }
  return (
    <>
      <Layout id="my-prop-id" title="Cards" colorBg="#EFFBB5" >
        <div className={cl(style.flex)}>
          {
            POKEMONS.map((item, index) => <PokemonCard key={index} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} />)
          }
        </div>
        <div className={cl(style.flex)}>
          <button className={cl(style.routeButton)} onClick={handleClick}>
            Home
          </button>
        </div>

      </Layout>
    </>
  );
};

export default GamePage;