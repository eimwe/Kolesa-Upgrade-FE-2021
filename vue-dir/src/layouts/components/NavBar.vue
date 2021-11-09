<template>
    <nav>
        <ul class="sidebar__navbar">
            <li
                v-for="navlink in navbar"
                :key="navlink.id"
            >
                <router-link class="sidebar__link"
                    :exact="navlink.isExact"
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
                    href:    '/',
                    anchor:  'Оргсхема',
                    isExact: true,
                },
                {
                    href:          '/about',
                    anchor:        'Kolesa',
                    highlight:     'Team',
                    isExact:       true,
                    isHighlighted: true,
                },
                {
                    href:          '/shop',
                    anchor:        'Kolesa',
                    highlight:     'Shop',
                    isExact:       false,
                    isHighlighted: true,
                },
            ],
        };
    },
};
</script>
