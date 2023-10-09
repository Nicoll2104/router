<template>
    <div>
    <div class="q-pa-md">
      <q-markup-table>
          <thead>
            <tr>
              <th><h4 class="q-ma-xs text-left">Clientes</h4></th>
            </tr>
            <tr>
              <th class="text-left"><b>Cedula</b></th>
              <th class="text-right"><b>Nombre</b></th>
              <th class="text-right"><b>Apellido</b></th>
              <th class="text-right"><b>Edad</b></th>
              <th class="text-right"><b>Telefono</b></th>
              <th class="text-right"><b>Email</b></th>
              <th class="text-right"><b>Contrasena</b></th>
              <th class="text-right"><b>maleta</b></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows">
              <td class="text-left">{{ row.cedula }}</td>
              <td class="text-right">{{ row.nombre }}</td>
              <td class="text-right">{{ row.apellido }}</td>
              <td class="text-right">{{ row.edad }}</td>
              <td class="text-right">{{ row.telefono }}</td>
              <td class="text-right">{{ row.email }}</td>
              <td class="text-right">{{ row.contrasena }}</td>
              <td class="text-right">{{ row.maleta }}</td>
              <td class="text-right">
                <q-btn label="Editar" color="primary" @click="editar(row)">
              </td>
            </tr>
          </tbody>
          <q-markup-table>
      </div>
  </q-table>
      
    </template>
      
    <script>
    import axios from "axios";
    import { ref } from "vue";
    
    const columns = ref([
      {
        name: 'Cedula',
        label: 'Cedula',
        align: 'left',
        field: (row) => row.cedula,
      },
      {
        name: 'Nombre',
        label: 'Nombre',
        field: (row) => row.nombre,
      },
      {
        name: 'Apellido',
        label: 'Apellido',
        field: (row) => row.apellido,
      },
      {
        name: 'Edad',
        label: 'Edad',
        field: (row) => row.edad,
      },
      {
        name: 'Telefono',
        label: 'Telefono',
        field: (row) => row.telefono,
      },
      {
        name: 'Email',
        label: 'Email',
        field: (row) => row.email,
      },
      {
        name: 'Contrasena',
        label: 'Contrasena',
        field: (row) => row.contrasena,
      },
      {
        name: 'Maleta',
        label: 'Maleta',
        field: (row) => row.maleta,
      },
      {
        name: "Opciones",
        label: "Opciones",
        field: "actions",
      },
    ])

    const rows=ref([]);
    const id=ref("");
    const cedula=("");
    const nombre=("");
    const apellido=("");
    const edad=("");
    const telefono=("");
    const email=("");
    const contrasena=("");
    const maleta=("");

    
    export default {
      setup () {
        return {
          columns,
          rows
        }
      }
    }
  
    async function obtener() {
        let r = await axios.get(`https://boleto.onrender.com/api/cliente/ver`);
        console.log(r); 
    }
    
    obtener()
    
    </script>
      
      <style scoped>
      </style>
      