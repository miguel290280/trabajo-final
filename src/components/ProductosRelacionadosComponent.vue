<script setup lang="ts">
import { onMounted, ref } from 'vue';
import dbApi from '../api/dbApi';

import ProductoComponent from './ProductoComponent.vue';

const productos = ref<any>([]);
const productoSeleccionado = ref<any>({});

onMounted(async() => {
    const resp = await obtenerRecienNacidosSAMIPostgres();
    if (resp.ok) {
        productos.value = resp.data;
        productoSeleccionado.value = productos.value[0];
    }
});

const obtenerRecienNacidosSAMIPostgres = async() => {
    const respuesta = {
        data: [],
        ok: false,
    };

    try {
        const { data } = await dbApi.get(
            `http://localhost:3000/Productos`,
            {
                headers: {
                    'Content-type' : 'application/json',
                }
            }
        );
        respuesta.ok = true;
        respuesta.data = data;
    } catch( error ) {
        console.error(error);
    }

    return respuesta;
}

const seleccionProducto = (producto: any) => {
    productoSeleccionado.value = producto;
} 
</script>

<template>
    <producto-component :producto="productoSeleccionado"/>

    <div class="container ">
        <div class="row">
            <h4>Productos relacionados</h4>
        </div>
        <div class="row">
            <div
                v-for="producto in productos"
                :key="producto.id"
                class="col">
                <div class="card" style="width: 18rem;">
                    <div
                        class="card-body"
                        style="cursor: pointer;"
                        @click="seleccionProducto(producto)">
                        <h5 class="card-title">{{ producto.nombre }}</h5>
                        <img
                            :src="producto.imagen"
                            alt="" width="100%">
                        <p class="card-text">
                            {{ producto.descripcion }}
                        </p>
                        <div style="background: orangered; color: white; font-weight: bold">Precio: {{ producto.precio }} BOB</div>
                        <div>
                            <div>
                                <div
                                    v-for="(color, index) in producto.colores"
                                    :key="index"
                                    class="color-box clic"
                                    :style="{ 'background': color }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
