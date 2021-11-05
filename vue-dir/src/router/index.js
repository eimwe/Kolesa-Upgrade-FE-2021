import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path:      '/',
        name:      'Home',
        component: Home,
    },
    {
        path:      '/about',
        name:      'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path:      '/shop',
        name:      'Shop',
        component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue'),
    },
    {
        path:      '/rules',
        name:      'Rules',
        component: () => import(/* webpackChunkName: "shop" */ '../views/rules/Rules.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
