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
  
  async function obtener() {
      let r = await axios.get(`https://boleto.onrender.com/api/cliente/ver`);
      console.log(r); 
  }
  
  obtener()
  
  
  const columns = [
    {
      name: 'name',
      required: true,
      label: 'Cedula',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ]
  
  const rows = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    },
  ]
  
  export default {
    setup () {
      return {
        columns,
        rows
      }
    }
  }
  </script>
    
    <style scoped>
    </style>
    