export default function addContent(data) {
    const appElement = document.querySelector('#app');

    appElement.innerHTML = data.html;
    appElement.style.display = 'block';

    const buttonNodes = document.body.querySelectorAll('button');

    return buttonNodes;
}
