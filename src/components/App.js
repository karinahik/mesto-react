import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onCardClick={setSelectedCard}
      />

      <Footer />

      <PopupWithForm
        name="popupEditProfile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input
            className="popup__input"
            minLength={2}
            maxLength={40}
            type="text"
            name="name"
            id="inputName"
            placeholder="Имя"
            required
          />
          <span className="inputName-error error" />
        </label>
        <label className="popup__form-field">
          <input
            className="popup__input"
            minLength={2}
            maxLength={200}
            type="text"
            name="about"
            id="inputAbout"
            placeholder="О себе"
            required
          />
          <span className="inputAbout-error error" />
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="popupAddPlace"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input
            className="popup__input"
            minLength={2}
            maxLength={30}
            type="text"
            name="name"
            id="inputMesto"
            placeholder="Название"
            required
          />
          <span className="inputMesto-error error" />
        </label>
        <label className="popup__form-field">
          <input
            className="popup__input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            id="inputLink"
            required
          />
          <span className="inputLink-error error" />
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="popupConfirmation"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>

      <PopupWithForm
        name="popupEditAvatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__form-field">
          <input
            id="nameInputAvatar"
            className="popup__input popup__input_type_link-avatar"
            name="avatar"
            type="url"
            placeholder="Введите ссылку URL"
            required
          />
          <span className="nameInputAvatar-error error" />
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
