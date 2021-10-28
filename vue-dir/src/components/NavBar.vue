<template>
    <nav>
        <ul class="sidebar__navbar">
            <li
                v-for="navlink in navbar"
                :key="navlink.id"
            >
                <a class="sidebar__link"
                    :class="{
                        'sidebar__link--active': navlink.isActive,
                        '': !navlink.isActive,
                    }"
                    @click="toggleActive(navlink)"
                    href="#">
                    {{navlink.anchor}}
                    <span class="accent"
                        v-if="navlink.isHighlighted">
                        {{navlink.highlight}}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            navbar: [
                {
                    anchor:   'Оргсхема',
                    isActive: false,
                },
                {
                    anchor:        'Kolesa',
                    highlight:     'Team',
                    isActive:      false,
                    isHighlighted: true,
                },
                {
                    anchor:        'Kolesa',
                    highlight:     'Shop',
                    isActive:      true,
                    isHighlighted: true,
                },
                {
                    anchor:   'Картина компании',
                    isActive: false,
                },
                {
                    anchor:   'Новости',
                    isActive: false,
                },
                {
                    anchor:   'Education',
                    isActive: false,
                },
                {
                    anchor:   'Guidelines',
                    isActive: false,
                },
                {
                    anchor:   'Библиотека',
                    isActive: false,
                },
                {
                    anchor:   'FAQ',
                    isActive: false,
                },
            ],
        };
    },
    methods: {
        toggleActive(navlink) {
            this.navbar.forEach((nav) => {
                nav.isActive = false;
            });

            navlink.isActive = true;
        },
    },
};
</script>
