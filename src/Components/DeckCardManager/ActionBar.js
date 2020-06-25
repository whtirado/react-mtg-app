import React, { useState } from 'react';
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
          <button
            onClick={() => {
              setShowModalDeleteDeck(true);
            }}
            className='bg-red-800 shadow font-bold py-1 px-2 rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
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
