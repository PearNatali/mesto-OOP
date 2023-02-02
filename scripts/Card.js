import { items } from '../utils/constans.js';
export class Card {
    constructor(name, link, openZoomPhoto, submitDataCard) {
        this._name = name;
        this._link = link;
        this._clickCard = openZoomPhoto;
        this._submitDataCard = submitDataCard;

        document
        .querySelector('.popup__content_item')
        .addEventListener('submit', this._submitDataCard);
    }
    _createCard() {
        const newItem = document
            .querySelector('.card-template')
            .content
            .querySelector('.card__item')
            .cloneNode(true);
        return newItem;
    }
    _setEventListeners() {
        this._element
        .querySelector('.card__button_like')
        .addEventListener('click', (evt) => {
            evt.target.classList.toggle('card__button_like_active');
        });
        this._element
        .querySelector('.card__button_delete')
        .addEventListener('click', (evt) => {
            evt.target.closest('.card__item').remove();
        });
        this._element
        .querySelector('.card__photo')
        .addEventListener('click', this._openZoomPhoto);
    }
    getDataCard() {
        this._element = this._createCard();
        this._setEventListeners();
        this._element.querySelector('.card__title').innerText = this._name;
        this._element.querySelector('.card__title').alt = this._name;
        this._element.querySelector('.card__photo').src = this._link;
        return this._element
    }
};
//-----------------------------------------------------------------------------------------------------------------
//Задаем функцию создания новой карточки:
//function createCard(link, name) {
    //Выборка DOM елеметов для других функций с карточками.
    //const cardTemplate = document.querySelector('.card-template').content; //Поиск контента темплит элемента.
    //const cardTemplateItem = cardTemplate.querySelector('.card__item');
    //const newItem = cardTemplateItem.cloneNode(true);
    //const cardPhoto = newItem.querySelector('.card__photo'); //Поиск внутри него картинки.
    //const cardTitle = newItem.querySelector('.card__title'); //Поиск внутри названия картинки. 
    //Передача данных карточек в templete - элемент:
    //cardPhoto.src = link;
    //cardPhoto.alt = name;
    //cardTitle.innerText = name;
    //Функция лайка:
    //const cardLikeButton = newItem.querySelector('.card__button_like'); //Лайк карточки;
    //cardLikeButton.addEventListener('click', function(event) {
    //    event.target.classList.toggle('card__button_like_active');
    //});
    //Функция удаления:
    //const cardDeleteButton = newItem.querySelector('.card__button_delete'); //Удаление карточки;
    //cardDeleteButton.addEventListener('click', function(event) {
    //    event.target.closest(newItem).remove();
    //});
    //Функция zoom картинки:
    //cardPhoto.addEventListener('click', function() {
            //openPopup(zoomPopup);
            //zoomPopupImg.src = link;
            //zoomPopupImg.alt = name;
            //zoomPopupTitle.innerText = name;  
        //});  
    //return newItem;
//};