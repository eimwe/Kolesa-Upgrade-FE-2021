<template>
    <a class="user" href="#" title="Перейти в свой профиль">
        <figure class="user__profile flex-container">
            <img class="user__avatar" :src="avatar" alt="Фото пользователя">
            <figcaption class="user__account">
                <p class="user__name">{{ name }}</p>
                <span class="user__budget" :scoreData="getScore">{{ score }} баллов</span>
            </figcaption>
        </figure>
    </a>
</template>

<script>
import axios from '../axios';

export default {
    name: 'User',
    created() {
        this.getUserData();
    },
    props: {
        points: Number,
    },
    data() {
        return {
            score:     '',
            name:      '',
            avatar:    '',
            scoreData: '',
        };
    },
    methods: {
        getUserData() {
            axios.get('/templates/7ZW3y5GAuIge/data')
                .then((response) => {
                    this.score = response.data.score;
                    this.name = response.data.name;
                    this.avatar = response.data.avatarUrl;
                })
                .catch((err) => {
                    console.warn(err);
                });
        },

        getScore() {
            this.$emit('scored', this.scoreData);
        },
    },
};
</script>
