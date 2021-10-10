import '../css/catalog.scss';
import { CLOTHES, MISC } from './shopcards';

const apparel = CLOTHES;
const accessories = MISC;
const everything = [...apparel, ...accessories];
const cardContainer = document.getElementById('shop-front');

const customizeCardTemplate = (id, img, title, price, isTagged) => {
    const cardTemplate = document.getElementById('shopcard-template');
    const shopCard = cardTemplate.content.firstElementChild.cloneNode(true);
    const cardImgWrapper = shopCard.querySelector('.shop-card__image');
    const imagePath = 'src/assets/images/shop/';
    const cardImage = new Image();

    shopCard.dataset.id = id;

    cardImage.src = imagePath + img;
    cardImage.setAttribute('alt', title);
    cardImgWrapper.appendChild(cardImage);

    shopCard.querySelector('.base-card__title').textContent = title;
    shopCard.querySelector('.shop-card__price').textContent = `${price} баллов`;

    if (isTagged) {
        const tagNode = document.createElement('SPAN');

        tagNode.classList.add('shop-card__tag', 'shop-card__tag--new');
        tagNode.appendChild(document.createTextNode('New'));
        cardImgWrapper.appendChild(tagNode);
    }

    return shopCard;
};

const renderCards = (card) => {
    const {
        id, img, title, price, isTagged,
    } = card;
    const customizedCard = customizeCardTemplate(id, img, title, price, isTagged);

    cardContainer.appendChild(customizedCard);

    if (isTagged) {
        cardContainer.insertBefore(customizedCard, cardContainer.firstChild);
    }
};

function cleanCardContainer() {
    if (cardContainer.hasChildNodes) {
        while (cardContainer.firstChild) {
            cardContainer.removeChild(cardContainer.firstChild);
        }
    } else {
        return false;
    }

    return true;
}

const categoryButtons = document.querySelectorAll('.formgroup__input');

categoryButtons.forEach((button) => {
    button.addEventListener('change', (event) => {
        const categoryButton = event.target;
        const categoryKey = categoryButton.dataset.key;

        switch (categoryKey) {
            case 'apparel':
                cleanCardContainer();
                apparel.forEach((card) => {
                    renderCards(card);
                });
                break;
            case 'misc':
                cleanCardContainer();
                accessories.forEach((card) => {
                    renderCards(card);
                });
                break;
            default:
                cleanCardContainer();
                everything.forEach((card) => {
                    renderCards(card);
                });
        }
    });
});
