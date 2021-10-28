<template>
  <div id="app">
    <ModalOrder
        :isOpen="isShowModal"
        :data="modalData"
        @order="setScore"
        @toggle="toggleModal">
    </ModalOrder>
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
                <SearchBar></SearchBar>
                <User @scored="getScore"></User>
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
                <GuideBar></GuideBar>
                <div class="main__stack">
                    <form id="switch-tabs" action="#" method="POST">
                        <fieldset class="formgroup" aria-label="Category tabs">
                            <legend class="formgroup__caption formgroup__caption--catalog">
                                Выберите категорию товаров
                            </legend>
                            <div class="formgroup__btn"
                                tabindex="0">
                                <input class="formgroup__input"
                                    @change="mergeEverything(everything)"
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
                                    @change="getCategory(clothes)"
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
                                    @change="getCategory(accessories)"
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
                            v-for="item in items"
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
                                        @click="passDataToModal(item)"
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
                <NavBar></NavBar>
                <button class="btn btn--logout btn--logout--mobile" type="button">Выйти из профиля</button>
            </aside>
        </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from './axios';
import Footer from './components/Footer.vue';
import ModalOrder from './components/ModalOrder.vue';
import GuideBar from './components/GuideBar.vue';
import NavBar from './components/NavBar.vue';
import User from './components/User.vue';
import SearchBar from './components/SearchBar.vue';

export default {
    name:       'App',
    components: {
        Footer,
        ModalOrder,
        GuideBar,
        NavBar,
        User,
        SearchBar,
    },
    data() {
        return {
            clothes: [
                {
                    id:        0,
                    img:       'shirt.webp',
                    title:     'Футболка "Эволюционируй или сдохни"',
                    price:     '220',
                    isTagged:  false,
                    details:   'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    fullsized: [
                        'shirt-01.webp',
                        'shirt-02.webp',
                        'shirt-03.webp',
                    ],
                    thumbs: [
                        'shirt-thumb-01.webp',
                        'shirt-thumb-02.webp',
                        'shirt-thumb-03.webp',
                    ],
                },
                {
                    id:        1,
                    img:       'sweatshirt.webp',
                    title:     'Свитшот',
                    price:     '320',
                    isTagged:  false,
                    details:   'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
                    fullsized: [
                        'sweatshirt-01.webp',
                        'sweatshirt-02.webp',
                        'sweatshirt-03.webp',
                    ],
                    thumbs: [
                        'sweatshirt-thumb-01.webp',
                        'sweatshirt-thumb-02.webp',
                        'sweatshirt-thumb-03.webp',
                    ],
                },
                {
                    id:        2,
                    img:       'dom-shirt.webp',
                    title:     'Футболка "DOM"',
                    price:     '250',
                    isTagged:  true,
                    details:   'Для прогулок по теневому дому. Материал: Узлы-элементы 80%, Текстовые узлы 20%',
                    fullsized: [
                        'dom-shirt-01.webp',
                        'dom-shirt-02.webp',
                        'dom-shirt-03.webp',
                    ],
                    thumbs: [
                        'dom-shirt-thumb-01.webp',
                        'dom-shirt-thumb-02.webp',
                        'dom-shirt-thumb-03.webp',
                    ],
                },
                {
                    id:        3,
                    img:       'survivor-shirt.webp',
                    title:     'Футболка "Выживший"',
                    price:     '0',
                    isTagged:  true,
                    details:   'Выдается бесплатно тем, кто успешно сдал финальный проект',
                    fullsized: [
                        'survivor-shirt-01.webp',
                        'survivor-shirt-02.webp',
                        'survivor-shirt-03.webp',
                    ],
                    thumbs: [
                        'survivor-shirt-thumb-01.webp',
                        'survivor-shirt-thumb-02.webp',
                        'survivor-shirt-thumb-03.webp',
                    ],
                },
                {
                    id:        4,
                    img:       'async-sweatshirt.webp',
                    title:     'Худи "async/await"',
                    price:     '320',
                    isTagged:  false,
                    details:   'Худи с капюшоном для анонимности. Материал: асинхронность 100%',
                    fullsized: [
                        'async-sweatshirt-01.webp',
                        'async-sweatshirt-02.webp',
                        'async-sweatshirt-03.webp',
                    ],
                    thumbs: [
                        'async-sweatshirt-thumb-01.webp',
                        'async-sweatshirt-thumb-02.webp',
                        'async-sweatshirt-thumb-03.webp',
                    ],
                },
                {
                    id:        5,
                    img:       'socks.webp',
                    title:     'Носочки "Kolesa Group Rocks"',
                    price:     '75',
                    isTagged:  false,
                    details:   'Брендированные носочки. Материал: Хлопок 80%, Милота 20%',
                    fullsized: [
                        'socks-01.webp',
                    ],
                    thumbs: [
                        'socks-thumb-01.webp',
                    ],
                },
            ],
            accessories: [
                {
                    id:        6,
                    img:       'bottle.webp',
                    title:     'Бутылка для воды',
                    price:     '100',
                    isTagged:  false,
                    details:   'Бутылка для воды с трубочкой',
                    fullsized: [
                        'bottle-01.webp',
                    ],
                    thumbs: [
                        'bottle-thumb-01.webp',
                    ],
                },
                {
                    id:        7,
                    img:       'snapback.webp',
                    title:     'Бейсболка Kolesa Group',
                    price:     '180',
                    isTagged:  false,
                    details:   'Брендированный снэпбек',
                    fullsized: [
                        'snapback-01.webp',
                    ],
                    thumbs: [
                        'snapback-thumb-01.webp',
                    ],
                },
                {
                    id:        8,
                    img:       'coasters.webp',
                    title:     'Подстаканники Kolesa',
                    price:     '20',
                    isTagged:  true,
                    details:   'Подстаканники в ассортименте',
                    fullsized: [
                        'coasters-01.webp',
                        'coasters-02.webp',
                        'coasters-03.webp',
                    ],
                    thumbs: [
                        'coasters-thumb-01.webp',
                        'coasters-thumb-02.webp',
                        'coasters-thumb-03.webp',
                    ],
                },
                {
                    id:        9,
                    img:       'soap.webp',
                    title:     'Мыло ручной работы "try...catch"',
                    price:     '40',
                    isTagged:  true,
                    details:   'Сварено по особому рецепту. Состав: Глицерин 80%, Слезы верстальщиков 20%',
                    fullsized: [
                        'soap-01.webp',
                        'soap-02.webp',
                        'soap-03.webp',
                    ],
                    thumbs: [
                        'soap-thumb-01.webp',
                        'soap-thumb-02.webp',
                        'soap-thumb-03.webp',
                    ],
                },
                {
                    id:        10,
                    img:       'keychain.webp',
                    title:     'Брелок для AirTag',
                    price:     '400',
                    isTagged:  false,
                    details:   'Брендированный брелок',
                    fullsized: [
                        'keychain-01.webp',
                    ],
                    thumbs: [
                        'keychain-thumb-01.webp',
                    ],
                },
                {
                    id:        11,
                    img:       'phonecase.webp',
                    title:     'Защитный чехол для смартфона',
                    price:     '200',
                    isTagged:  false,
                    details:   'Брендированный чехол для твоего смартфона. Материал: Поликарбонат 100%',
                    fullsized: [
                        'phonecase-01.webp',
                        'phonecase-02.webp',
                    ],
                    thumbs: [
                        'phonecase-thumb-01.webp',
                        'phonecase-thumb-02.webp',
                    ],
                },
            ],
            everything:  [],
            items:       [],
            isShowModal: false,
            modalData:   {},
            user:        '',
        };
    },
    created() {
        axios.get('/templates/-_RLsEGjof6i/data')
            .then((response) => {
                console.log(response);
            });
        this.mergeEverything();
    },
    methods: {
        passDataToModal(data) {
            this.toggleModal();
            this.modalData = data;
        },

        getScore(score) {
            this.user = score;
            console.log(score);
        },

        toggleModal() {
            this.isShowModal = !this.isShowModal;
        },

        findNewest(array) {
            array.forEach((item, index) => {
                if (item.isTagged) {
                    array.splice(index, 1);
                    array.unshift(item);
                }
            });

            return array;
        },

        getCategory(category) {
            this.findNewest(category);

            this.items = category;

            return category;
        },

        mergeEverything(category) {
            category = [...this.clothes, ...this.accessories];

            this.findNewest(category);

            this.items = category;

            return category;
        },

        setScore(cost) {
            this.toggleModal();

            if (this.score < cost || this.score === 0) {
                alert(`Недостаточно баллов для покупки. Текущий баланс: ${this.score}`);

                return false;
            }

            this.score -= cost;

            return true;
        },
    },
};
</script>

<style lang="scss">
@use './assets/styles/catalog';
@use './assets/styles/order';
</style>
