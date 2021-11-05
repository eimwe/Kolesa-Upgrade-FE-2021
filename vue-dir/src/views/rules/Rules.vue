<template>
    <div id="app">
        <div class="main__container">
            <div class="main__stack">
                <output class="main__tiles"
                    name="card-container"
                    role="tabpanel"
                    aria-live="polite"
                    tabindex="0">

                </output>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:       'Rules',
    components: {

    },

    data() {
        return {
        };
    },
};
</script>

<style lang="scss">
@use '../../assets/styles/rules';
</style>
