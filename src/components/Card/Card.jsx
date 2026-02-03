import React from 'react';

function Card({ title, image, children }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title || 'Card image'}
        />
      )}

      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {children}
      </div>
    </div>
  );
}

export default Card;
