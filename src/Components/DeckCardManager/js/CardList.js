import React from 'react';
import ActionBar from './ActionBar';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Animate from '../../Animate/js/Animate';

export default function CardList({
  name,
  deck,
  deleteCard,
  deleteDeck,
  clearDeck,
}) {
  let content;

  const handleRightClick = (e) => {
    e.preventDefault();
  };

  const repeat = (x, f) => {
    let code = [];
    while (x > 0) {
      code.push(f());
      x -= 1;
    }
    return code;
  };

  const countCards = () => {
    return deck.reduce((count, card) => {
      count += card.qty;
      return count;
    }, 0);
  };

  const actionBar = (
    <ActionBar
      clearDeck={clearDeck}
      deleteDeck={deleteDeck}
      deckName={name}
      deckCardLength={countCards()}
    />
  );

  const cardContainer = (
    <div className='flex flex-wrap'>
      {deck.map((card, index) => {
        return repeat(card.qty, () => {
          return (
            <Link
              key={uuidv4()}
              to={`/card-details/${card.name}`}
              onContextMenu={(e) => {
                handleRightClick(e);
                deleteCard(card.name);
              }}
              className='cursor-pointer'
            >
              <img
                src={card.url}
                alt={card.name}
                title={card.name}
                className='w-24 rounded'
              />
            </Link>
          );
        });
      })}
    </div>
  );

  if (deck.length) {
    content = (
      <>
        <Animate
          content={actionBar}
          classProps='sticky top-0 z-50'
          direction='right'
          delay='.2s'
        />
        <Animate content={cardContainer} direction='bottom' delay='.4s' />
      </>
    );
  } else {
    content = (
      <>
        <ActionBar
          deleteDeck={deleteDeck}
          deckName={name}
          deckCardLength={countCards()}
        />
      </>
    );
  }

  return content;
}
