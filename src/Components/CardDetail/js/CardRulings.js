import React from 'react';
import { useGetCardRulings } from '../../../Hooks/useAxios';

export default function CardRulings({ rulingsAPI }) {
  const httpRequest = useGetCardRulings(rulingsAPI);

  let content = null;

  if (httpRequest.loading) {
    content = <div className='px-2'>Loading rulings...</div>;
  } else if (httpRequest.error) {
    content = <div className='px-2'>Error loading rulings...</div>;
  } else if (httpRequest.data && httpRequest.data.data.length) {
    content = (
      <div className='px-2'>
        {httpRequest.data.data.map((rule, index) => {
          return (
            <div key={index}>
              <div>{rule.published_at}</div>
              <div className='overflow-x-hidden'>{rule.comment}</div>
            </div>
          );
        })}
      </div>
    );
  } else {
    content = <div className='px-2'>No rulings found.</div>;
  }

  return content;
}
