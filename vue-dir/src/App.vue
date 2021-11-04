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
                    <SearchBar></SearchBar>
                    <User></User>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="wrapper grid-container">
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
                <router-view></router-view>
            </div>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './layouts/components/Footer.vue';
import NavBar from './layouts/components/NavBar.vue';
import User from './layouts/components/User.vue';
import SearchBar from './layouts/components/SearchBar.vue';

export default {
    name:       'App',
    components: {
        Footer,
        NavBar,
        User,
        SearchBar,
    },
};
</script>
