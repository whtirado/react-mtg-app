import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleNotch,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';

export default function SearchCardDetailResult({ results }) {
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
    content = results.data.map((card) => {
      return (
        <Link
          to={{
            pathname: `/card-details/${card.data.name}`,
            state: {
              card: card.data,
            },
          }}
          key={card.data.name}
          className='flex items-center p-2 cursor-pointer text-indigo-800'
        >
          {card.data.card_faces && card.data.card_faces[0].image_uris && (
            <img
              className='rounded-full border shadow-md w-12 h-12'
              src={card.data.card_faces[0].image_uris.art_crop}
              alt={card.data.name}
            />
          )}
          {card.data.image_uris && (
            <img
              className='rounded-full border shadow-md w-12 h-12'
              src={card.data.image_uris.art_crop}
              alt={card.data.name}
            />
          )}
          <span className='ml-1'>{card.data.name}</span>
        </Link>
      );
    });
  } else if (results.data && !results.data.length) {
    content = (
      <div className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faExclamation} />
        <span className='ml-1'>Card not found</span>
      </div>
    );
  }

  return content;
}
