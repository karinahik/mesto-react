import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({
  onClose,
  onAddPlace,
  onLoading,
  isOpen,
  onCloseOverlay,
}) {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  useEffect(() => {
    setPlaceName("");
    setPlaceLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }

  function handleChangePlaceName(e) {
    setPlaceName(e.target.value);
  }

  function handleChangePlaceLink(e) {
    setPlaceLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="popupAddPlace"
      title="Новое место"
      buttonText={onLoading ? `Сохранение` : `Создать`}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
    >
      <label className="popup__form-field">
        <input
          className="popup__input"
          minLength={2}
          maxLength={30}
          type="text"
          value={placeName}
          onChange={handleChangePlaceName}
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
          value={placeLink}
          onChange={handleChangePlaceLink}
          id="inputLink"
          required
        />
        <span className="inputLink-error error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
