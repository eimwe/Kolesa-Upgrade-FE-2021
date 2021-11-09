export default function addContent(data) {
    const appElement = document.querySelector('#app');

    appElement.innerHTML = data.html;
    appElement.style.display = 'block';

    return appElement.querySelectorAll('button');
}
