<template>
    <a class="user" href="#" title="Перейти в свой профиль">
        <figure class="user__profile flex-container">
            <img class="user__avatar" src="../assets/images/main/avatar.webp" alt="Фото пользователя">
            <figcaption class="user__account">
                <p class="user__name">Мортиджан</p>
                <span class="user__budget" :scoreData="getScore">{{ score }} баллов</span>
            </figcaption>
        </figure>
    </a>
</template>

<script>
export default {
    name: 'User',
    created() {
        this.score = 900;
    },
    props: {
        points: Number,
    },
    data() {
        return {
            score:     this.score,
            scoreData: '',
        };
    },
    methods: {
        getScore() {
            this.$emit('scored', this.scoreData);
        },
    },
};
</script>
