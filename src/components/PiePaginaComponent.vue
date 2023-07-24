<script setup lang="ts">
import { ref } from 'vue'

const configuracionPiePagina = ref<any>({
    footerColor: "slategrey",
});
</script>

<template>
  <footer :style="{ 'background-color': configuracionPiePagina.footerColor }"></footer>
</template>
