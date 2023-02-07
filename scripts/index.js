//Импорт кода в index.js.
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { items } from '../utils/constans.js';
import { openPopup, closePopup } from '../scripts/popup.js';
import { enableValidation } from '../enableValidation/enableValidation.js';
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для редактирования профиля.
const profilePopup = document.querySelector('.popup_profile'); //Сам попап по ред.профиля. 
const profileForm = profilePopup.querySelector('.popup__content_profile'); //Содержимое попапа.

const profilePopupInputName = profileForm.querySelector('.popup__input_type_name'); //Имя в попап.
const profilePopupInputJob = profileForm.querySelector('.popup__input_type_job'); //Профессия в попап.

const profileElement = document.querySelector('.profile'); //Форма внесения данных профиля
const profileName = profileElement.querySelector('.profile__title'); //Имя формы профиля.
const profileJob = profileElement.querySelector('.profile__subtitle'); //Профессия формы профиля.

const profileOpenButton = profileElement.querySelector('.profile__pen'); //Кнопка редактирования профиля. 
//-----------------------------------------------------------------------------------------------------------------
//Выборка DOM елеметов для добавления новых карточек.
const itemPopup = document.querySelector('.popup_item'); //Сам попап по доб.карточки.
const itemForm = itemPopup.querySelector('.popup__content_item'); //Содержание попап по доб.карточки. 

const itemPopupInputTitle = itemPopup.querySelector('.popup__input_type_title'); //Название места в попап.
const itemPopupInputLink = itemPopup.querySelector('.popup__input_type_link'); //Ссылка на картинку в попап.

const itemCardTable = document.querySelector('.card__table'); //Содержимое контейнера для новых карточек. 

const itemOpenButton = profileElement.querySelector('.profile__button'); //Кнопка добавления карточеки.
//-----------------------------------------------------------------------------------------------------------------
// Открытие попапа ред.профиля:
profileOpenButton.addEventListener('click', function() {
  openPopup(profilePopup);
  profilePopupInputName.value = profileName.innerText;
  profilePopupInputJob.value = profileJob.innerText;
});
//-----------------------------------------------------------------------------------------------------------------
// Открытие попапа доб.карточки:
itemOpenButton.addEventListener('click', function() {
  openPopup(itemPopup);
});
//-----------------------------------------------------------------------------------------------------------------
//Универсальная функция закрытия для всх попапов:
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup))
});
//---------------------------------------------------------------------------------------------------------------
//Инициализация класса создания карточки:
function addCard(name, link) {
  const card = new Card(name, link).getDataCard();
  itemCardTable.prepend(card);
}
//-----------------------------------------------------------------------------------------------------------------
//Перебор карточек:
items.forEach((item) => {
  addCard(item.name, item.link)
});
//-----------------------------------------------------------------------------------------------------------------
//Навешивание слушателя по сохранению данных новой карточки.
itemForm.addEventListener('submit', submitItemElement);
//-----------------------------------------------------------------------------------------------------------------
//Функция сохранения новой карточки:
function submitItemElement(evt) {
  evt.preventDefault();
  addCard(itemPopupInputTitle.value, itemPopupInputLink.value);
  itemForm.reset();
  closePopup(itemPopup);
};
//-----------------------------------------------------------------------------------------------------------------
//Изменение значений в шапке профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  const name = profilePopupInputName.value;
  const job = profilePopupInputJob.value;
  profileName.textContent = name;
  profileJob.textContent = job;
  closePopup(profilePopup);
};
//-----------------------------------------------------------------------------------------------------------------
//Навешивание слушателя по сохранению данных ред.профиля.
profileForm.addEventListener('submit', handleProfileFormSubmit);
//-----------------------------------------------------------------------------------------------------------------
//Инициализация класса валидации:
const profileValidation = new FormValidator(enableValidation, profilePopup);
const itemValidation = new FormValidator(enableValidation, itemPopup);
profileValidation.enableValidation();
itemValidation.enableValidation();