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
                                <img :src="item.mainImage">
                                <span class="shop-card__tag shop-card__tag--new"
                                    v-if="item.isNew">
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
            clothes:     [],
            accessories: [],
            everything:  [],
            items:       [],
            isShowModal: false,
            modalData:   {},
            user:        '',
        };
    },
    mounted() {

    },
    created() {
        axios.get('/templates/-_RLsEGjof6i/data')
            .then((response) => {
                this.clothes = response.data;
                this.mergeEverything();
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                this.mergeEverything();
            });

        axios.get('/templates/q3OPxRyEcPvP/data')
            .then((response) => {
                this.accessories = response.data;
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                this.mergeEverything();
            });
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
                if (item.isNew) {
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
