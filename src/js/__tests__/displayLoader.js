export default function displayLoaderElement(load = true) {
    const loaderElement = document.querySelector('#loader');

    if (!load) {
        loaderElement.style.display = 'none';
    }

    loaderElement.style.display = 'block';

    return true;
}
