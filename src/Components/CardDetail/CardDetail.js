import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCardDetails } from '../../Hooks/useAxios';
import CardRulings from './CardRulings';
import CardFormatLegality from './CardFormatLegality';
import CardImage from './CardImage';
import Breadcrumb from '../Breadcrumb';

export default function CardDetail({ location }) {
  let { cardName } = useParams();
  const fromAutocomplete = location.state && location.state.card;

  if (fromAutocomplete) {
    cardName = '';
  }

  const httpRequest = useGetCardDetails(cardName);
  httpRequest.data = fromAutocomplete ? location.state.card : httpRequest.data;

  let content = null;

  if (!fromAutocomplete && httpRequest.loading) {
    content = <div className='px-2'>Loading card details...</div>;
  } else if (httpRequest.data) {
    const { image_uris, card_faces } = httpRequest.data;

    content = (
      <>
        <Breadcrumb level={3} />
        <div className='flex flex-col sm:flex-row sm:justify-center mt-0 sm:mt-2'>
          <div className='w-full sm:w-1/3 lg:w-1/5'>
            <CardImage name={cardName} image={image_uris} faces={card_faces} />
          </div>
          <div className='w-full sm:w-1/3'>
            <CardFormatLegality legalities={httpRequest.data.legalities} />
            <CardRulings rulingsAPI={httpRequest.data.rulings_uri} />
          </div>
        </div>
      </>
    );
  } else if (!fromAutocomplete && httpRequest.error) {
    content = <div className='px-2'>Error loading card details...</div>;
  } else {
    content = <div className='px-2'>No card data found for {cardName}</div>;
  }

  return content;
}
