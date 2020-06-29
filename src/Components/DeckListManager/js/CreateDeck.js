import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faTimes,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

export default function CreateDeck({ addNewDeck }) {
  const { register, handleSubmit } = useForm();
  const [showNewDeckForm, setShowNewDeckForm] = useState(false);

  const formSubmit = ({ deckName }) => {
    addNewDeck(deckName);
    setShowNewDeckForm(false);
  };

  return (
    <>
      <button
        onClick={() => setShowNewDeckForm(true)}
        className='flex items-center justify-center w-full bg-indigo-800 py-2 shadow font-bold rounded text-white
          hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
      >
        <FontAwesomeIcon icon={faPlusCircle} />
        <span className='ml-1'>New</span>
      </button>
      {showNewDeckForm && (
        <form
          onSubmit={handleSubmit(formSubmit)}
          className='flex flex-col'
          noValidate
        >
          <input
            type='text'
            name='deckName'
            placeholder='Deck name...'
            autoComplete='off'
            className='border shadow rounded p-2 my-2 focus:outline-none focus:shadow-outline'
            ref={register({
              required: true,
              minLength: 3,
            })}
          />
          <div className='flex'>
            <button
              type='submit'
              onClick={() => setShowNewDeckForm(false)}
              className='flex-grow bg-indigo-800 shadow font-bold py-2 rounded-l text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
            >
              <FontAwesomeIcon icon={faTimes} />
              <span className='ml-1'>Cancel</span>
            </button>
            <button
              type='submit'
              className='flex-grow bg-indigo-800 shadow font-bold py-2 rounded-r text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
            >
              <FontAwesomeIcon icon={faPlay} />
              <span className='ml-1'>Create</span>
            </button>
          </div>
        </form>
      )}
    </>
  );
}
