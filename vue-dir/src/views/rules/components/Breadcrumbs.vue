<template>
    <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a class="breadcrumbs__link"
            href="#"
            @click.prevent="goToHomepage">
            Kolesa Shop
        </a>
        <a class="breadcrumbs__link" href="#" aria-current="page">
            Как получить баллы
        </a>
    </nav>
</template>

<script>
export default {
    name: 'Breadcrumbs',

    methods: {
        goToHomepage() {
            this.$router.push({ name: 'Shop' });
        },
    },
};
</script>

<style lang="scss">
@use '@/assets/styles/blocks/breadcrumbs';
</style>
