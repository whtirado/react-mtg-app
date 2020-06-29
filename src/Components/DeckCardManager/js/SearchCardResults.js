import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleNotch,
  faExclamation,
  faInfoCircle,
  faEraser,
} from '@fortawesome/free-solid-svg-icons';

export default function SearchCardResults({
  results,
  updateDeck,
  clearResults,
}) {
  const manageCardType = (card) => {
    let cardType = null;

    if (card.includes('creature')) {
      cardType = 13;
    } else if (card.includes('planeswalker')) {
      cardType = 12;
    } else if (card.includes('instant')) {
      cardType = 11;
    } else if (card.includes('sorcery')) {
      cardType = 10;
    } else if (card.includes('enchantment')) {
      cardType = 9;
    } else if (card.includes('artifact')) {
      cardType = 8;
    } else if (card.includes('phenomenon')) {
      cardType = 7;
    } else if (card.includes('plane')) {
      cardType = 6;
    } else if (card.includes('conspiracy')) {
      cardType = 5;
    } else if (card.includes('scheme')) {
      cardType = 4;
    } else if (card.includes('tribal')) {
      cardType = 3;
    } else if (card.includes('vanguard')) {
      cardType = 2;
    } else if (card.includes('basic')) {
      cardType = 1;
    } else if (card.includes('land')) {
      cardType = 0;
    } else {
      cardType = -1;
    }

    return cardType;
  };

  const addNewCard = (data) => {
    const newCard = {
      name: data.name,
      cmc: data.cmc,
      type: manageCardType(data.type_line.toLowerCase()),
      qty: 1,
      url: data.image_uris
        ? data.image_uris.small
        : data.card_faces[0].image_uris.small,
    };

    updateDeck(newCard);
  };

  let content = null;

  if (results.loading) {
    content = (
      <div className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faCircleNotch} spin />
        <span className='ml-1'>Loading...</span>
      </div>
    );
  } else if (results.error) {
    content = (
      <div className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faExclamation} />
        <span className='ml-1'>Error loading data</span>
      </div>
    );
  } else if (results.data && results.data.length) {
    content = (
      <>
        {results.data.map((card) => {
          return (
            <button
              key={card.data.name}
              onClick={() => addNewCard(card.data)}
              className='w-full flex items-center p-2 cursor-pointer text-indigo-800 outline-none'
            >
              {card.data.card_faces && card.data.card_faces[0].image_uris && (
                <img
                  className='rounded border shadow-md w-12 h-12'
                  src={card.data.card_faces[0].image_uris.art_crop}
                  alt={card.data.name}
                />
              )}
              {card.data.image_uris && (
                <img
                  className='rounded border shadow-md w-12 h-12'
                  src={card.data.image_uris.art_crop}
                  alt={card.data.name}
                />
              )}
              <span className='ml-1'>{card.data.name}</span>
            </button>
          );
        })}
        <div className='flex'>
          <button
            onClick={() => clearResults()}
            className='flex-grow items-center bg-blue-500 shadow font-bold py-1 px-2 m-2 rounded text-white hover:shadow-md hover:bg-blue-700 hover:text-blue-100 focus:outline-none focus:shadow-outline'
          >
            <FontAwesomeIcon icon={faEraser} />
            <span className='ml-1'>Clear results</span>
          </button>
        </div>
      </>
    );
  } else if (results.data && !results.data.length) {
    content = (
      <div className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faExclamation} />
        <span className='ml-1'>Card not found</span>
      </div>
    );
  } else {
    content = (
      <div className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faInfoCircle} />
        <span className='ml-1'>Search for cards to add to deck</span>
      </div>
    );
  }

  return content;
}
