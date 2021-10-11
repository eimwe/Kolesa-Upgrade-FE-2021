import '../css/catalog.scss';
import { CLOTHES, MISC } from './shopcards';

const apparel = CLOTHES;
const accessories = MISC;
const everything = [...apparel, ...accessories];
const cardContainer = document.getElementById('shop-front');
const categoryButtons = document.querySelectorAll('.formgroup__input');

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

const customizeOrderModalTemplate = (title, price, details, fullsized, thumbs) => {
    const orderModalTemplate = document.getElementById('modal-order-template');
    const orderModal = orderModalTemplate.content.firstElementChild.cloneNode(true);
    const fullsizedImgWrapper = orderModal.querySelector('.gallery__fullsize');
    const thumbImgWrapper = orderModal.querySelector('.gallery__thumbs');
    const modalImagePath = 'src/assets/images/gallery/';

    orderModal.querySelector('.modal__title').textContent = title;
    orderModal.querySelector('.modal__price').textContent = `${price} баллов`;
    orderModal.querySelectorAll('.modal__details')[0].textContent = details;

    fullsized.forEach((fullImage) => {
        const liNode = document.createElement('LI');
        const modalImage = new Image();

        modalImage.src = modalImagePath + fullImage;
        modalImage.setAttribute('alt', title);
        modalImage.classList.add('gallery__full');
        liNode.appendChild(modalImage);
        fullsizedImgWrapper.appendChild(liNode);
        liNode.classList.add('gallery__slide');
        fullsizedImgWrapper.firstElementChild.classList.add('gallery__slide--active');
    });

    thumbs.forEach((thumb) => {
        const liNode = document.createElement('LI');
        const modalImage = new Image();

        modalImage.src = modalImagePath + thumb;
        modalImage.setAttribute('alt', title);
        modalImage.classList.add('gallery__preview');
        liNode.appendChild(modalImage);
        thumbImgWrapper.appendChild(liNode);
        liNode.classList.add('gallery__thumb');
        thumbImgWrapper.firstElementChild.classList.add('gallery__thumb--active');
    });

    return orderModal;
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

const renderOrderModals = (card, id) => {
    const {
        title, price, details, fullsized, thumbs,
    } = card[id];
    const customizedOrderModal = customizeOrderModalTemplate(title, price, details, fullsized, thumbs);

    document.body.insertBefore(customizedOrderModal, document.body.firstElementChild);

    return customizedOrderModal;
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

function renderCardsByCategory(category) {
    category.forEach((card) => {
        renderCards(card);
    });

    const renderedCards = document.querySelectorAll('.shop-card');

    return renderedCards;
}

const closeOrderModal = () => {
    const modalCloseButton = document.querySelector('.modal__close');

    modalCloseButton.addEventListener('click', () => {
        document.body.removeChild(document.body.firstElementChild);
    });
};

const showOrderModal = (renderedCards) => {
    renderedCards.forEach((card) => {
        card.addEventListener('click', (event) => {
            const clickedCard = event.target;
            const cardId = clickedCard.closest('.shop-card').dataset.id;

            renderOrderModals(everything, cardId);

            closeOrderModal();
        });
    });
};

categoryButtons.forEach((button) => {
    button.addEventListener('change', (event) => {
        const categoryButton = event.target;
        const categoryKey = categoryButton.dataset.key;

        cleanCardContainer();

        switch (categoryKey) {
            case 'apparel':
                showOrderModal(renderCardsByCategory(apparel));
                break;
            case 'misc':
                showOrderModal(renderCardsByCategory(accessories));
                break;
            default:
                showOrderModal(renderCardsByCategory(everything));
        }
    });
});

showOrderModal(renderCardsByCategory(everything));
