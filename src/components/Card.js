import React from "react";
import buttonClose from "../images/Trash.svg";
import cardLike from "../images/Group.svg";

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }

  return (
    <div className="card">
      <button className="card__delete" type="button">
        <img className="card__delete-img" src={buttonClose} alt="Удалить" />
      </button>
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__group">
        <div className="card__description">
          <h2 className="card__text">{card.name}</h2>
          <div className="card__container-like">
            <button className="card__like-button" type="button">
              <img className="card__like" src={cardLike} alt="Изображение" />
            </button>
            <p className="card__count-like">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
