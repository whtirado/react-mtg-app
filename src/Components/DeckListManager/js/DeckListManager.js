import React from 'react';
import useLocalStorage from '../../../Hooks/useLocalStorage';
import { useState } from 'react';
import Decks from './Decks';
import CreateDeck from './CreateDeck';
import Breadcrumb from '../../Breadcrumb';

export default function DeckListManager() {
  const { setItem, getAllItems } = useLocalStorage();
  const [decks, setDecks] = useState(getAllItems());

  const addNewDeck = (deckName) => {
    setItem(deckName, []);
    setDecks(getAllItems());
  };

  return (
    <>
      <Breadcrumb level={2} />
      <section className='flex flex-col sm:flex-row sm:justify-center'>
        <aside className='w-full flex-shrink-0 px-2 pt-2 pb-0 sm:w-1/3 lg:w-1/4 border-r'>
          <CreateDeck addNewDeck={addNewDeck} />
        </aside>
        <div className='flex-grow p-2'>
          <Decks decks={decks} />
        </div>
      </section>
    </>
  );
}
