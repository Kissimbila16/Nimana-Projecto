import { createRouter, createWebHistory } from 'vue-router';
import DefaultVue from "./components/layout/Default.vue";
const routes = [{
        path: '/',
        name: 'DefaultLayout',
        component: DefaultVue
    },

]
const router = createRouter({
    mode: "history",
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;