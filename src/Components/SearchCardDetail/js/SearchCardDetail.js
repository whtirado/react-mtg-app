import React, { useState, useRef } from 'react';
import { useGetAutoComplete } from '../../../Hooks/useAxios';
import SearchCardDetailResult from './SearchCardDetailResult';

export default function SearchCardDetail() {
  const refSearchTerm = useRef();
  const [showResults, setShowResults] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    q: '',
  });
  const httpRequest = useGetAutoComplete(searchQuery);
  const delay = 500;

  let timeout = null;

  const handleKeyUp = () => {
    const search = refSearchTerm.current.value;

    if (search.length > 1) {
      timeout = setTimeout(() => {
        setSearchQuery({
          q: search,
        });
      }, delay);

      if (!showResults) {
        setShowResults(true);
      }
    } else {
      setShowResults(false);
    }
  };

  const handleKeyDown = () => {
    clearTimeout(timeout);
  };

  const handleBlur = () => {
    // Delay to allow Link to trigger before blur
    setTimeout(() => {
      refSearchTerm.current.value = '';
      httpRequest.data = null;
      setShowResults(false);
    }, 250);
  };

  return (
    <>
      <div className='flex'>
        <input
          type='text'
          name='searchTerm'
          autoComplete='off'
          placeholder='Search card by name...'
          className='flex-grow border-2 border-indigo-700 rounded-full shadow px-4 py-2 my-2 mx-2
            focus:outline-none focus:shadow-outline hover:border-indigo-900
            sm:mx-0 sm:w-1/2 lg:w-1/3'
          ref={refSearchTerm}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onFocus={() => setShowResults(true)}
          onBlur={() => handleBlur()}
        />
      </div>
      {showResults && (
        <div className='flex'>
          <div className='flex-grow'>
            <SearchCardDetailResult results={httpRequest} />
          </div>
        </div>
      )}
    </>
  );
}
