import React from "react";
import closeButton from "../images/CloseIcon.svg";

function PopupWithForm({
  name,
  title,
  buttonText,
  children,
  isOpen,
  onSubmit,
  onClose,
  onCloseOverlay,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onCloseOverlay}
    >
      <div className="popup__container">
        <button className="popup__close" type="button">
          <img
            className="popup__close-img"
            onClick={onClose}
            src={closeButton}
            alt="закрыть"
          />
        </button>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h2 className="popup__header">{title}</h2>
          {children}
          <button className="popup__save" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
