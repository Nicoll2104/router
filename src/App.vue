<template>
  <div>
      <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
    <button>Agregar</button>
  </div>
    
  </template>
    
  <script>
  import axios from "axios";
  import { ref, onMounted } from "vue";

  export default {
  setup() {
    const columns = [
    ];

    const rows = ref([]);

    async function obtenerDatos() {
  try {
    const response = await axios.get('https://boleto.onrender.com/api/cliente/ver');
    console.log('Respuesta del servidor:', response);
    rows.value = response.data; 
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}
    onMounted(() => {
      obtenerDatos();
    });

    return {
      columns,
      rows
    };
  }
};
  </script>
    
    <style scoped>
    </style>
    