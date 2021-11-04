<template>
    <form id="search" action="#" method="GET">
        <div class="searcher">
            <input class="searcher__field"
                v-model="search"
                type="search"
                name="search-query"
                placeholder="Поиск">
            <input class="searcher__btn" type="submit" value="Найти">
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            search: '',
        };
    },
    methods: {
        setSearch(event) {
            this.search = event.target.value;
        },
    },
};
</script>
