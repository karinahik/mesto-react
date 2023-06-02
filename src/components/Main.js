import React from "react";
import editPen from "../images/Editpen.svg";
import buttonEdit from "../images/Edit.svg";
import profileButton from "../images/plus.svg";
import Card from "./Card";

import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onDeletedCard,
  onConfirmationPopup,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__cover">
          <div className="profile__wrapper-relative">
            <img
              className="profile__avatar-photo"
              src={currentUser.avatar}
              alt="аватарка"
            />
            <button
              className="profile__edit-avatar"
              type="button"
              onClick={() => {
                onEditAvatar(true);
              }}
            >
              <img
                className="profile__edit-pen"
                src={editPen}
                alt="изображение письменной ручки"
              />
            </button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__position">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__button-edit"
              type="button"
              onClick={() => {
                onEditProfile(true);
              }}
            >
              <img
                src={buttonEdit}
                alt="кнопка"
                className="profile__button-image"
              />
            </button>
          </div>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-plus"
          type="button"
          onClick={() => {
            onAddPlace(true);
          }}
        >
          <img className="profile__button-img" src={profileButton} alt="Плюс" />
        </button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardDelete={onDeletedCard}
            onCardLike={onCardLike}
            onConfirmationPopup={onConfirmationPopup}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
