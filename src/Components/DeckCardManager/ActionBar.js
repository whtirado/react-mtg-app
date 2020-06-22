import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

export default function ActionBar({ clearDeck, hideClearButton }) {
  // Add modal confirm box for clearing deck
  const [showModal, setShowModal] = useState(false);

  const modalMask = useTransition(showModal, null, {
    from: { position: 'fixed', opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  const modal = useTransition(showModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {modalMask.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className='fixed top-0 left-0 w-full h-full bg-black z-50 cursor-pointer'
              key={key}
              style={props}
              onClick={() => setShowModal(false)}
            ></animated.div>
          )
      )}
      {modal.map(
        ({ item, key, props }) =>
          item && (
            <div className=''>
              <animated.div
                className='fixed border rounded shadow w-11/12 sm:w-1/2 bg-white z-50'
                key={key}
                style={props}
              >
                <div className='p-3'>
                  <div className='pb-2 border-b border-indigo-700 font-bold text-indigo-800'>
                    Clear deck
                  </div>
                  <div className='text-indigo-800 py-2'>
                    Clearing deck cannot be undone. Clear deck?
                  </div>
                  <div className='flex justify-end'>
                    <button
                      onClick={() => setShowModal(false)}
                      className='bg-gray-800 shadow font-bold py-1 px-2 mx-1 rounded text-white hover:shadow-md hover:bg-gray-900 hover:text-gray-100'
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        clearDeck();
                        setShowModal(false);
                      }}
                      className='bg-red-800 shadow font-bold py-1 px-2 rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </animated.div>
            </div>
          )
      )}
      <div className='flex justify-between shadow p-2 sticky top-0 bg-white'>
        <Link
          to='/deck-list-manager'
          className='flex items-center text-indigo-700'
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span className='ml-1'>Back to Decks</span>
        </Link>
        {!hideClearButton && (
          <button
            // onClick={() => clearDeck()}
            onClick={() => setShowModal(true)}
            className='bg-red-800 shadow font-bold py-1 px-2 ml-auto rounded text-white hover:shadow-md hover:bg-red-900 hover:text-red-100'
          >
            Clear deck
          </button>
        )}
      </div>
    </>
  );
}
