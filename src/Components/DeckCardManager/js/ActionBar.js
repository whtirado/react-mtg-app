import React, { useState } from 'react';
import ModalClearDeck from './ModalClearDeck';
import ModalDeleteDeck from './ModalDeleteDeck';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPaper,
  faEraser,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

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

      <div className='bg-white border-b border-indigo-700 mb-2'>
        <div className='flex items-center shadow p-2'>
          {deckCardLength > 59 && (
            <Link
              to={`/practice-hands/${deckName}`}
              onClick={(e) => {
                if (deckCardLength < 60) {
                  e.preventDefault();
                }
              }}
              className='flex items-center bg-indigo-800 shadow font-bold py-1 px-2 rounded text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
            >
              <FontAwesomeIcon icon={faHandPaper} />
              <span className='ml-1'>Draw hand</span>
            </Link>
          )}
          <button
            onClick={() => {
              setShowModalDeleteDeck(true);
            }}
            className='flex items-center bg-red-800 shadow font-bold py-1 px-2 ml-auto rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
          >
            <FontAwesomeIcon icon={faTrashAlt} />
            <span className='ml-1'>Delete</span>
          </button>
          {clearDeck && (
            <button
              onClick={() => {
                setShowModalClearDeck(true);
              }}
              className='flex items-center bg-red-800 shadow font-bold py-1 px-2 ml-1 rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
            >
              <FontAwesomeIcon icon={faEraser} />
              <span className='ml-1'>Clear</span>
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
