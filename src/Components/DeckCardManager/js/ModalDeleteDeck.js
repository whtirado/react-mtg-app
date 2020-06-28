import React from 'react';
import { useTransition, animated } from 'react-spring';

export default function ModalDeleteDeck({
  showModal,
  setShowModalDeleteDeck,
  deckName,
  deleteDeck,
}) {
  const modalMask = useTransition(showModal, null, {
    from: { position: 'fixed', opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  const modalDeleteDeck = useTransition(showModal, null, {
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
              onClick={() => {
                setShowModalDeleteDeck(false);
              }}
            ></animated.div>
          )
      )}
      {modalDeleteDeck.map(
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
                    Delete deck
                  </div>
                  <div className='text-indigo-800 py-2'>
                    Deleting deck cannot be undone. Delete deck?
                  </div>
                  <div className='flex justify-end'>
                    <button
                      onClick={() => {
                        setShowModalDeleteDeck(false);
                      }}
                      className='bg-gray-800 shadow font-bold py-1 px-2 mx-1 rounded text-white hover:shadow-md hover:bg-gray-900 hover:text-gray-100'
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        deleteDeck(deckName);
                        setShowModalDeleteDeck(false);
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
    </>
  );
}
