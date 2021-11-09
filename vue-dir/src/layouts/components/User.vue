<template>
    <a class="user" href="#" title="Перейти в свой профиль">
        <figure class="user__profile flex-container">
            <img class="user__avatar" :src="$store.state.userInfo.avatarUrl" alt="Фото пользователя">
            <figcaption class="user__account">
                <p class="user__name">{{ $store.state.userInfo.name }}</p>
                <span class="user__budget">{{ score }}</span>
            </figcaption>
        </figure>
    </a>
</template>

<script>

export default {
    name: 'User',
    created() {
        this.getUserData();
    },
    computed: {
        score() {
            return this.$store.state.userInfo.score ? `${this.$store.state.userInfo.score} баллов` : '';
        },
    },
    methods: {
        getUserData() {
            this.$store.dispatch('fetchUserInfo');
        },
    },
};
</script>
