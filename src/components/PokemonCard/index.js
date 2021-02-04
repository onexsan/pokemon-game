import React from 'react';
import cl from 'classnames';
import cardBackImg from './assets/card-back-side.jpg';

import s from './PokemonCard.module.css';

const PokemonCard = ({ name, img, id, type, values, isActive, onCardClick }) => {

  const handleClick = () => {
    onCardClick && onCardClick(id);
  }

  return (
    <div className={cl(s.root)} onClick={handleClick}>
      <div className={cl(s.pokemonCard, { [s.active]: isActive })}>
        <div className={cl(s.cardFront)}>
          <div className={cl(s.wrap, s.front)}>
            <div className={cl(s.pokemon, s[type])}>
              <div className={cl(s.values)}>
                <div className={cl(s.count, s.top)}>{values.top}</div>
                <div className={cl(s.count, s.right)}>{values.right}</div>
                <div className={cl(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cl(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={cl(s.imgContainer)}>
                <img src={img} alt={name} />
              </div>
              <div className={cl(s.info)}>
                <span className={cl(s.number)}>#{id}</span>
                <h3 className={cl(s.name)}>{name}</h3>
                <small className={cl(s.type)}>Type: <span>{type}</span></small>
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