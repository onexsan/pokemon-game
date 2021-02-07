import React from 'react';
import cl from 'classnames';
import cardBackImg from './assets/card-back-side.jpg';

import s from './PokemonCard.module.css';

const PokemonCard = ({ name, img, id, type, values, isActive, onCardClick }) => {

  const handleClick = () => {
    onCardClick && onCardClick(id);
  }

  return (
    <div className={s.root} onClick={handleClick}>
      <div className={cl(s.pokemonCard, { [s.active]: isActive === true })}>
        <div className={s.cardFront}>
          <div className={cl(s.wrap, s.front)}>
            <div className={cl(s.pokemon, s[type])}>
              <div className={s.values}>
                <div className={cl(s.count, s.top)}>{values.top}</div>
                <div className={cl(s.count, s.right)}>{values.right}</div>
                <div className={cl(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cl(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>Type: <span>{type}</span></small>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={cl(s.wrap, s.back)}>
            <img src={cardBackImg} alt="Сard Backed" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PokemonCard;