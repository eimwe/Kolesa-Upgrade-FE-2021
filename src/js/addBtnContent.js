import toggleFavoriteRequest from './requests';

/**
 * @function addBtnContent
 * @description Добавляет статус кнопкам по результату запроса данных, осуществляемых toggleFavoriteRequest
 * @param {HTMLElement} targetButton - кнопка, зарегистрированная обработчиком
 * @returns {undefined}
 */
export default function addBtnContent(targetButton) {
    toggleFavoriteRequest(targetButton.dataset.id)
        .then(({ data: buttonData }) => {
            if (buttonData.result === 'set') {
                targetButton.textContent = '🌝';
            } else {
                targetButton.textContent = '🌚';
            }
        });
}
