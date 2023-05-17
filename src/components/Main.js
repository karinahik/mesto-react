import React, { useState, useEffect } from "react"
import editPen from '../images/Editpen.svg'
import buttonEdit from '../images/Edit.svg'
import profileButton from '../images/plus.svg'
import Card from './Card'
import api from '../utils/Api'


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState("")
    const [userDescription, setUserDescription] = useState("")
    const [userAvatar, setUserAvatar] = useState("")
    const [cards, getCards] = useState([])

    useEffect(() => {
        api
            .getRealUserInfo()
            .then((profileUserInfo) => {
                setUserName(profileUserInfo.name)
                setUserDescription(profileUserInfo.about)
                setUserAvatar(profileUserInfo.avatar)
            })
            .catch((error) => console.log(`Ошибка: ${error}`))

        api
            .getCards()
            .then((cardsData) => {
                getCards(
                    cardsData.map((data) => ({
                        likes: data.likes,
                        name: data.name,
                        link: data.link,
                        cardId: data._id,
                    }))
                )
            })
            .catch((error) => console.log(`Ошибка: ${error}`))
    }, [])
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__cover">
                    <div className="profile__wrapper-relative">
                        <img className="profile__avatar-photo" src={userAvatar} alt=" аватарка" />
                        <button className="profile__edit-avatar" type="button" onClick={() => { onEditAvatar(true) }}>
                            <img className="profile__edit-pen" src={editPen} alt="изображение письменной ручки" />
                        </button>
                    </div>
                </div>
                <div className="profile__info">
                    <div className="profile__position">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__button-edit" type="button" onClick={() => { onEditProfile(true) }}>
                            <img src={buttonEdit} alt="кнопка" className="profile__button-image" />
                        </button>
                    </div>
                    <p className="profile__text">{userDescription}</p>
                </div>
                <button className="profile__button-plus" type="button" onClick={() => { onAddPlace(true) }}>
                    <img className="profile__button-img" src={profileButton} alt="Плюс" />
                </button>
            </section>
            <section className="cards">
                {cards.map((card) => (
                    <Card
                        key={card.cardId}
                        likes={card.likes}
                        name={card.name}
                        link={card.link}
                        onCardClick={onCardClick}
                    />
                ))}
            </section>
         
        </main>
    )
}



export default Main