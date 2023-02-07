//Импорт кода в Card.js.
import { openPopup } from '../scripts/popup.js';
//-----------------------------------------------------------------------------------------------------------------
//Создание класса карточки:
export class Card {
    constructor(name, link) {
        this._name = name;
        this._link = link;
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод создания нового теплита карточки:
    _createCard() {
        const newItem = document
            .querySelector('.card-template')
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
        .addEventListener('click', () => this._openZoomPhoto());
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод открытия зума карточки:
    _openZoomPhoto() {
        const zoomPopup = document.querySelector('.popup_zoom');
        const zoomImg = zoomPopup.querySelector('.popup__img_zoom'); //Картинка в карточке;
        const zoomTitle = zoomPopup.querySelector('.popup__title_zoom'); //Подпись карточки;
        openPopup(zoomPopup);
        zoomImg.alt = this._name;
        zoomImg.src = this._link;
        zoomTitle.innerText = this._name;
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Метод передачи данных в карточку:
    getDataCard() {
        this._element = this._createCard();
        this._setEventListeners();
        this._element.querySelector('.card__title').innerText = this._name;
        this._element.querySelector('.card__title').alt = this._name;
        this._element.querySelector('.card__photo').src = this._link;
        return this._element
    }
};