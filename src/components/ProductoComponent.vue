<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    producto: {
        type: Object,
        required: true
    },
});

const producto = ref<any>({});

const pedido = ref<any>({});

function inicializar() {
    producto.value = props.producto;

    pedido.value = {
        id: null,
        cantidad: 1,
        color: null
    };
}

watch(
    () => props.producto,
    inicializar
);

onMounted(() => {
    inicializar()
});

const comprar = (idProducto: number) => {
    pedido.value.id = idProducto;
    alert(`* Id del producto: ${ pedido.id }\n* Cantidad: ${ pedido.cantidad }\n* Color: ${ pedido.color }`);
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h3>{{ producto.nombre }}</h3>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 ">
                <img
                    :src="producto.imagen"
                    alt=""
                    style="width: 100%;" />
            </div>
            <div class="col-12 col-sm-6  col-md-8">
                <h6>{{ producto.descripcion }}</h6>
                <div class="p-3 mb-2 text-white" style="background-color: gray;">
                    Precio: {{ producto.precio }} BOB
                </div>
                <h5>Color</h5>
                <div>
                    <div
                        v-for="(color, index) in producto.colores"
                        :key="index"
                        class="color-box clic"
                        :style="{ 'background': color }"
                        @click="pedido.color = color"></div>
                </div>
                <h5>Cantidad</h5>
                <div class="quantity">
                    <button type="button" @click="pedido.cantidad--">-</button>
                    <div>{{ pedido.cantidad }}</div>
                    <button type="button" @click="pedido.cantidad++">+</button>
                </div>
                <div class="buy-box">
                    <button
                        :disabled="pedido.cantidad < 1"
                        type="button"
                        class="btn btn-primary"
                        @click="comprar(producto.id)">
                        Comprar
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>
