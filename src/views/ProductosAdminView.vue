<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import productosServices from '../services/Services';

import { useRouter } from 'vue-router';

const router = useRouter();

const {
    obtenerCategoriasApi,
    obtenerProductosApi,
    eliminarProductoApi,
} = productosServices();

const filtro = ref<any>({
    nombre: ''
});
const productos = ref<any>([]);

const categorias = ref<any>([]);

onMounted(() => {
    obtenerProductos();
});

const obtenerProductos = async() => {
    let resp: any = await obtenerCategoriasApi();
    if (resp.ok) categorias.value = resp.data;

    resp = await obtenerProductosApi(filtro.value.nombre);
    if (resp.ok) productos.value = resp.data;
}

const nuevo = () => {
    router.push({ name: 'producto-editar' });
}

const editar = (id: number) => {
    router.push({ name: 'producto-editar', params: { id } });
}

const eliminar = async(id: number) => {
    if (confirm('¿Está seguro de eliminar el producto?')) {
        const resp: any = await eliminarProductoApi(id);
        if (resp.ok) {
            obtenerProductos();
            alert('La producto se eliminó correctamente.');
        }
    }
}
</script>

<template>
    <div class="container">
        <h5>
            <button class="btn btn-primary btn-sm" type="button" @click="nuevo">Nuevo</button>
            Filtro de productos
        </h5>
        <div class="row">
            <div class="col-md-4">
                <label for="nombre" class="form-label">Nombre</label>
                <div class="input-group">
                    <input type="text" class="form-control form-control-sm" name="nombre" v-model.trim="filtro.nombre">
                    <button class="btn btn-primary btn-sm" type="button" @click.prevent="obtenerProductos">Buscar</button>
                </div>
            </div>
        </div>

        <h5 class="mt-3">Listado de productos</h5>
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th style="width: 150px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto in productos" :key="producto.id">
                    <th>{{ producto.id }}</th>
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>{{ categorias.filter((c: any) => c.id == producto.id_categoria)[0].nombre }}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" type="button" @click="editar(producto.id)">Editar</button>
                        <button class="btn btn-danger btn-sm ms-1" type="button" @click="eliminar(producto.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
