import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faHandPaper,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useParams, Redirect, Link } from 'react-router-dom';
import useLocalStorage from '../../../Hooks/useLocalStorage';

import '../css/PracticeHands.css';
import useCreateDeck from '../../../Hooks/useCreateDeck';

export default function PracticeHands() {
  const { deckName } = useParams();
  const { getItem } = useLocalStorage();

  const deck = getItem(deckName);
  const { createDeck, shuffleDeck } = useCreateDeck(deck);

  const [playerDeck, setPlayerDeck] = useState(() => {
    return shuffleDeck(createDeck());
  });

  const [handSize, setHandSize] = useState(7);

  const handleNewHand = () => {
    setHandSize(7);
    setPlayerDeck((current) => {
      return shuffleDeck([...current]);
    });
  };

  const handleDrawCard = () => {
    setHandSize((current) => {
      return current + 1;
    });
  };

  const initialHand = () => {
    return playerDeck.slice(0, handSize);
  };

  let content = null;

  if (!deck) {
    content = <Redirect to='/deck-list-manager' />;
  } else {
    content = (
      <>
        <nav className='flex justify-center border-b border-indigo-700'>
          <Link
            to={`/deck-card-manager/${deckName}`}
            className='flex items-center py-3 sm:py-1 text-indigo-700'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className='ml-1'>Back to {deckName} deck</span>
          </Link>
        </nav>
        <div className='flex justify-center p-2'>
          <button
            className='flex items-center bg-indigo-800 shadow font-bold py-1 px-2 mx-1 rounded text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
            onClick={handleNewHand}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span className='ml-1'>New hand</span>
          </button>
          <button
            className='bg-indigo-800 shadow font-bold py-1 px-2 mx-1 rounded text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
            onClick={handleDrawCard}
          >
            <FontAwesomeIcon icon={faHandPaper} />
            <span className='ml-1'>Draw</span>
          </button>
        </div>
        <div className='flex flex-wrap justify-center px-2 pb-2'>
          {initialHand().map((card, index) => {
            return (
              <img
                key={index}
                src={card.url}
                className='w-24 offset rounded'
                alt={card.name}
                title={card.name}
              />
            );
          })}
        </div>
      </>
    );
  }

  return content;
}
