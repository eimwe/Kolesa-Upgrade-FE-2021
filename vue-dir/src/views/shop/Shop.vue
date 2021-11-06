<template>
    <div id="app">
        <ModalOrder
            :isOpen="isShowModal"
            :data="modalData"
            @order="setScore"
            @toggle="toggleModal">
        </ModalOrder>
        <div class="main__container">
            <picture class="banner">
                <source media="(max-width: 600px)" srcset="../../assets/images/main/hero-banner-600w.webp">
                <img class="banner__img"
                    src="../../assets/images/main/hero-banner.webp"
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
                                @change="mergeEverything($store.state.everything)"
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
                                @change="getCategory($store.state.clothes)"
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
                                @change="getCategory($store.state.accessories)"
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
    </div>
</template>

<script>
import ModalOrder from './components/ModalOrder.vue';
import GuideBar from './components/GuideBar.vue';

export default {
    name:       'Shop',
    components: {
        GuideBar,
        ModalOrder,
    },

    data() {
        return {
            items:       [],
            isShowModal: false,
            modalData:   {},
        };
    },

    created() {
        this.fetchInfo();
    },

    methods: {
        getClothes() {
            this.$store.dispatch('fetchClothesInfo');
        },

        getAccessories() {
            this.$store.dispatch('fetchAccessoriesInfo');
        },

        async fetchInfo() {
            await this.getClothes();
            await this.getAccessories();
            setTimeout(() => {
                this.mergeEverything();
            }, 1000);
        },

        passDataToModal(data) {
            this.toggleModal();
            this.modalData = data;
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
            this.$store.commit('updateEverything');

            category = this.$store.state.everything;
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
@use '../../assets/styles/catalog';
@use '../../assets/styles/order';
</style>
