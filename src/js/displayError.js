/**
 * @function displayErrorElement
 * @description Отображает/скрывает блок с сообщением об ошибке загрузки данных
 * @param {Boolean} [error=true] - Индикатор ошибки. По умолчанию: true
 * @param {String} [errorMessage] - сообщение об ошибке. Показывается в случае,
 * если данные повреждены или не были получены
 * @returns {Boolean}
 */
export default function displayErrorElement(error = true, errorMessage) {
    const errorElement = document.querySelector('#error');

    if (!error) {
        errorElement.style.display = 'none';
    }

    if (errorMessage) {
        errorElement.innerHTML = errorMessage;
    }

    errorElement.style.display = 'block';

    return true;
}
