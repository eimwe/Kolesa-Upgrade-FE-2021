import { getItemsRequest, toggleFavoriteRequest } from './requests';
import displayErrorElement from './displayError';

export default () => {
    displayErrorElement(false);
    document.querySelector('#loader').style.display = 'block';

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                displayErrorElement(true, 'Произошла ошибка, попробуйте ещё раз.');
            } else {
                const appElement = document.querySelector('#app');

                appElement.innerHTML = data.html;
                appElement.style.display = 'block';

                Array.from(appElement.querySelector('button')).forEach((button) => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();

                        e.currentTarget.textContent = 'Загрузка...';

                        toggleFavoriteRequest(e.currentTarget.dataset.id)
                            .then(({ data: buttonData }) => {
                                if (buttonData.result === 'set') {
                                    e.currentTarget.textContent = '🌝';
                                } else {
                                    e.currentTarget.textContent = '🌚';
                                }
                            });
                    });
                });
            }
        })
        .catch((e) => {
            displayErrorElement(true, e.message);
        })
        .finally(() => {
            document.querySelector('#loader').style.display = 'none';
        });
};
