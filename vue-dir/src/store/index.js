import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            score:     '',
            name:      '',
            avatarUrl: '',
        },
    },
    mutations: {
        updateUserInfo(state, response) {
            state.userInfo = response;
        },
    },
    actions: {
        fetchUserInfo({ commit }) {
            axios.get('/templates/7ZW3y5GAuIge/data')
                .then((response) => {
                    commit('updateUserInfo', response.data);
                })
                .catch((err) => {
                    console.warn(err);
                });
        },
    },
});
