import React from 'react';
import SearchCardDetail from '../SearchCardDetail';
import NavigationBreadcrumb from './NavigationBreadcrumb';

export default function Header() {
  return (
    <header>
      <div className='text-indigo-900 text-center text-lg p-3 border-b'>
        MTG Matchmaking System 1.0.0
      </div>
      <div className='bg-indigo-900 text-center py-4 md:px-4'>
        <div
          className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none md:rounded-full flex md:inline-flex'
          role='alert'
        >
          <span className='font-semibold mr-2 text-left flex-auto'>
            Build your decks. Draw practice hands or create a room to challlenge
            a friend.
          </span>
        </div>
      </div>
      <div className='border-b border-indigo-700 flex sm:justify-center'>
        <div className='w-full sm:w-1/2 lg:w-1/3'>
          <SearchCardDetail />
        </div>
      </div>
      <NavigationBreadcrumb />
    </header>
  );
}
