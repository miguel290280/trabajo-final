<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import CategoriasServices from '../services/Services';

import { useRouter } from 'vue-router';

const router = useRouter();

const {
    obtenerCategoriasApi,
    eliminarCategoriaApi,
} = CategoriasServices();

const filtro = ref<any>({
    nombre: ''
});
const categorias = ref<any>([]);

onMounted(() => {
    obtenerCategorias();
});

const obtenerCategorias = async() => {
    const resp: any = await obtenerCategoriasApi(filtro.value.nombre);
    if (resp.ok) categorias.value = resp.data;
}

const nuevo = () => {
    router.push({ name: 'categoria-editar' });
}

const editar = (id: number) => {
    router.push({ name: 'categoria-editar', params: { id } });
}

const eliminar = async(id: number) => {
    if (confirm('¿Está seguro de eliminar la categoría?')) {
        const resp: any = await eliminarCategoriaApi(id);
        if (resp.ok) {
            obtenerCategorias();
            alert('La categoría se eliminó correctamente.');
        }
    }
}
</script>

<template>
    <div class="container">
        <h5>
            <button class="btn btn-primary btn-sm" type="button" @click="nuevo">Nuevo</button>
            Filtro de Categorías
        </h5>
        <div class="row">
            <div class="col-md-4">
                <label for="nombre" class="form-label">Nombre</label>
                <div class="input-group">
                    <input type="text" class="form-control form-control-sm" name="nombre" v-model.trim="filtro.nombre">
                    <button class="btn btn-primary btn-sm" type="button" @click.prevent="obtenerCategorias">Buscar</button>
                </div>
            </div>
        </div>
        <h5 class="mt-3">Listado de Categorías</h5>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Categoría</th>
                    <th style="width: 150px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="categoria in categorias" :key="categoria.id">
                    <th>{{ categoria.id }}</th>
                    <td>{{ categoria.nombre }}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" type="button" @click="editar(categoria.id)">Editar</button>
                        <button class="btn btn-danger btn-sm ms-1" type="button" @click="eliminar(categoria.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
../services/Services