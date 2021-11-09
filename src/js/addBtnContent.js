import toggleFavoriteRequest from './requests';

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
