<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import ProductosServices from '../services/Services';

import { useRoute, useRouter } from 'vue-router';

const {
    obtenerCategoriasApi,
    grabarProductoApi,
    editarProductoApi,
    obtenerProductoPorIdApi,
} = ProductosServices();

const router = useRouter();
const route = useRoute();

const producto = ref<any>({
    id: 0,
    nombre: '',
    precio: 0,
    id_categoria: 0,
});

const categorias = ref<any>([]);

onMounted(async () => {
    const resp: any = await obtenerCategoriasApi();
    if (resp.ok) categorias.value = resp.data;

    producto.value.id = route.params.id ? parseInt(route.params.id.toString()) : 0;
    if (producto.value.id > 0) {
        const resp = await obtenerProductoPorIdApi(producto.value.id);
        if (resp.ok) {
            producto.value = resp.data;
        }
    }
});

const grabar = async() => {
    if (producto.value.id === 0) {
        const resp = await grabarProductoApi(producto.value);
        if (resp.ok) {
            producto.value.id = resp.data;
        }
    } else {
        await editarProductoApi(producto.value);
    }
}

const nuevo = () => {
    producto.value = {
        id: 0,
        nombre: '',
        precio: 0,
        id_categoria: 0,
    };
}

const cancelar = () => {
    router.push({ name: 'productos-admin' });
}
</script>

<template>
    <div class="container">
        <h5>
            <button class="btn btn-primary btn-sm me-1" type="button" @click="grabar">Grabar</button>
            <button class="btn btn-success btn-sm me-1" type="button" @click="nuevo">Nuevo</button>
            <button class="btn btn-danger btn-sm" type="button" @click="cancelar">Cancelar</button>
            Producto
        </h5>
        <div class="row">
            <div class="col-md-4">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control form-control-sm" name="nombre" v-model.trim="producto.nombre">
            </div>
            <div class="col-md-4">
                <label for="precio" class="form-label">Precio</label>
                <input type="number" class="form-control form-control-sm" name="precio" v-model.trim="producto.precio">
            </div>
            <div class="col-md-4">
                <label for="id_categoria" class="form-label">Categoría</label>
                <select class="form-select form-select-sm" name="id_categoria" v-model.trim="producto.id_categoria">
                    <template v-for="categoria in categorias">
                        <option :value="categoria.id">{{ categoria.nombre }}</option>
                    </template>
                </select>
            </div>
        </div>
    </div>
</template>
