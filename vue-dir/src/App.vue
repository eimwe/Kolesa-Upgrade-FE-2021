<template>
  <div id="app">
    <div v-if="isShowModal"
         @click="toggleModal"
         class="overlay flex-container">
        <div class="modal modal--shopitem">
            <button
                class="modal__close"
                type="button">Закрыть</button>
            <div class="modal__content flex-container">
                <div class="gallery" aria-roledescription="carousel">
                    <ul class="gallery__fullsize flex-container">
                        <li class="gallery__slide">
                            <img class="gallery__full" src="./assets/images/gallery/shirt-01.webp">
                        </li>
                        <li class="gallery__slide gallery__slide--active">
                            <img class="gallery__full" src="./assets/images/gallery/shirt-02.webp">
                        </li>
                        <li class="gallery__slide">
                            <img class="gallery__full" src="./assets/images/gallery/shirt-03.webp">
                        </li>
                    </ul>
                    <ul class="gallery__thumbs flex-container">
                        <li class="gallery__thumb">
                            <img class="gallery__preview" src="./assets/images/gallery/shirt-thumb-01.webp">
                        </li>
                        <li class="gallery__thumb gallery__thumb--active">
                            <img class="gallery__preview" src="./assets/images/gallery/shirt-thumb-02.webp">
                        </li>
                        <li class="gallery__thumb">
                            <img class="gallery__preview" src="./assets/images/gallery/shirt-thumb-03.webp">
                        </li>
                    </ul>
                </div>
                <section class="modal__desc">
                    <h2 class="modal__title">Футболка</h2>
                    <span class="modal__price"></span>
                    <div class="modal__user flex-container">
                        <button class="btn btn--hero" type="submit" form="order" value="Submit">Заказать</button>
                        <div class="modal__score">
                            <p class="modal__amount">
                                Твой баланс: <span class="modal__budget">3 945 баллов</span>
                            </p>
                        </div>
                    </div>
                    <form id="order" action="#" method="POST">
                        <fieldset class="formgroup formgroup--colors">
                            <legend class="formgroup__caption">Цвета:</legend>
                            <div class="formgroup__btn">
                                <input class="formgroup__input"
                                    type="radio"
                                    id="color-blue"
                                    name="color"
                                    value="blue" checked>
                                <label class="formgroup__label formgroup__label--colors"
                                    for="color-blue">
                                    Синий
                                </label>
                            </div>
                            <div class="formgroup__btn">
                                <input class="formgroup__input"
                                    type="radio"
                                    id="color-beige"
                                    name="color"
                                    value="beige">
                                <label class="formgroup__label formgroup__label--colors"
                                    for="color-beige">
                                    Бежевый
                                </label>
                            </div>
                            <div class="formgroup__btn">
                                <input class="formgroup__input"
                                    type="radio"
                                    id="color-grey"
                                    name="color"
                                    value="grey">
                                <label class="formgroup__label formgroup__label--colors"
                                    for="color-grey">
                                    Серый
                                </label>
                            </div>
                        </fieldset>
                        <fieldset class="formgroup formgroup--sizes">
                            <legend class="formgroup__caption">Размер:</legend>
                            <div class="formgroup__btn">
                                <input class="formgroup__input"
                                    type="radio"
                                    id="size-small"
                                    name="size"
                                    value="small" checked>
                                <label class="formgroup__label formgroup__label--sizes" for="size-small">
                                    <abbr title="Small size">S</abbr>
                                </label>
                            </div>
                            <div class="formgroup__btn">
                                <input class="formgroup__input"
                                    type="radio"
                                    id="size-medium"
                                    name="size"
                                    value="medium">
                                <label class="formgroup__label formgroup__label--sizes" for="size-medium">
                                    <abbr title="Medium size">M</abbr>
                                </label>
                            </div>
                            <div class="formgroup__btn">
                                <input class="formgroup__input"
                                    type="radio"
                                    id="size-large"
                                    name="size"
                                    value="large">
                                <label class="formgroup__label formgroup__label--sizes" for="size-large">
                                    <abbr title="Large size">L</abbr>
                                </label>
                            </div>
                        </fieldset>
                    </form>
                    <dl class="modal__highlights">
                        <dt class="modal__highlight">Детали:</dt>
                        <dd class="modal__details"></dd>
                        <dt class="modal__highlight">Как выбрать размер:</dt>
                        <dd class="modal__details">Написать дяде Рику для уточнения.</dd>
                    </dl>
                </section>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="header__container wrapper flex-container">
            <div class="menu-btn--mobile" aria-haspopup="menu">
                <input type="checkbox" name="mobile-menu" id="toggle-menu">
                <label for="toggle-menu">Меню</label>
            </div>
            <button class="return-btn--mobile" type="button">Назад</button>
            <a class="logo" href="index.html" title="На Главную">
                Kolesa Group
            </a>
            <div class="header__container--inner flex-container">
                <form id="search" action="#" method="GET">
                    <div class="searcher">
                        <input class="searcher__field" type="search" name="search-query" placeholder="Поиск">
                        <input class="searcher__btn" type="submit" value="Найти">
                    </div>
                </form>
                <a class="user" href="#" title="Перейти в свой профиль">
                    <figure class="user__profile flex-container">
                        <img class="user__avatar" src="./assets/images/main/avatar.webp" alt="Фото пользователя">
                        <figcaption class="user__account">
                            <p class="user__name">Мортиджан</p>
                            <span class="user__budget">300 баллов</span>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="wrapper grid-container">
            <div class="main__container">
                <picture class="banner">
                    <source media="(max-width: 600px)" srcset="./assets/images/main/hero-banner-600w.webp">
                    <img class="banner__img"
                        src="./assets/images/main/hero-banner.webp"
                        alt="Летняя распродажа нашего мерча">
                </picture>
                <nav class="guide" aria-label="Quick user guide">
                    <a class="guide__line guide__line--add" href="#"
                        title="Зачисление баллов на счет">
                        Получить баллы
                    </a>
                    <a class="guide__line guide__line--knowhow" href="rulebook.html"
                        title="Узнать способы получения баллов">
                        Как получить баллы
                    </a>
                    <a class="guide__line guide__line--gift" href="#"
                        title="Перечислить баллы коллеге">
                        Подарить баллы
                    </a>
                </nav>
                <div class="main__stack">
                    <form id="switch-tabs" action="#" method="POST">
                        <fieldset class="formgroup" aria-label="Category tabs">
                            <legend class="formgroup__caption formgroup__caption--catalog">
                                Выберите категорию товаров
                            </legend>
                            <div class="formgroup__btn"
                                tabindex="0">
                                <input class="formgroup__input"
                                    type="radio"
                                    data-key="all"
                                    id="category-all"
                                    name="category"
                                    value="all" checked>
                                <label class="formgroup__label formgroup__label--catalog"
                                    for="category-all">
                                    Все товары
                                </label>
                            </div>
                            <div class="formgroup__btn"
                                tabindex="0">
                                <input class="formgroup__input"
                                    type="radio"
                                    data-key="apparel"
                                    id="category-apparel"
                                    name="category"
                                    value="apparel">
                                <label class="formgroup__label formgroup__label--catalog"
                                    for="category-apparel">
                                    Одежда
                                </label>
                            </div>
                            <div class="formgroup__btn"
                                tabindex="0">
                                <input class="formgroup__input"
                                    type="radio"
                                    data-key="misc"
                                    id="category-misc"
                                    name="category"
                                    value="misc">
                                <label class="formgroup__label formgroup__label--catalog"
                                    for="category-misc">
                                    Аксессуары
                                </label>
                            </div>
                        </fieldset>
                    </form>
                    <output id="shop-front" class="main__tiles"
                        name="card-container"
                        for="category-all category-apparel category-misc"
                        role="tabpanel"
                        aria-live="polite"
                        tabindex="0">
                        <a class="base-card shop-card"
                            v-for="item in mergeEverything()"
                            :key="item.id"
                            :data-id="item.id">
                            <div class="shop-card__image">
                                <img :src="require(`./assets/images/shop/` + item.img)">
                                <span class="shop-card__tag shop-card__tag--new"
                                    v-if="item.isTagged">
                                    New
                                </span>
                            </div>
                            <article class="base-card__caption">
                                <span class="shop-card__price">{{ item.price }} баллов</span>
                                <h2 class="base-card__title">{{ item.title }}</h2>
                                <span class="shop-card__options">
                                    Размеры <span class="shop-card__option">S</span>
                                            <span class="shop-card__option">M</span>
                                            <span class="shop-card__option">L</span>
                                </span>
                                <div class="shop-card__action">
                                    <button
                                        class="btn btn--hero"
                                        type="button"
                                        @click="toggleModal"
                                    >Заказать</button>
                                </div>
                            </article>
                        </a>
                    </output>
                </div>
            </div>
            <aside class="sidebar">
                <a class="logo logo--sidebar" href="index.html" title="На Главную">
                    Kolesa Group
                </a>
                <a class="user user--sidebar" href="#" title="Перейти в свой профиль">
                    <figure class="user__profile flex-container">
                        <img class="user__avatar" src="./assets/images/main/avatar.webp" alt="Фото пользователя">
                        <figcaption class="user__account">
                            <p class="user__name user__name--mobile">
                                Абдурахман
                                <span class="line-break">Калиакпаров</span>
                            </p>
                        </figcaption>
                    </figure>
                </a>
                <nav>
                    <ul class="sidebar__navbar">
                        <li
                            v-for="navlink in navbar"
                            :key="navlink.id"
                        >
                            <a class="sidebar__link"
                                href="#">
                                {{navlink}}
                            </a>
                        </li>
                    </ul>
                </nav>
                <button class="btn btn--logout btn--logout--mobile" type="button">Выйти из профиля</button>
            </aside>
        </div>
    </main>
    <footer class="footer">
        <div class="wrapper flex-container">
            <div class="footer__about">
                <p class="footer__copyright">&#169; Kolesa Group</p>
                <ul class="socialbar flex-container">
                    <li>
                        <a class="socialbar__link socialbar__link--insta"
                            href="https://www.instagram.com/kolesagroup/"
                            target="_blank"
                            title="Мы в Instagram">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a class="socialbar__link socialbar__link--yt"
                            href="https://www.youtube.com/channel/UC6o6waSdIvmIdvy7qTqxY9A"
                            target="_blank"
                            title="Наши видео на YouTube">
                            YouTube
                        </a>
                    </li>
                    <li>
                        <a class="socialbar__link socialbar__link--vk"
                            href="https://vk.com/kolesakrishamarket"
                            target="_blank"
                            title="Наша страничка ВКонтакте">
                            ВКонтакте
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer__contacts flex-container">
                <p class="footer__invitation">
                    Есть идеи что улучшить?
                    <span class="line-break">Не знаешь, с кем решить проблему?</span>
                </p>
                <button class="btn btn--contact" type="button">Написать</button>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            clothes: [
                {
                    id:       0,
                    img:      'shirt.webp',
                    title:    'Футболка "Эволюционируй или сдохни"',
                    price:    '220',
                    isTagged: false,
                },
                {
                    id:       1,
                    img:      'sweatshirt.webp',
                    title:    'Свитшот',
                    price:    '320',
                    isTagged: false,
                },
                {
                    id:       2,
                    img:      'dom-shirt.webp',
                    title:    'Футболка "DOM"',
                    price:    '250',
                    isTagged: true,
                },
                {
                    id:       3,
                    img:      'survivor-shirt.webp',
                    title:    'Футболка "Выживший"',
                    price:    '0',
                    isTagged: true,
                },
                {
                    id:       4,
                    img:      'async-sweatshirt.webp',
                    title:    'Худи "async/await"',
                    price:    '320',
                    isTagged: false,
                },
                {
                    id:       5,
                    img:      'socks.webp',
                    title:    'Носочки "Kolesa Group Rocks"',
                    price:    '75',
                    isTagged: false,
                },
            ],
            accessories: [
                {
                    id:       6,
                    img:      'bottle.webp',
                    title:    'Бутылка для воды',
                    price:    '100',
                    isTagged: false,
                },
                {
                    id:       7,
                    img:      'snapback.webp',
                    title:    'Бейсболка Kolesa Group',
                    price:    '180',
                    isTagged: false,
                },
                {
                    id:       8,
                    img:      'coasters.webp',
                    title:    'Подстаканники Kolesa',
                    price:    '20',
                    isTagged: true,
                },
                {
                    id:       9,
                    img:      'soap.webp',
                    title:    'Мыло ручной работы "try...catch"',
                    price:    '40',
                    isTagged: true,
                },
                {
                    id:       10,
                    img:      'keychain.webp',
                    title:    'Брелок для AirTag',
                    price:    '400',
                    isTagged: false,
                },
                {
                    id:       11,
                    img:      'phonecase.webp',
                    title:    'Защитный чехол для смартфона',
                    price:    '200',
                    isTagged: false,
                },
            ],
            everything:  [],
            isShowModal: false,
            navbar:      [
                'Оргсхема',
                'Kolesa Team',
                'Kolesa Shop',
                'Картина компании',
                'Новости',
                'Education',
                'Guidelines',
                'Библиотека',
                'FAQ',
            ],
        };
    },
    methods: {
        mergeEverything() {
            this.everything = [...this.clothes, ...this.accessories];

            return this.everything;
        },

        toggleModal() {
            this.isShowModal = !this.isShowModal;
        },
    },
};
</script>

<style lang="scss">
@use './assets/styles/catalog';
@use './assets/styles/order';
</style>
