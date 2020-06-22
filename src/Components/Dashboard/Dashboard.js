import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  return (
    <section className='flex sm:justify-center'>
      <article className='w-full border shadow-md rounded p-2 m-2 border-indigo-700 sm:w-1/2 lg:w-1/3'>
        <header className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
          Manage Decks
        </header>
        <div className='text-indigo-800 py-2'>Create and save decks.</div>
        <footer className='flex'>
          <Link
            to='/deck-list-manager'
            className='bg-indigo-800 shadow font-bold py-1 px-2 ml-auto rounded text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100 '
          >
            <FontAwesomeIcon icon={faListAlt} />
            <span className='ml-1'>Deck manager</span>
          </Link>
        </footer>
      </article>
    </section>
  );
}
