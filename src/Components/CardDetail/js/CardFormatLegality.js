import React from 'react';

export default function CardFormatLegality({ legalities }) {
  return (
    <div className=''>
      <div className='p-2 sm:pt-0 flex flex-wrap'>
        {Object.entries(legalities).map((data) => {
          const [format, legal] = data;
          return (
            <div
              key={format}
              className={`border p-1 rounded shadow font-bold text-white ${
                legal === 'legal' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {format.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
