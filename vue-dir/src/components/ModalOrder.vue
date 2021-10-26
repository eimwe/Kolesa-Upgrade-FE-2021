<template>
    <div v-if="isOpen"
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
                            <img class="gallery__full" src="@/assets/images/gallery/shirt-01.webp">
                        </li>
                        <li class="gallery__slide gallery__slide--active">
                            <img class="gallery__full" src="@/assets/images/gallery/shirt-02.webp">
                        </li>
                        <li class="gallery__slide">
                            <img class="gallery__full" src="@/assets/images/gallery/shirt-03.webp">
                        </li>
                    </ul>
                    <ul class="gallery__thumbs flex-container">
                        <li class="gallery__thumb">
                            <img class="gallery__preview" src="@/assets/images/gallery/shirt-thumb-01.webp">
                        </li>
                        <li class="gallery__thumb gallery__thumb--active">
                            <img class="gallery__preview" src="@/assets/images/gallery/shirt-thumb-02.webp">
                        </li>
                        <li class="gallery__thumb">
                            <img class="gallery__preview" src="@/assets/images/gallery/shirt-thumb-03.webp">
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
</template>

<script>
export default {
    name:  'ModalOrder',
    props: {
        isOpen: Boolean,
    },
    data() {
        return {
            isShowModal: false,
        };
    },
    methods: {
        toggleModal() {
            this.$emit('toggle');
        },
    },
};
</script>
