import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <section className='flex sm:justify-center'>
      <article className='w-full border shadow-md rounded p-2 m-2 border-indigo-700 sm:w-1/2 lg:w-1/3'>
        <header className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
          Welcome to MTG Matchmaking
        </header>
        <div className='text-indigo-800 py-2'>
          A free service for those who enjoy Magic The Gathering. Build decks in
          all formats and challenge your friends.
        </div>
        <footer className='flex'>
          <Link
            to='/dashboard'
            className='bg-indigo-800 shadow font-bold py-1 px-2 ml-auto rounded text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100'
          >
            <FontAwesomeIcon icon={faPlayCircle} />
            <span className='ml-1'>Dashboard</span>
          </Link>
        </footer>
      </article>
    </section>
  );
}
