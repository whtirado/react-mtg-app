import React, { useRef, useState } from 'react';
import { useGetAutoComplete } from '../../../Hooks/useAxios';
import SearchCardResults from './SearchCardResults';

export default function SearchCard({ updateDeck }) {
  const refSearchTerm = useRef();
  const [showResults, setShowResults] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    q: '',
  });
  const httpRequest = useGetAutoComplete(searchQuery);
  const delay = 1000;

  let timeout = null;

  const handleKeyUp = () => {
    const search = refSearchTerm.current.value;

    if (search.length > 1) {
      timeout = setTimeout(() => {
        setSearchQuery({
          q: search,
        });
      }, delay);
    }
  };

  const handleKeyDown = () => {
    clearTimeout(timeout);
  };

  return (
    <>
      <div className='flex'>
        <input
          type='text'
          name='searchTerm'
          autoComplete='off'
          placeholder='Add card to deck...'
          className='flex-grow border-2 border-indigo-700 rounded-full shadow px-4 py-2 my-2 mx-2
            focus:outline-none focus:shadow-outline hover:border-indigo-900
            sm:mx-0 sm:w-1/2 lg:w-1/3'
          ref={refSearchTerm}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onFocus={() => setShowResults(true)}
        />
      </div>
      {showResults && (
        <div className='flex'>
          <div className='flex-grow'>
            <SearchCardResults results={httpRequest} updateDeck={updateDeck} />
          </div>
        </div>
      )}
    </>
  );
}
