import React from "react";
import closeButton from "../images/CloseIcon.svg";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_img ${card.link ? "popup_opened" : ""}`}>
      <figure className="popup__img-container">
        <img className="popup__card-photo" src={card.link} alt={card.name} />
        <figcaption className="popup__header-img">{card.name}</figcaption>
        <button className="popup__close" type="button" onClick={onClose}>
          <img className="popup__close-img" src={closeButton} alt="закрыть" />
        </button>
      </figure>
    </div>
  );
}

export default ImagePopup;
