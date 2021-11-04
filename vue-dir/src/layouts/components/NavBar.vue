<template>
    <nav>
        <ul class="sidebar__navbar">
            <li
                v-for="navlink in navbar"
                :key="navlink.id"
            >
                <router-link class="sidebar__link"
                    exact
                    :to="navlink.href"
                    active-class="sidebar__link--active"
                    >
                    {{navlink.anchor}}
                    <span class="accent"
                        v-if="navlink.isHighlighted">
                        {{navlink.highlight}}
                    </span>
                </router-link>
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
                    href:     '/',
                    anchor:   'Оргсхема',
                    isActive: false,
                },
                {
                    href:          '/about',
                    anchor:        'Kolesa',
                    highlight:     'Team',
                    isActive:      false,
                    isHighlighted: true,
                },
                {
                    href:          '/shop',
                    anchor:        'Kolesa',
                    highlight:     'Shop',
                    isActive:      true,
                    isHighlighted: true,
                },
                /* {
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
                }, */
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
