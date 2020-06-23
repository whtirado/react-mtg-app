import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ModalClearDeck from './ModalClearDeck';
import ModalDeleteDeck from './ModalDeleteDeck';

export default function ActionBar({
  deckName,
  deckCardLength,
  clearDeck,
  deleteDeck,
}) {
  const [showModalClearDeck, setShowModalClearDeck] = useState(false);
  const [showModalDeleteDeck, setShowModalDeleteDeck] = useState(false);

  return (
    <>
      {showModalClearDeck && (
        <ModalClearDeck
          showModal={showModalClearDeck}
          clearDeck={clearDeck}
          setShowModalClearDeck={setShowModalClearDeck}
        />
      )}

      {showModalDeleteDeck && (
        <ModalDeleteDeck
          showModal={showModalDeleteDeck}
          deckName={deckName}
          deleteDeck={deleteDeck}
          setShowModalDeleteDeck={setShowModalDeleteDeck}
        />
      )}

      <div className='sticky top-0 bg-white border-b border-indigo-700 mb-2'>
        <div className='flex justify-between shadow p-2'>
          <Link
            to='/deck-list-manager'
            className='flex items-center text-indigo-700'
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className='ml-1'>Back to Decks</span>
          </Link>
          <button
            onClick={() => {
              setShowModalDeleteDeck(true);
            }}
            className='bg-red-800 shadow font-bold py-1 px-2 ml-auto rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
          >
            Delete deck
          </button>
          {clearDeck && (
            <button
              onClick={() => {
                setShowModalClearDeck(true);
              }}
              className='bg-red-800 shadow font-bold py-1 px-2 ml-1 rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
            >
              Clear deck
            </button>
          )}
        </div>
        <div className='font-bold text-lg py-2 text-indigo-700'>
          {deckName}: {deckCardLength} card(s)
        </div>
      </div>
    </>
  );
}
