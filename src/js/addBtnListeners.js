import addBtnContent from './addBtnContent';

/**
 * @function addBtnListeners
 * @description Добавляет обработчики событий на кнопки,
 * определяет и передает в качестве параметра кнопку функции
 * addBtnContent, по которой было зарегистрировано событие
 * @param {NodeList} button - коллекция кнопок
 * @returns {undefined}
 */
export default function addBtnListeners(button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const targetButton = e.currentTarget;

        targetButton.textContent = 'Загрузка...';

        addBtnContent(targetButton);
    });
}
