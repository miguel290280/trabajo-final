<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import CategoriasServices from '../services/Services';

import { useRoute, useRouter } from 'vue-router';

const {
    grabarCategoriaApi,
    editarCategoriaApi,
    obtenerCategoriaPorIdApi,
} = CategoriasServices();

const router = useRouter();
const route = useRoute();

const categoria = ref<any>({
    id: 0,
    nombre: ''
});

onMounted(async () => {
    categoria.value.id = route.params.id ? parseInt(route.params.id.toString()) : 0;

    if (categoria.value.id > 0) {
        const resp = await obtenerCategoriaPorIdApi(categoria.value.id);
        if (resp.ok) {
            categoria.value = resp.data;
        }
    }
});

const grabar = async() => {
    if (categoria.value.id === 0) {
        const resp = await grabarCategoriaApi(categoria.value);
        if (resp.ok) {
            categoria.value.id = resp.data;
        }
    } else {
        await editarCategoriaApi(categoria.value);
    }
}

const nuevo = () => {
    categoria.value = {
        id: 0,
        nombre: ''
    };
}

const cancelar = () => {
    router.push({ name: 'categorias-admin' });
}
</script>

<template>
    <div class="container">
        <h5>
            <button class="btn btn-primary btn-sm me-1" type="button" @click="grabar">Grabar</button>
            <button class="btn btn-success btn-sm me-1" type="button" @click="nuevo">Nuevo</button>
            <button class="btn btn-danger btn-sm" type="button" @click="cancelar">Cancelar</button>
            Categoría
        </h5>
        <div class="row">
            <div class="col-md-4">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control form-control-sm" name="nombre" v-model.trim="categoria.nombre">
            </div>
        </div>
    </div>
</template>
../services/Services