import '../css/catalog.scss';
import '../css/order.scss';
import { CLOTHES, MISC } from './shopcards';

const apparel = CLOTHES;
const accessories = MISC;
const everything = [...apparel, ...accessories];
const cardContainer = document.getElementById('shop-front');
const categoryButtons = document.querySelectorAll('.formgroup__input');

const customizeCardTemplate = (id, img, title, price, isTagged) => {
    const cardTemplate = document.getElementById('shopcard-template');
    const shopCard = cardTemplate?.content.firstElementChild.cloneNode(true);
    const cardImgWrapper = shopCard?.querySelector('.shop-card__image');
    const imagePath = 'src/assets/images/shop/';
    const cardImage = new Image();

    shopCard.dataset.id = id;

    cardImage.src = imagePath + img;
    cardImage.setAttribute('alt', title);
    cardImgWrapper?.appendChild(cardImage);

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

const addGalleryImages = (images,
    alt,
    liClassName,
    liActiveClassName,
    imgClassName,
    imgContainer) => {
    images.forEach((image) => {
        const liNode = document.createElement('LI');
        const modalImagePath = 'src/assets/images/gallery/';
        const modalImage = new Image();

        modalImage.src = modalImagePath + image;
        modalImage.setAttribute('alt', alt);
        modalImage.classList.add(imgClassName);
        liNode.appendChild(modalImage);
        imgContainer.appendChild(liNode);
        liNode.classList.add(liClassName);
        imgContainer.firstElementChild.classList.add(liActiveClassName);
    });
};

const customizeOrderModalTemplate = (title, price, details, fullsized, thumbs) => {
    const orderModalTemplate = document.getElementById('modal-order-template');
    const orderModal = orderModalTemplate?.content.firstElementChild.cloneNode(true);
    const fullsizedImgWrapper = orderModal?.querySelector('.gallery__fullsize');
    const thumbImgWrapper = orderModal?.querySelector('.gallery__thumbs');

    orderModal.querySelector('.modal__title').textContent = title;
    orderModal.querySelector('.modal__price').textContent = `${price} баллов`;
    orderModal.querySelectorAll('.modal__details')[0].textContent = details;

    addGalleryImages(
        fullsized,
        title,
        'gallery__slide',
        'gallery__slide--active',
        'gallery__full',
        fullsizedImgWrapper,
    );

    addGalleryImages(
        thumbs,
        title,
        'gallery__thumb',
        'gallery__thumb--active',
        'gallery__preview',
        thumbImgWrapper,
    );

    return orderModal;
};

const renderCards = (card) => {
    const {
        id = 0,
        img = 'no-photo.webp',
        title = 'Товар',
        price = '0',
        isTagged = false,
    } = card;
    const customizedCard = customizeCardTemplate(id, img, title, price, isTagged);

    cardContainer?.appendChild(customizedCard);

    if (isTagged) {
        cardContainer.insertBefore(customizedCard, cardContainer.firstChild);
    }
};

const renderOrderModals = (cardId) => {
    const {
        title = 'Товар',
        price = '0',
        details = 'Подробнее о товаре',
        fullsized = ['no-photo.webp'],
        thumbs = ['no-photo.webp'],
    } = everything[cardId];

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

    return document.querySelectorAll('.shop-card');
}

const closeOrderModal = () => {
    const modalCloseButton = document.querySelector('.modal__close');

    modalCloseButton?.addEventListener('click', () => {
        document.body.removeChild(document.body.firstElementChild);
    });
};

const showGallerySlides = () => {
    const thumbnails = Array.from(document.querySelectorAll('.gallery__thumb'));
    const fullsizedsImgs = Array.from(document.querySelectorAll('.gallery__slide'));

    thumbnails?.forEach((thumbnail) => {
        thumbnail.addEventListener('click', (event) => {
            const thumbNode = event.target.parentNode;
            const activeThumb = document.querySelector('.gallery__thumb--active');

            // eslint-disable-next-line no-plusplus
            for (let itr = 0; itr < thumbnails.length; itr++) {
                if (thumbNode !== thumbnails[itr]) {
                    fullsizedsImgs[itr].classList.remove('gallery__slide--active');
                } else {
                    fullsizedsImgs[itr].classList.toggle('gallery__slide--active');
                }
            }

            if (thumbNode !== activeThumb) {
                thumbNode.classList.toggle('gallery__thumb--active');
                activeThumb.classList.toggle('gallery__thumb--active');
            }
        });
    });
};

const showOrderModal = (renderedCards) => {
    renderedCards.forEach((card) => {
        card.addEventListener('click', () => {
            renderOrderModals(card.dataset.id);

            showGallerySlides();

            closeOrderModal();
        });
    });
};

categoryButtons?.forEach((button) => {
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
