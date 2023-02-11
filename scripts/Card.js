//Импорт кода в Card.js.
import { openPopup } from '../scripts/popup.js';
//-----------------------------------------------------------------------------------------------------------------
//Создание класса карточки:
export class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;

        this._zoomPopup = document.querySelector('.popup_zoom');
        this._zoomImg = document.querySelector('.popup__img_zoom');
        this._zoomTitle = document.querySelector('.popup__title_zoom');
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод создания нового теплита карточки:
    _createCard() {
        const newItem = 
        this._templateSelector
        .content
        .querySelector('.card__item')
        .cloneNode(true);
        return newItem;
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод задания свойств карточке:
    _setEventListeners() {
        this._element
        .querySelector('.card__button_like')
        .addEventListener('click', (evt) => this._toggleLike(evt));

        this._element
        .querySelector('.card__button_delete')
        .addEventListener('click', (evt) => this._deleteCard(evt));

        this._element
        .querySelector('.card__photo')
        .addEventListener('click', () => this._handleImageClick());
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод лайка карточки:
    _toggleLike(evt) {
        evt.target.classList.toggle('card__button_like_active');
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод удаления карточки:
    _deleteCard(evt) {
        evt.target.closest('.card__item').remove();
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод открытия зума карточки:
    _handleImageClick() {
        openPopup(this._zoomPopup);
        this._zoomImg.alt = this._name;
        this._zoomImg.src = this._link;
        this._zoomTitle.innerText = this._name;
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод передачи данных в карточку:
    getDataCard() {
        this._element = this._createCard();
        this._element.querySelector('.card__title').innerText = this._name;
        this._element.querySelector('.card__photo').alt = this._name;
        this._element.querySelector('.card__photo').src = this._link;
        this._setEventListeners();
        return this._element
    }
};