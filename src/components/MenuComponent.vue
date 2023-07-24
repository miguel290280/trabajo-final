<script setup lang='ts'>
import { ref } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const configuracionPagina = ref<any>({
    titulo: 'Proyecto Final',
    menuColor: 'lightblue',
    menus: [
        {
            etiqueta: 'Categorías',
            url: 'categorias-admin'
        },
        {
            etiqueta: 'Productos',
            url: 'productos-admin'
        }
    ]
});

const ir = (menu: any) => {
    router.push({ name: menu.url });
}
</script>

<template>
    <nav class="navbar navbar-expand-lg" :style="{ 'background-color': configuracionPagina.menuColor} ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ configuracionPagina.titulo }}</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"
                        v-for="(menu, index) in configuracionPagina.menus"
                        :key="index">
                        <a
                            class="nav-link"
                            aria-current="page"
                            href="javascript:void(0)"
                            :title="menu.etiqueta"
                            @click="ir(menu)">
                            {{ menu.etiqueta }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
