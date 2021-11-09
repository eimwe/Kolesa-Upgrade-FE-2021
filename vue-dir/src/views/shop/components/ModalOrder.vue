<template>
    <div v-if="isOpen"
         @click.self="toggleModal"
         class="overlay flex-container">
        <div class="modal modal--shopitem">
            <button
                v-if="isOpen"
                @click.self="toggleModal"
                class="modal__close"
                type="button">Закрыть</button>
            <div class="modal__content flex-container">
                <div class="gallery" aria-roledescription="carousel">
                    <ul class="gallery__fullsize flex-container">
                        <li class="gallery__slide"
                            :class="getActiveSlide(index) ? 'gallery__slide--active' : '' "
                            v-for="(fullsize, index) in data.images"
                            :key="fullsize.id">
                            <img class="gallery__full"
                                :src="data.images[index]">
                        </li>
                    </ul>
                    <ul class="gallery__thumbs flex-container">
                        <li class="gallery__thumb"
                            :class="getActiveSlide(index) ? 'gallery__thumb--active' : '' "
                            v-for="(thumb, index) in data.images"
                            :key="thumb.id">
                            <img class="gallery__preview"
                                :src="data.images[index]">
                        </li>
                    </ul>
                </div>
                <section class="modal__desc">
                    <h2 class="modal__title">{{ data.title }}</h2>
                    <span class="modal__price">{{ data.price }} баллов</span>
                    <div class="modal__user flex-container">
                        <button class="btn btn--hero"
                            v-if="loan === false"
                            type="submit"
                            form="order"
                            value="Submit"
                            @click.prevent="orderItem">
                            Заказать
                        </button>
                        <button class="btn btn--help"
                            v-if="loan === true"
                            type="submit"
                            form="order"
                            value="Submit"
                            @click.prevent="toggleModal">
                            Попросить {{ this.askPoints() }} баллов
                        </button>
                        <div class="modal__score">
                            <p class="modal__amount">
                                Твой баланс: <span class="modal__budget">{{ $store.state.userInfo.score }} баллов</span>
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
                        <dd class="modal__details">{{ data.description }}</dd>
                        <dt class="modal__highlight">Как выбрать размер:</dt>
                        <dd class="modal__details">Написать дяде Рику для уточнения.</dd>
                    </dl>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:  'ModalOrder',
    props: {
        isOpen: Boolean,
        data:   Object,
    },
    data() {
        return {
            isShowModal: false,
            loan:        false,
            loanSum:     '',
        };
    },
    methods: {
        toggleModal() {
            this.$emit('toggle');
        },

        getActiveSlide(slide) {
            if (slide === 0) {
                return true;
            }

            return false;
        },

        askPoints(points) {
            this.loanSum = this.data.price - this.$store.state.userInfo.score;

            if (points - this.data.price <= 0) {
                this.loan = true;
            }

            if ((this.data.price - this.$store.state.userInfo.score) < 0) {
                this.loan = false;
                this.loanSum = '';
            }

            return this.loanSum;
        },

        orderItem() {
            const { score } = this.$store.state.userInfo;

            this.askPoints(score);

            if (this.loan === true) {
                return false;
            }

            this.$store.commit('setNewScore', this.data.price);

            return score;
        },
    },
};
</script>
