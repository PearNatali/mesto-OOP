export class FormValidator {
    constructor(formSelector, inputSelector, 
        submitButtonSelector, inactiveButtonClass, 
        inputErrorClass, inputList) {
            this._formSelector = formSelector;
            this._inputSelector = inputSelector;
            this._submitButtonSelector = submitButtonSelector;
            this._inactiveButtonClass = inactiveButtonClass;
            this._inputErrorClass = inputErrorClass;
            this._inputList = inputList;
            this._inputElement = inputElement;
            this._errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`)
    }
    //Функция с вложенным объектом. Поиск всех form.
    enableValidation = () => {
        this._setFormValidation();
    }
    //Функция последовательнй проверки на валидность (последовательность). 
    _setFormValidation = () => {
        this._inputList.forEach(() => { 
            this._inputList.addEventListener('input', () => {
                this._toggleInputErrorState(); 
                this._toggleButtonState(); 
            });
        });
    }
    //Функция включения валидации.
    _hasInvalidInput = () => {
        return this._inputList.some(() => !this._inputElement.validity.valid)
    }
    //Функция отключения/включения кнопки. 
    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._enableButton();
        } else {
            this._disableButton();
        }
    }
    //Функция режима лайф отображения ошибок. 
    _toggleInputErrorState = () => {
        if (!this._inputElement.validity.valid) { 
            this._showInputError(this._inputElement.validationMessage)
        } else {
            this._hideInputError();
        }
    }
    //Функция активации кнопки.
    _enableButton() {
        this._submitButtonSelector.setAttribute('disabled', ''); 
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
    };
    //Функция деактивации кнопки.
    _disableButton() {
        this._submitButtonSelector.removeAttribute('disabled'); 
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    };
    //Функция отображения браузерных ошибок. 
    showInputError = () => {
        this._inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = errorText;
    };
    //Функция исключения отображения ошибок. 
    _hideInputError = () => {
        this._inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.textContent = '';
    }
}

