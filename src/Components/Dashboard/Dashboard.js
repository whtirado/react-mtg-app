import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListAlt,
  faCodeBranch,
  faChevronRight,
  faListUl,
  faProjectDiagram,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../Breadcrumb';

export default function Dashboard() {
  return (
    <>
      <Breadcrumb level={1} />
      <section className='flex flex-col p-2 sm:items-center'>
        <article className='w-full border shadow-md rounded p-2 my-1 border-indigo-700 sm:w-1/2 lg:w-1/3'>
          <header className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
            <FontAwesomeIcon icon={faBoxOpen} /> Manage Decks
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
        <article className='w-full border shadow-md rounded p-2 my-1 border-indigo-700 sm:w-1/2 lg:w-1/3'>
          <header className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
            <FontAwesomeIcon icon={faProjectDiagram} /> Project
          </header>
          <div className='text-indigo-800 py-2'>
            Find source code of this project in my Github repos
          </div>
          <footer className='flex'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/whtirado/react-mtg-app'
              className='bg-indigo-800 shadow font-bold py-1 px-2 ml-auto rounded text-white hover:shadow-md hover:bg-indigo-900 hover:text-indigo-100 '
            >
              <FontAwesomeIcon icon={faCodeBranch} />
              <span className='ml-1'>Github Repo</span>
            </a>
          </footer>
        </article>
        <article className='w-full border shadow-md rounded p-2 my-1 border-indigo-700 sm:w-1/2 lg:w-1/3'>
          <header className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
            <FontAwesomeIcon icon={faListUl} /> About app
          </header>
          <div className='text-indigo-800 py-2'>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Data is persisted
                through LocalStorage
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Manage decks
              </li>
            </ul>
          </div>
        </article>
        <article className='w-full border shadow-md rounded p-2 my-1 border-indigo-700 sm:w-1/2 lg:w-1/3'>
          <header className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
            <FontAwesomeIcon icon={faListUl} /> Upcoming Features
          </header>
          <div className='text-indigo-800 py-2'>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Limit cards to 4 each
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Draw practice hands
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Host a Express.js
                server
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Persist data to a
                MongoDB database
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} /> Challenge friends (Web
                Sockets)
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
