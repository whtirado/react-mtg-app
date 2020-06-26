import React from 'react';
import ActionBar from './ActionBar';
import { Link } from 'react-router-dom';

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

  if (deck.length) {
    content = (
      <>
        <ActionBar
          clearDeck={clearDeck}
          deleteDeck={deleteDeck}
          deckName={name}
          deckCardLength={deck.length}
        />
        <div className='flex flex-wrap'>
          {deck.map((card, index) => {
            return repeat(card.qty, () => {
              return (
                <Link
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
                    className='w-24'
                  />
                </Link>
              );
            });
          })}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <ActionBar
          deleteDeck={deleteDeck}
          deckName={name}
          deckCardLength={deck.length}
        />
      </>
    );
  }

  return content;
}
