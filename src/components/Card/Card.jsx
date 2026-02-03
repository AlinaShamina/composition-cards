import React from 'react';

/**
 * @param {string} title - заголовок карточки
 * @param {string} image - ссылка на изображение
 * @param {React.ReactNode} children - содержимое карточки
 */
function Card({ title, image, children }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        <div className="card-text">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
