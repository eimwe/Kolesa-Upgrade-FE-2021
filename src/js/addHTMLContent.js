/**
 * @function addHTMLContent
 * @description Добавляет контент в блок #app,
 * полученный в ответ на фетч-запрос функции getItemsRequest.
 * Получает и возвращает ссылки на ноды кнопок
 * @param {Object} data - ответ на запрос
 * @returns {HTMLCollection} - ссылки на ноды кнопок
 */
export default function addHTMLContent(data) {
    const appElement = document.querySelector('#app');

    appElement.innerHTML = data.html;
    appElement.style.display = 'block';

    const buttonNodes = document.body.querySelectorAll('button');

    return buttonNodes;
}
