import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import useLocalStorage from '../../Hooks/useLocalStorage';
import SearchCard from './SearchCard';
import CardList from './CardList';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function DeckCardManager() {
  const { deckName } = useParams();
  const { getItem, setItem, deleteItem } = useLocalStorage();
  const [deck, setDeck] = useState(getItem(deckName));

  const updateDeck = (newCard) => {
    setDeck((prev) => {
      const newDeck = [...prev, newCard].sort((a, b) => {
        if (a.type > b.type) return -1;
        else if (a.type < b.type) return 1;
        else if (a.cmc > b.cmc) return 1;
        else if (a.cmc < b.cmc) return -1;
        else if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      });
      setItem(deckName, newDeck);
      return newDeck;
    });
  };

  const clearDeck = () => {
    const clearedDeck = [];
    setItem(deckName, clearedDeck);
    setDeck(clearedDeck);
  };

  const deleteDeck = (deckName) => {
    deleteItem(deckName);
    setDeck(getItem(deckName));
  };

  const deleteCard = (cardName) => {
    setDeck((prev) => {
      const deck = [...prev];
      const cardIndex = deck.findIndex((unwanted) => {
        return unwanted.name === cardName;
      });

      if (cardIndex > -1) {
        deck.splice(cardIndex, 1);
      }

      setItem(deckName, deck);

      return deck;
    });
  };

  let content = null;

  if (!deck) {
    content = <Redirect to='/deck-list-manager' />;
  } else {
    content = (
      <>
        <Breadcrumb level={3} />
        <section className='flex flex-col sm:flex-row sm:justify-center'>
          <aside className='w-full flex-shrink-0 p-0 sm:p-2 sm:w-1/3 lg:w-1/4 border-r'>
            <SearchCard updateDeck={updateDeck} />
          </aside>
          <div className='flex-grow p-2'>
            <CardList
              name={deckName}
              deck={deck}
              deleteCard={deleteCard}
              deleteDeck={deleteDeck}
              clearDeck={clearDeck}
            />
          </div>
        </section>
      </>
    );
  }

  return content;
}
