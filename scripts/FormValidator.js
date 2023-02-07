//Импорт кода в FormValidator.js.
import { enableValidation } from '../enableValidation/enableValidation.js';
//-----------------------------------------------------------------------------------------------------------------
//Создание класса Валидации:
export class FormValidator {
    constructor(enableValidation, formSelector) {
            this._formSelector = formSelector;

            this._inputList = Array.from(formSelector.querySelectorAll(enableValidation.inputSelector));
            this._submitButtonSelector = formSelector.querySelector(enableValidation.submitButtonSelector);
            this._inputErrorClass = enableValidation.inputErrorClass;
            this._inactiveButtonClass = enableValidation.inactiveButtonClass;
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Функция с вложенным объектом. Поиск всех form.
    enableValidation() {
        this._setFormValidation();
    }
    //-----------------------------------------------------------------------------------------------------------------
    //Функция последовательнй проверки на валидность (последовательность). 
    _setFormValidation() {
        this._inputList.forEach((inputElement) => { 
            inputElement.addEventListener('input', () => {
                this._toggleInputErrorState(inputElement); 
                this._toggleButtonState(); 
            });
        });
    };
    //-----------------------------------------------------------------------------------------------------------------
    //Функция режима лайф отображения ошибок. 
    _toggleInputErrorState(inputElement) {
        const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
        if (!inputElement.validity.valid) { 
            this._showInputError(inputElement, errorElement)
        } else {
            this._hideInputError(inputElement, errorElement);
        }
    }
    //-----------------------------------------------------------------------------------------------------------------
    //Функция отображения браузерных ошибок. 
    _showInputError(inputElement, errorElement) {
        errorElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);
    }
    //-----------------------------------------------------------------------------------------------------------------
    //Функция исключения отображения ошибок. 
    _hideInputError(inputElement, errorElement) {
        errorElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        inputElement.classList.remove(this._inputErrorClass);
    }
    //-----------------------------------------------------------------------------------------------------------------
    //Функция отключения/включения кнопки. 
    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            //активация кнопки.
            this._submitButtonSelector.classList.add('popup__submit_disable');
            this._submitButtonSelector.disabled = true;
        } else {
            //деактивация кнопки.
            this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
            this._submitButtonSelector.disabled = false;
        }
    }
    //-----------------------------------------------------------------------------------------------------------------
    //Функция включения валидации.
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => !inputElement.validity.valid);
    }
}

