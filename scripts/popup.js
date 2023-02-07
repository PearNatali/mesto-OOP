//Функция закрытия попапа:
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupByOverlayClick);
  document.removeEventListener('keydown', closePopupOnEscape);
};
//-----------------------------------------------------------------------------------------------------------------
//Функция открытия попап (закрытие overlay, закрытие Esc).
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupByOverlayClick);
  document.addEventListener('keydown', closePopupOnEscape);
};
//Функция закрытия popup через Esc.
function closePopupOnEscape(evt) {
  if (evt.key === 'Escape') {
    const opendPopup = document.querySelector('.popup_opened');
    closePopup(opendPopup);
  }
};
  //-----------------------------------------------------------------------------------------------------------------
  //Функция закрытия popup через overlay. 
  function closePopupByOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      const opendPopup = document.querySelector('.popup_opened');
      closePopup(opendPopup);
    }
};