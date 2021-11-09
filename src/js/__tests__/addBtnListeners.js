import addBtnContent from './addBtnContent';

export default function addBtnListeners(button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const targetButton = e.currentTarget;

        targetButton.textContent = 'Загрузка...';

        addBtnContent(targetButton);
    });
}
