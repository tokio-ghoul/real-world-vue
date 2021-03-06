import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import EventDetail from '../views/EventDetail.vue';

const routes = [
    {
        path: '/',
        name: 'EventList',
        component: EventList,
        props: route => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
        path: '/events/:id',
        name: 'EventDetail',
        component: EventDetail,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
