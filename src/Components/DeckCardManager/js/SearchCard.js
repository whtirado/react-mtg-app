import React, { useRef, useState } from 'react';
import { useGetAutoComplete } from '../../../Hooks/useAxios';
import SearchCardResults from './SearchCardResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

  const handleClearResults = () => {
    if (refSearchTerm.current.value.length) {
      refSearchTerm.current.value = '';
      httpRequest.data = null;
      setShowResults(false);
    }
  };

  return (
    <>
      <div className='flex items-center p-2'>
        <input
          type='text'
          name='searchTerm'
          autoComplete='off'
          placeholder='Add card to deck...'
          className='flex-grow min-w-0 border-2 border-indigo-700 rounded-l-full shadow px-4 py-2
            focus:outline-none focus:shadow-outline hover:border-indigo-900'
          ref={refSearchTerm}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onFocus={() => setShowResults(true)}
        />
        <button
          type='reset'
          className='bg-white border-2 border-l-0 border-indigo-700 rounded-r-full py-2 px-3 text-indigo-700
          focus:outline-none focus:shadow-outline hover:border-indigo-900'
          onClick={handleClearResults}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {showResults && (
        <div className='flex'>
          <div className='flex-grow'>
            <SearchCardResults
              results={httpRequest}
              updateDeck={updateDeck}
              clearResults={handleClearResults}
            />
          </div>
        </div>
      )}
    </>
  );
}
