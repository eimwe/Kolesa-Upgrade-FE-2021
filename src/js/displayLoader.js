/**
 * @function displayLoaderElement
 * @description Отображает/скрывает лоадер
 * @param {Boolean} [load=true] - Индикатор процесса загрузки данных. По умолчанию: true
 * если данные повреждены или не были получены
 * @returns {Boolean}
 */
export default function displayLoaderElement(load = true) {
    const loaderElement = document.querySelector('#loader');

    if (!load) {
        loaderElement.style.display = 'none';
    }

    loaderElement.style.display = 'block';

    return true;
}
