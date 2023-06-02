import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import buttonClose from "../images/Trash.svg";
import cardLike from "../images/Group.svg";

function Card({
  card,
  onCardLike,
  onCardDelete,
  onCardClick,
  onConfirmationPopup,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = card.likes.some((user) => user._id === currentUser._id);
  const likeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;
  const isOwner = card.owner._id === currentUser._id;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
    onConfirmationPopup(true);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      {isOwner && (
        <button className="card__delete" type="button">
          <img
            className="card__delete-img"
            src={buttonClose}
            alt="Удалить"
            onClick={handleDeleteClick}
          />
        </button>
      )}
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
            <button
              className={likeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            >
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
