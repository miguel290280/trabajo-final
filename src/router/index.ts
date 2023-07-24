import { createRouter, createWebHashHistory } from 'vue-router';
import CategoriasAdminView from '../views/CategoriasAdminView.vue';
import CategoriaEditarView from '../views/CategoriaEditarView.vue';
import ProductosAdminView  from '../views/ProductosAdminView.vue';
import ProductoEditarView  from '../views/ProductoEditarView.vue';

const routes = [
    {
        path: '',
        redirect: '/categorias-admin'
    },
    {
        path: '/categorias-admin',
        name: 'categorias-admin',
        component: CategoriasAdminView
    },
    {
        path: '/categoria-editar/:id?',
        name: 'categoria-editar',
        component: CategoriaEditarView
    },
    {
        path: '/productos-admin',
        name: 'productos-admin',
        component: ProductosAdminView
    },
    {
        path: '/producto-editar/:id?',
        name: 'producto-editar',
        component: ProductoEditarView
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;