<template>
    <div id="app">
        <div class="main__container">
            <Breadcrumbs></Breadcrumbs>
            <h1 class="main__title">Как получить баллы</h1>
            <div class="main__stack">
                <InfoCard></InfoCard>
            </div>
        </div>
    </div>
</template>

<script>
import InfoCard from './components/InfoCard.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';

export default {
    name:       'Rules',
    components: {
        InfoCard,
        Breadcrumbs,
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
