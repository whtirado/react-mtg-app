import React from 'react';
import ActionBar from './ActionBar';
import { Link } from 'react-router-dom';

export default function CardList({ name, deck, deleteCard, clearDeck }) {
  let content;

  const handleRightClick = (e) => {
    e.preventDefault();
  };

  if (deck.length) {
    content = (
      <>
        <ActionBar clearDeck={clearDeck} hideClearButton={false} />
        <div className='font-bold text-lg py-2 text-indigo-700'>
          {name}: {deck.length} card(s)
        </div>
        <div className='flex flex-wrap'>
          {deck.map((card, index) => {
            return (
              <Link
                to={`/card-details/${card.name}`}
                key={index}
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
                  className='w-24'
                />
              </Link>
            );
          })}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <ActionBar hideClearButton={true} />
        <span>Deck has no cards...</span>
      </>
    );
  }

  return content;
}
