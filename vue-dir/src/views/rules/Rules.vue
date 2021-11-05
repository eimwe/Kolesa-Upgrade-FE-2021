<template>
    <div id="app">
        <div class="main__container">
            <div class="main__stack">
                <InfoCard></InfoCard>
            </div>
        </div>
    </div>
</template>

<script>
import InfoCard from './components/InfoCard.vue';

export default {
    name:       'Rules',
    components: {
        InfoCard,
    },

    data() {
        return {
            items: [],
        };
    },
};
</script>

<style lang="scss">
@use '../../assets/styles/rules';
</style>
