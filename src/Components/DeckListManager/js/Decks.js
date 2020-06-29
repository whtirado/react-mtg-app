import React from 'react';
import { Link } from 'react-router-dom';

export default function Decks({ decks }) {
  let content = null;

  if (decks.length) {
    content = decks.map((deck) => {
      return (
        <Link
          key={deck.name}
          to={`/deck-card-manager/${deck.name}`}
          className='block border-2 border-indigo-700 shadow rounded p-2 mb-2 hover:bg-indigo-700 hover:border-indigo-900 hover:shadow-md hover:text-indigo-100'
        >
          {deck.name}
        </Link>
      );
    });
  } else {
    content = <span>No decks found. Click "New" to create a new deck.</span>;
  }

  return content;
}
