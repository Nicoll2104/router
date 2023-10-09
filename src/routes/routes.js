import { createRouter, createWebHashHistory } from 'vue-router';
import login from '../components/login.vue';
import clientes from '../components/clientes.vue';
import ventas from '../components/ventas.vue';

const routes = [
    { path: '/', component: login },
    { path: '/clientes', component: clientes },
    { path: '/ventas', component: ventas }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});
