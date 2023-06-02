import React, { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({
  isOpen,
  onUpdateUser,
  onLoading,
  onClose,
  onCloseOverlay,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm
      name="popupEditProfile"
      title="Редактировать профиль"
      buttonText={onLoading ? `Сохранение...` : `Сохранить`}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
    >
      <label className="popup__form-field">
        <input
          className="popup__input"
          minLength={2}
          maxLength={40}
          type="text"
          value={name || ""}
          onChange={handleChangeName}
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
          value={about || ""}
          onChange={handleChangeAbout}
          name="about"
          id="inputAbout"
          placeholder="О себе"
          required
        />
        <span className="inputAbout-error error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
