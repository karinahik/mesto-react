import React from "react";
import closeButton from "../images/CloseIcon.svg";

function PopupWithForm({ name, title, buttonText, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button">
          <img
            className="popup__close-img"
            onClick={onClose}
            src={closeButton}
            alt="закрыть"
          />
        </button>
        <form className="popup__form" name={name}>
          <h2 className="popup__header">{title}</h2>
          {children}
          <button className="popup__save popup__save_disabled" type="submit">
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
