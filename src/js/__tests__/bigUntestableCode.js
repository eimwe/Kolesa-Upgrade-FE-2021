import getItemsRequest from './requests';
import displayErrorElement from './displayError';
import displayLoaderElement from './displayLoader';
import addHTMLContent from './addHTMLContent';
import addBtnListeners from './addBtnListeners';

export default () => {
    displayErrorElement(false);
    displayLoaderElement(true);

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                displayErrorElement(true, 'Произошла ошибка, попробуйте ещё раз.');
            }

            Array.from(addHTMLContent(data)).forEach((button) => {
                addBtnListeners(button);
            });
        })
        .catch((e) => {
            displayErrorElement(true, e.message);
        })
        .finally(() => {
            displayLoaderElement(false);
        });
};
