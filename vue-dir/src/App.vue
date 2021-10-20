<template>
  <div id="app">
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
                        <li>
                            <a class="sidebar__link" href="#" title="Ознакомиться с организационной схемой компании">
                                Оргсхема
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#" title="Познакомиться с нашей командой">
                                Kolesa <span class="accent">Team</span>
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link sidebar__link--active" href="#" title="Получить наш мерч">
                                Kolesa <span class="accent">Shop</span>
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#" title="Узнать больше о компании">
                                Картина компании
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#" title="Почитать свежие новости о компании">
                                Новости
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#" title="Записаться на курсы">
                                Education
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#" title="Сверится с нашими гайдами">
                                Guidelines
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#" title="Посмотреть список рекомендованной литературы">
                                Библиотека
                            </a>
                        </li>
                        <li>
                            <a class="sidebar__link" href="#">
                                <abbr title="Часто задаваемые вопросы">FAQ</abbr>
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

// import HelloWorld from './components/HelloWorld.vue';

export default {
    name:       'App',
    components: {
        // HelloWorld,
    },
};
</script>

<style lang="scss">
@use './assets/styles/catalog';
</style>
