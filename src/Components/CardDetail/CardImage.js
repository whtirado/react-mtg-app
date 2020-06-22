import React from 'react';

export default function CardImage({ name, image, faces }) {
  let content = null;

  if (image) {
    content = <img className='w-full' src={image.border_crop} alt={name} />;
  } else if (faces) {
    content = (
      <div className='flex flex-col'>
        {faces.map((face) => {
          return (
            <img
              key={face.illustration_id}
              className='w-full'
              src={face.image_uris.border_crop}
              alt={name}
            />
          );
        })}
      </div>
    );
  }

  return content;
}
