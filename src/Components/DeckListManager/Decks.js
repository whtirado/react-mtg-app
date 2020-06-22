import React from 'react';
import { Link } from 'react-router-dom';

export default function Decks({ decks }) {
  let content = null;

  if (decks.length) {
    content = (
      <div className=''>
        {decks.map((deck) => {
          return (
            <Link
              key={deck.name}
              to={`/deck-card-manager/${deck.name}`}
              className='block border-2 border-indigo-700 shadow rounded p-2 mb-2 hover:bg-indigo-700 hover:border-indigo-900 hover:shadow-md hover:text-indigo-100'
            >
              {deck.name}
            </Link>
          );
        })}
      </div>
    );
  } else {
    content = <span>No decks found...</span>;
  }

  return content;
}
