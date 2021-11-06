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
        clothes:     [],
        accessories: [],
        everything:  [],
    },
    mutations: {
        updateUserInfo(state, response) {
            state.userInfo = response;
        },
        updateClothesInfo(state, response) {
            state.clothes = response;
        },
        updateAccessoriesInfo(state, response) {
            state.accessories = response;
        },
        updateEverything(state) {
            state.everything = [...state.clothes, ...state.accessories];
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
        fetchClothesInfo({ commit }) {
            axios.get('/templates/-_RLsEGjof6i/data')
                .then((response) => {
                    commit('updateClothesInfo', response.data);
                })
                .catch((err) => {
                    console.warn(err);
                });
        },
        fetchAccessoriesInfo({ commit }) {
            axios.get('/templates/q3OPxRyEcPvP/data')
                .then((response) => {
                    commit('updateAccessoriesInfo', response.data);
                })
                .catch((err) => {
                    console.warn(err);
                });
        },
    },
});
